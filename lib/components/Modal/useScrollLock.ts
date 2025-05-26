import { useCallback, useLayoutEffect, useRef } from "react";

interface WindowWithMSStream extends Window {
  MSStream?: boolean | undefined;
}

const useScrollLock = () => {
  const scrollOffset = useRef(0);
  
  // Check if we're on iOS
  const isIOS = 
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !(window as WindowWithMSStream).MSStream;

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty("--scrollbar-compensation", `${scrollBarCompensation}px`);
  }, []);

  const lockScroll = useCallback(() => {
    document.body.dataset.scrollLock = "true";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "var(--scrollbar-compensation)";

    if (isIOS) {
      scrollOffset.current = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollOffset.current}px`;
      document.body.style.width = "100%";
    }
  }, [isIOS]);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    if (isIOS) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollOffset.current);
    }
    
    delete document.body.dataset.scrollLock;
  }, [isIOS]);

  return {
    lockScroll,
    unlockScroll
  };
};

export default useScrollLock; 