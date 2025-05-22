import { forwardRef } from "react";
import type { SplitTagProps } from "./types";
import { TagSize, TagStatus, TagStyle, TagVariant } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagLeftSection,
  StyledSplitTagRightSection,
} from "./StyledTag";

export const SplitTag = forwardRef<HTMLDivElement, SplitTagProps>(
  (
    {
      text,
      secondaryText,
      variant = TagVariant.SUBTLE,
      status = TagStatus.NEUTRAL,
      secondaryVariant,
      secondaryStatus,
      size = TagSize.MD,
      style = TagStyle.ROUNDED,
      leadingSlot,
      trailingSlot,
      className = "",
      onClick,
      onSecondaryClick,
      testId,
      ...rest
    },
    ref
  ) => {
    const rightVariant = secondaryVariant ?? variant;
    const rightStatus = secondaryStatus ?? status;
    
    return (
      <StyledSplitTagContainer
        ref={ref}
        className={className}
        data-testid={testId}
        {...rest}
      >
        <StyledSplitTagLeftSection
          $variant={variant}
          $status={status}
          $size={size}
          $tagStyle={style}
          onClick={onClick}
        >
          {leadingSlot}
          {text}
        </StyledSplitTagLeftSection>
        
        <StyledSplitTagRightSection
          $variant={rightVariant}
          $status={rightStatus}
          $size={size}
          $tagStyle={style}
          onClick={onSecondaryClick}
        >
          {secondaryText}
          {trailingSlot}
        </StyledSplitTagRightSection>
      </StyledSplitTagContainer>
    );
  }
);

SplitTag.displayName = "SplitTag";

export default SplitTag;
