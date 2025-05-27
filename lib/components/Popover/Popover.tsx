import * as RadixPopover from "@radix-ui/react-popover";
import Block from "../Primitives/Block/Block";
import styled from "styled-components";
import { X } from "lucide-react";
import { useState } from "react";
import { Button, ButtonType, ButtonSubType } from "../Button";
import { PopoverProps, PopoverSize } from "./types";
import Text from "../Text/Text";
import popoverTokens from "./popover.tokens";

const StyledContent = styled(RadixPopover.Content)<{ $size: PopoverSize }>(
  ({ $size }) => ({
    borderRadius: popoverTokens.border.radius,
    border: `${popoverTokens.border.width} solid ${popoverTokens.border.color}`,
    background: popoverTokens.background.color,
    boxShadow: popoverTokens.shadow,
    padding: popoverTokens.padding[$size],
    gap: popoverTokens.gap.content,
    display: "flex",
    flexDirection: "column",
    width: popoverTokens.width[$size],
    maxWidth: "100%",
  })
);

const PopoverHeader = ({
  heading,
  description,
  showCloseButton,
  onClose,
  size = "sm",
}: {
  heading?: string;
  description?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  size?: PopoverSize;
}) => {
  return (
    <Block display="flex" flexDirection="column" gap={popoverTokens.gap.header}>
      <Block display="flex" justifyContent="space-between">
        {heading && (
          <Text
            variant={popoverTokens.font.size.heading[size]}
            fontWeight={popoverTokens.font.weight.heading}
            color={popoverTokens.color.heading}
          >
            {heading}
          </Text>
        )}
        {showCloseButton && (
          <X
            className="cursor-pointer"
            size={popoverTokens.icon.close.size}
            onClick={onClose}
            color={popoverTokens.color.closeIcon}
          />
        )}
      </Block>
      {description && (
        <Text
          variant={popoverTokens.font.size[size]}
          color={popoverTokens.color.description}
        >
          {description}
        </Text>
      )}
    </Block>
  );
};

const PopoverFooter = ({
  primaryAction,
  secondaryAction,
}: {
  primaryAction?: PopoverProps["primaryAction"];
  secondaryAction?: PopoverProps["secondaryAction"];
}) => {
  if (!primaryAction && !secondaryAction) return null;

  return (
    <Block display="flex" gap={popoverTokens.gap.content}>
      {primaryAction && (
        <RadixPopover.Close asChild>
          <Button
            buttonType={primaryAction.type || ButtonType.PRIMARY}
            text={primaryAction.label}
            onClick={primaryAction.onClick}
            isDisabled={primaryAction.isDisabled}
            subType={primaryAction.subType || ButtonSubType.LINK}
          />
        </RadixPopover.Close>
      )}
      {secondaryAction && (
        <RadixPopover.Close asChild>
          <Button
            buttonType={secondaryAction.type || ButtonType.SECONDARY}
            text={secondaryAction.label}
            onClick={secondaryAction.onClick}
            isDisabled={secondaryAction.isDisabled}
            subType={secondaryAction.subType || ButtonSubType.LINK}
          />
        </RadixPopover.Close>
      )}
    </Block>
  );
};

export const Popover = ({
  heading,
  description,
  trigger,
  children,
  showCloseButton = true,
  primaryAction,
  secondaryAction,
  size = "sm",
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <RadixPopover.Root open={isOpen} onOpenChange={setIsOpen}>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <StyledContent $size={size} sideOffset={8}>
        <PopoverHeader
          heading={heading}
          description={description}
          onClose={() => setIsOpen(false)}
          showCloseButton={showCloseButton}
          size={size}
        />
        <Block>{children}</Block>
        <PopoverFooter
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      </StyledContent>
    </RadixPopover.Root>
  );
};

Popover.displayName = "Popover";

export default Popover;
