import { forwardRef, memo, useCallback, MouseEvent } from "react";
import type { TagProps } from "./types";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import { StyledTagContainer, StyledTagContent } from "./StyledTag";

// Hook to extract common tag logic
const useTag = (props: TagProps) => {
  const {
    variant = TagVariant.SUBTLE,
    status = TagStatus.NEUTRAL,
    size = TagSize.MD,
    shape = TagShape.ROUNDED,
  } = props;
  
  return {
    shape,
    variant,
    status,
    size
  };
};

export const Tag = memo(forwardRef<HTMLDivElement, TagProps>(
  (props, ref) => {
    const {
      text,
      leadingSlot,
      trailingSlot,
      className = "",
      onClick,
      testId,
      children,
      // Explicitly extract props that shouldn't be passed to the DOM element
      variant,
      status,
      size,
      shape,
      ...domProps
    } = props;
    
    const {
      shape: computedShape,
      variant: computedVariant,
      status: computedStatus,
      size: computedSize
    } = useTag(props);
    
    // Memoize click handler for better performance
    const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
    }, [onClick]);
    
    return (
      <StyledTagContainer
        ref={ref}
        $variant={computedVariant}
        $status={computedStatus}
        $size={computedSize}
        $tagShape={computedShape}
        className={className}
        onClick={handleClick}
        data-testid={testId}
        {...domProps}
      >
        {leadingSlot}
        
        {text && <StyledTagContent>{text}</StyledTagContent>}
        
        {children}
        
        {trailingSlot}
      </StyledTagContainer>
    );
  }
));

Tag.displayName = "Tag";

export default Tag;
