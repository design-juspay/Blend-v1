import React, { forwardRef } from "react";
import type { TagProps } from "./types";
import { TagSize, TagStatus, TagStyle, TagVariant } from "./types";
import { StyledTagContainer, StyledTagContent } from "./StyledTag";
import { getTagIconSize } from "./tagUtils";

/**
 * Tag Component
 * 
 * A component for displaying labels, categories, or statuses
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      text,
      variant = TagVariant.SUBTLE,
      status = TagStatus.NEUTRAL,
      size = TagSize.MD,
      style = TagStyle.ROUNDED,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      className = "",
      onClick,
      testId,
      children,
      ...rest
    },
    ref
  ) => {
    // Get icon size based on tag size
    const iconSize = getTagIconSize(size);
    
    return (
      <StyledTagContainer
        ref={ref}
        $variant={variant}
        $status={status}
        $size={size}
        $tagStyle={style}
        className={className}
        onClick={onClick}
        data-testid={testId}
        {...rest}
      >
        {LeadingIcon && (
          <LeadingIcon size={iconSize} />
        )}
        
        {text && (
          <StyledTagContent>
            {text}
          </StyledTagContent>
        )}
        
        {children}
        
        {TrailingIcon && (
          <TrailingIcon size={iconSize} />
        )}
      </StyledTagContainer>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
