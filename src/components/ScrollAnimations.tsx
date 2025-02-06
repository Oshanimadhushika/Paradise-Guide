import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimations = () => {
  useEffect(() => {
    // Fade in animations for sections with more specific start point
    gsap.utils.toArray('.fade-in').forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', 
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });
    });

    // Slide in from left
    gsap.utils.toArray('.slide-left').forEach((element: any) => {
      gsap.from(element, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Slide in from right
    gsap.utils.toArray('.slide-right').forEach((element: any) => {
      gsap.from(element, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Scale up animation
    gsap.utils.toArray('.scale-up').forEach((element: any) => {
      gsap.from(element, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Enhanced stagger animations for filtered items
    gsap.utils.toArray('.stagger-group').forEach((group: any) => {
      const elements = group.children;
      
      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        immediateRender: false, 
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      });

      // Re-run animation when filtered
      const observer = new MutationObserver(() => {
        gsap.from(elements, {
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.08,
          clearProps: 'all'
        });
      });

      observer.observe(group, { 
        childList: true, 
        subtree: true 
      });

      return () => observer.disconnect();
    });
  }, []);

  return null;
}; 