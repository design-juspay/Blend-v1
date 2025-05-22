import { forwardRef } from "react";
import type { TagProps } from "./types";
import { TagSize, TagStatus, TagStyle, TagVariant } from "./types";
import { StyledTagContainer, StyledTagContent } from "./StyledTag";

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      text,
      variant = TagVariant.SUBTLE,
      status = TagStatus.NEUTRAL,
      size = TagSize.MD,
      style = TagStyle.ROUNDED,
      leadingSlot,
      trailingSlot,
      className = "",
      onClick,
      testId,
      children,
      ...rest
    },
    ref
  ) => (
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
      {leadingSlot}
      
      {text && <StyledTagContent>{text}</StyledTagContent>}
      
      {children}
      
      {trailingSlot}
    </StyledTagContainer>
  )
);

Tag.displayName = "Tag";

export default Tag;
