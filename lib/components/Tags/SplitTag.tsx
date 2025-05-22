import { forwardRef, memo, useCallback, MouseEvent } from "react";
import type { SplitTagProps } from "./types";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagSection,
} from "./StyledTag";

// Hook to extract common tag logic
const useSplitTag = (props: SplitTagProps) => {
  const {
    text,
    secondaryText,
    variant = TagVariant.SUBTLE,
    status = TagStatus.NEUTRAL,
    secondaryVariant,
    secondaryStatus,
    size = TagSize.MD,
    shape = TagShape.ROUNDED,
  } = props;
  
  // Determine right section props
  const rightVariant = secondaryVariant ?? variant;
  const rightStatus = secondaryStatus ?? status;

  return {
    shape,
    rightVariant,
    rightStatus,
    text,
    secondaryText,
    variant,
    status,
    size
  };
};

export const SplitTag = memo(forwardRef<HTMLDivElement, SplitTagProps>(
  (props, ref) => {
    const {
      leadingSlot,
      trailingSlot,
      className = "",
      onClick,
      onSecondaryClick,
      testId,
      // Explicitly extract props that shouldn't be passed to the DOM element
      shape,
      variant,
      status,
      size,
      text,
      secondaryText,
      secondaryVariant,
      secondaryStatus,
      ...domProps
    } = props;

    const {
      shape: computedShape,
      rightVariant,
      rightStatus,
      variant: computedVariant,
      status: computedStatus,
      size: computedSize
    } = useSplitTag(props);
    
    // Memoize click handlers for better performance
    const handlePrimaryClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
    }, [onClick]);
    
    const handleSecondaryClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
      onSecondaryClick?.(e);
    }, [onSecondaryClick]);
    
    return (
      <StyledSplitTagContainer
        ref={ref}
        className={className}
        data-testid={testId}
        {...domProps}
      >
        <StyledSplitTagSection
          $variant={computedVariant}
          $status={computedStatus}
          $size={computedSize}
          $tagShape={computedShape}
          $position="left"
          onClick={handlePrimaryClick}
        >
          {leadingSlot}
          {text}
        </StyledSplitTagSection>
        
        <StyledSplitTagSection
          $variant={rightVariant}
          $status={rightStatus}
          $size={computedSize}
          $tagShape={computedShape}
          $position="right"
          onClick={handleSecondaryClick}
        >
          {secondaryText}
          {trailingSlot}
        </StyledSplitTagSection>
      </StyledSplitTagContainer>
    );
  }
));

SplitTag.displayName = "SplitTag";

export default SplitTag;
