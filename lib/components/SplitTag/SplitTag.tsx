import { forwardRef } from "react";
import type { SplitTagProps } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagSection,
} from "./StyledSplitTag";
import { TagVariant, TagStatus, TagSize, TagShape } from "./types";
import { Tag } from "../Tags";

export const SplitTag = forwardRef<HTMLDivElement, SplitTagProps>(
  (props, ref) => {
    const {
      primaryTag,
      secondaryTag,
      size = TagSize.MD,
      shape = TagShape.ROUNDED,
      leadingSlot,
      trailingSlot,
      className = "",
      testId,
      ...domProps
    } = props;
    
    // If no secondaryTag is provided, render a single Tag
    if (!secondaryTag) {
      return (
        <Tag
          ref={ref}
          text={primaryTag.text}
          variant={primaryTag.variant}
          status={primaryTag.status}
          size={size}
          shape={shape}
          leadingSlot={leadingSlot}
          trailingSlot={trailingSlot}
          className={className}
          onClick={primaryTag.onClick}
          testId={testId}
          {...domProps}
        />
      );
    }
    
    // Apply defaults for primary tag
    const primaryVariant = primaryTag.variant || TagVariant.SUBTLE;
    const primaryStatus = primaryTag.status || TagStatus.NEUTRAL;
    
    // Apply defaults for secondary tag (fallback to primary tag values if not specified)
    const secondaryVariant = secondaryTag.variant || primaryVariant;
    const secondaryStatus = secondaryTag.status || primaryStatus;
    
    return (
      <StyledSplitTagContainer
        ref={ref}
        className={className}
        data-testid={testId}
        {...domProps}
      >
        <StyledSplitTagSection
          $variant={primaryVariant}
          $status={primaryStatus}
          $size={size}
          $tagShape={shape}
          $position="left"
          onClick={primaryTag.onClick}
        >
          {leadingSlot}
          {primaryTag.text}
        </StyledSplitTagSection>
        
        <StyledSplitTagSection
          $variant={secondaryVariant}
          $status={secondaryStatus}
          $size={size}
          $tagShape={shape}
          $position="right"
          onClick={secondaryTag.onClick}
        >
          {secondaryTag.text}
          {trailingSlot}
        </StyledSplitTagSection>
      </StyledSplitTagContainer>
    );
  }
);

SplitTag.displayName = "SplitTag";

export default SplitTag; 