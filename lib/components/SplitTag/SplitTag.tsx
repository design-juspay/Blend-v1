import { forwardRef } from "react";
import type { SplitTagProps } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagSection,
} from "./StyledSplitTag";
import { TagVariant, TagStatus, TagShape } from "./types";
import { Tag } from "../Tags";

export const SplitTag = forwardRef<HTMLDivElement, SplitTagProps>(
  (props, ref) => {
    const {
      primaryTag,
      secondaryTag,
      size,
      shape = TagShape.ROUNDED,
      leadingSlot,
      trailingSlot,
      ...domProps
    } = props;
    
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
    
    const primaryVariant = primaryTag.variant || TagVariant.SUBTLE;
    const primaryStatus = primaryTag.status || TagStatus.NEUTRAL;
    
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