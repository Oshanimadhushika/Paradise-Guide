export const pageview = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-VF4JLVK5RJ", {
        page_path: url,
      });
    }
  };


  export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };
  