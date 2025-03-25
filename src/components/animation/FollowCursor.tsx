import React, { useRef, useEffect, ReactNode, useState } from "react";
import { useSpring, animated, to, SpringValue } from "@react-spring/web";

interface AnimationConfig {
  mass?: number;
  tension?: number;
  friction?: number;
  precision?: number;
  velocity?: number;
  clamp?: boolean;
  duration?: number;
  easing?: (t: number) => number;
}

interface TouchState {
  startX?: number;
  startY?: number;
  offsetX?: number;
  offsetY?: number;
}

interface FollowCursorProps {
  children: ReactNode;
  className?: string;
  animationConfig?: AnimationConfig;
  hoverScale?: number;
  offsetX?: number;
  cardWidth?: string;
  rotationFactor?: number;
  perspective?: string;
  zoomSensitivity?: number;
  wheelConfig?: AnimationConfig;
  enableTilt?: boolean;
  enableZoom?: boolean;
  enableDrag?: boolean;
}

const calcX = (
  y: number,
  ly: number,
  containerCenterY: number,
  rotationFactor: number
): number => -(y - ly - containerCenterY) / rotationFactor;

const calcY = (
  x: number,
  lx: number,
  containerCenterX: number,
  rotationFactor: number
): number => (x - lx - containerCenterX) / rotationFactor;

const FollowCursor: React.FC<FollowCursorProps> = ({
  children,
  className = "",
  animationConfig = { mass: 5, tension: 350, friction: 40 },
  hoverScale = 1.1,
  offsetX = 20,
  cardWidth = "200px",
  rotationFactor = 20,
  perspective = "300px",
  zoomSensitivity = 200,
  wheelConfig = { mass: 1, tension: 200, friction: 30 },
  enableTilt = true,
  enableZoom = true,
  enableDrag = true,
}) => {
  const [isClient, setIsClient] = useState(false);
  const domTarget = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchState = useRef<TouchState>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = (): boolean => {
    if (!isClient) return false;
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: animationConfig,
    })
  );

  const [{ wheelY }, wheelApi] = useSpring(() => ({
    wheelY: 0,
    config: wheelConfig,
  }));

  // Touch handling logic
  useEffect(() => {
    if (!isClient || !domTarget.current || !enableDrag) return;

    const card = domTarget.current;
    let isDragging = false;
    let pinchStartDistance = 0;
    let pinchStartAngle = 0;
    let initialZoom = 0;
    let initialRotateZ = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        touchState.current = {
          startX: touch.clientX,
          startY: touch.clientY,
          offsetX: x.get(),
          offsetY: y.get(),
        };
        isDragging = true;
      } else if (e.touches.length === 2 && enableZoom) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        pinchStartDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        pinchStartAngle = Math.atan2(
          touch2.clientY - touch1.clientY,
          touch2.clientX - touch1.clientX
        );
        initialZoom = zoom.get();
        initialRotateZ = rotateZ.get();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging && e.touches.length !== 2) return;

      if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - (touchState.current.startX || 0);
        const deltaY = touch.clientY - (touchState.current.startY || 0);

        api.start({
          x: (touchState.current.offsetX || 0) + deltaX,
          y: (touchState.current.offsetY || 0) + deltaY,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
        });
      } else if (e.touches.length === 2 && enableZoom) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const currentAngle = Math.atan2(
          touch2.clientY - touch1.clientY,
          touch2.clientX - touch1.clientX
        );

        const zoomDelta =
          (currentDistance - pinchStartDistance) / zoomSensitivity;
        const rotateDelta = currentAngle - pinchStartAngle;

        api.start({
          zoom: initialZoom + zoomDelta,
          rotateZ: initialRotateZ + rotateDelta,
        });
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      api.start({ scale: hoverScale });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      wheelApi.start({
        wheelY: wheelY.get() + e.deltaY,
        immediate: true,
      });
    };

    card.addEventListener("touchstart", handleTouchStart, { passive: false });
    card.addEventListener("touchmove", handleTouchMove, { passive: false });
    card.addEventListener("touchend", handleTouchEnd);
    if (enableZoom)
      card.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      card.removeEventListener("touchstart", handleTouchStart);
      card.removeEventListener("touchmove", handleTouchMove);
      card.removeEventListener("touchend", handleTouchEnd);
      card.removeEventListener("wheel", handleWheel);
    };
  }, [
    api,
    x,
    y,
    zoom,
    rotateZ,
    wheelY,
    wheelApi,
    enableDrag,
    enableZoom,
    zoomSensitivity,
    hoverScale,
    isClient,
  ]);

  // Mouse movement logic
  useEffect(() => {
    if (!isClient || isMobile() || !enableTilt) return;

    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerCenterX = rect.width / 2;
      const containerCenterY = rect.top + rect.height / 2;

      const px = event.clientX;
      const py = event.clientY;

      const xPos = px - containerCenterX;
      const yPos = py - containerCenterY;

      const parsedCardWidth = parseFloat(cardWidth);
      const calculatedWidth = container.offsetWidth * (parsedCardWidth / 100);
      const calculatedOffset = calculatedWidth / 2 + offsetX;

      const screenWidth = window.innerWidth;
      let extraOffset = 0;
    
      if (screenWidth >= 1280) {
        // xl screens
        extraOffset = rect.width * 0.25; // 25% of container width
      } else if (screenWidth >= 1024) {
        // lg screens
        extraOffset = rect.width * 0.20; // 20% of container width
      } else if (screenWidth >= 768) {
        // md screens
        extraOffset = rect.width * 0.15; // 15% of container width
      } else {
        // sm screens
        extraOffset = rect.width * 0.14; // 10% of container width
      }

      api.start({
        x: xPos + calculatedOffset+extraOffset,
        y: yPos,
        rotateX: enableTilt
          ? calcX(py, y.get(), containerCenterY, rotationFactor)
          : 0,
        rotateY: enableTilt
          ? calcY(px, x.get(), containerCenterX, rotationFactor)
          : 0,
        scale: hoverScale,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [
    api,
    y,
    x,
    cardWidth,
    offsetX,
    hoverScale,
    enableTilt,
    rotationFactor,
    isClient,
  ]);

  const wheelTransform = (yValue: number): string => {
    if (!isClient || !containerRef.current) return "translateY(0)";

    const imgHeight =
      containerRef.current.offsetWidth * (parseFloat(cardWidth) / 100) - 20;
    return `translateY(${
      -imgHeight * (yValue < 0 ? 6 : 1) - (yValue % (imgHeight * 5))
    }px)`;
  };

  if (!isClient) {
    return (
      <div className={`container ${className}  `} ref={containerRef}>
        <div
          className="relative w-[10px] h-[50px] rounded-full bg-cover bg-center"
          style={{ backgroundImage: "url('/LinkToPageArrow.svg')" }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${className}`} ref={containerRef}>
      <animated.div
        ref={domTarget}
        className="absolute w-[10px] h-[50px] rounded-full shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] transition-opacity duration-500 [will-change:transform] touch-none bg-cover bg-center"
        style={{
          width: cardWidth,
          backgroundImage: "url('/LinkToPageArrow.svg')",
          transform:   `perspective(${perspective})`,
          x: x as SpringValue<number>,
          y: y as SpringValue<number>,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX: enableTilt ? (rotateX as SpringValue<number>) : 0,
          rotateY: enableTilt ? (rotateY as SpringValue<number>) : 0,
          rotateZ: enableZoom ? (rotateZ as SpringValue<number>) : 0,
        }}
       
      >
        <animated.div style={{ transform: wheelY.to(wheelTransform) }}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default FollowCursor;