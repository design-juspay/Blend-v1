import React, { useEffect, useRef, useState } from "react";

interface VirtualizerProps<T> {
  items: T[];
  itemHeight: number;
  maxHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
}

function Virtualizer<T>({
  items,
  itemHeight = 40,
  maxHeight = 300,
  renderItem,
  className = "",
  style = {},
  testId = "virtualizer-container",
}: VirtualizerProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [visibleEndIndex, setVisibleEndIndex] = useState(
    Math.min(items.length - 1, Math.ceil(maxHeight / itemHeight))
  );

  const MAX_SAFE_HEIGHT = 999999;
  const calculatedTotalHeight = items.length * itemHeight;
  const totalHeight = Math.min(calculatedTotalHeight, MAX_SAFE_HEIGHT);
  const containerHeight = Math.min(totalHeight, maxHeight);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateVisibleRange = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;

      const overscan = 2;
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan
      );
      const endIndex = Math.min(
        items.length - 1,
        Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan
      );

      setVisibleStartIndex(startIndex);
      setVisibleEndIndex(endIndex);
    };

    updateVisibleRange();

    const container = containerRef.current;
    container.addEventListener("scroll", updateVisibleRange);
    window.addEventListener("resize", updateVisibleRange);

    return () => {
      container.removeEventListener("scroll", updateVisibleRange);
      window.removeEventListener("resize", updateVisibleRange);
    };
  }, [items.length, itemHeight]);

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        height: `${containerHeight}px`,
        overflow: "auto",
        position: "relative",
        willChange: "transform",
        ...style,
      }}
      data-testid={testId}
    >
      <div style={{ height: `${totalHeight}px`, position: "relative" }}>
        {items.slice(visibleStartIndex, visibleEndIndex + 1).map((item, i) => {
          const index = visibleStartIndex + i;
          return (
            <div
              key={`virtual-item-${index}`}
              style={{
                position: "absolute",
                top: `${index * itemHeight}px`,
                left: 0,
                width: "100%",
                height: `${itemHeight}px`,
              }}
            >
              {renderItem(item, index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Virtualizer;
