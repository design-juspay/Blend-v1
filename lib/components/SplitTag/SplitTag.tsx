import { forwardRef } from "react";
import type { SplitTagProps } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagSection,
} from "./StyledSplitTag";
import { TagVariant, TagStatus } from "./types";
import { Tag } from "../Tags";

/**
 * SplitTag component
 * 
 * Renders a split tag with primary and secondary sections, or falls back to a regular Tag
 * if no secondary tag is provided.
 * 
 * @example
 * <SplitTag 
 *   primaryTag={{ text: "Category", variant: "attentive" }}
 *   secondaryTag={{ text: "5", variant: "noFill" }}
 * />
 */
export const SplitTag = forwardRef<HTMLDivElement, SplitTagProps>(
  (props, ref) => {
    const {
      primaryTag,
      secondaryTag,
      size,
      shape,
      leadingSlot,
      trailingSlot,
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
          onClick={primaryTag.onClick}
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