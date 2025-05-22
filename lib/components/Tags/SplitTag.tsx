import React, { forwardRef } from "react";
import type { SplitTagProps } from "./types";
import { TagSize, TagStatus, TagStyle, TagVariant } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagLeftSection,
  StyledSplitTagRightSection,
} from "./StyledTag";
import { getTagIconSize } from "./tagUtils";

/**
 * SplitTag Component
 * 
 * A component for displaying a two-part tag with separate interactive sections
 * Can have different variants and statuses for each section
 */
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
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      className = "",
      onClick,
      onSecondaryClick,
      testId,
      ...rest
    },
    ref
  ) => {
    // Get icon size based on tag size
    const iconSize = getTagIconSize(size);
    
    // Use primary variant/status for secondary section if not provided
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
          {LeadingIcon && (
            <LeadingIcon size={iconSize} />
          )}
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
          {TrailingIcon && (
            <TrailingIcon size={iconSize} />
          )}
        </StyledSplitTagRightSection>
      </StyledSplitTagContainer>
    );
  }
);

SplitTag.displayName = "SplitTag";

export default SplitTag;
