import { forwardRef, memo } from "react";
import type { SplitTagProps, TagBaseProps } from "./types";
import {
  StyledSplitTagContainer,
  StyledSplitTagSection,
} from "./StyledTag";
import { useTagProps } from "./tagUtils";
import Tag from "./Tag";

export const SplitTag = memo(forwardRef<HTMLDivElement, SplitTagProps>(
  (props, ref) => {
    const {
      primaryTag,
      secondaryTag,
      size,
      shape,
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

    // Create a TagBaseProps object for useTagProps
    const tagBaseProps: TagBaseProps = {
      text: primaryTag.text, // Required by TagBaseProps
      variant: primaryTag.variant,
      status: primaryTag.status,
      size,
      shape
    };
    
    // Determine computed properties for the primary and secondary sections
    const computedProps = useTagProps(tagBaseProps);
    
    return (
      <StyledSplitTagContainer
        ref={ref}
        className={className}
        data-testid={testId}
        {...domProps}
      >
        <StyledSplitTagSection
          $variant={computedProps.variant}
          $status={computedProps.status}
          $size={computedProps.size}
          $tagShape={computedProps.shape}
          $position="left"
          onClick={primaryTag.onClick}
        >
          {leadingSlot}
          {primaryTag.text}
        </StyledSplitTagSection>
        
        <StyledSplitTagSection
          $variant={secondaryTag.variant || computedProps.variant}
          $status={secondaryTag.status || computedProps.status}
          $size={computedProps.size}
          $tagShape={computedProps.shape}
          $position="right"
          onClick={secondaryTag.onClick}
        >
          {secondaryTag.text}
          {trailingSlot}
        </StyledSplitTagSection>
      </StyledSplitTagContainer>
    );
  }
));

SplitTag.displayName = "SplitTag";

export default SplitTag;
