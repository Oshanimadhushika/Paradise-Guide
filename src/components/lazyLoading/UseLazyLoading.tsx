import { useEffect, useReducer, useCallback, RefObject } from "react";
import debounce from "lodash/debounce";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

interface State {
  loading: boolean;
  currentPage: number;
  data: any[];
}

interface Action {
  type: "set" | "onGrabData";
  payload?: Partial<State> & { data?: any[] };
}

interface UseLazyLoadProps {
  triggerRef: RefObject<HTMLElement>;
  onGrabData: (page: number) => Promise<any[]>;
  options?: IntersectionObserverInit;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    case "onGrabData":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...(action.payload?.data || [])],
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};

const useLazyLoad = ({ triggerRef, onGrabData, options }: UseLazyLoadProps) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    currentPage: 1,
    data: [],
  });

  const _handleEntry = async (entry: IntersectionObserverEntry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: "set", payload: { loading: true } });
      const data = await onGrabData(state.currentPage);
      dispatch({ type: "onGrabData", payload: { data } });
    }
  };
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const observer = new IntersectionObserver(onIntersect, options);
      observer.observe(triggerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return state;
};

export default useLazyLoad;