import { forwardRef } from "react";
import type { TagProps } from "./types";
import { StyledTagContainer, StyledTagContent } from "./StyledTag";
import { TagVariant, TagStatus, TagSize, TagShape } from "./types";

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (props, ref) => {
    const {
      text,
      leadingSlot,
      trailingSlot,
      onClick,
      testId,
      children,
      // Extract props with defaults
      variant = TagVariant.SUBTLE,
      status = TagStatus.NEUTRAL,
      size = TagSize.MD,
      shape = TagShape.ROUNDED,
      ...domProps
    } = props;
    
    return (
      <StyledTagContainer
        ref={ref}
        $variant={variant}
        $status={status}
        $size={size}
        $tagShape={shape}
        onClick={onClick}
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
);

Tag.displayName = "Tag";

export default Tag;
