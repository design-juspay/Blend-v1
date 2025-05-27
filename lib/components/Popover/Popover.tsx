import * as RadixPopover from "@radix-ui/react-popover";
import styled from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";

const Content = styled(RadixPopover.Content)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  boxShadow: FOUNDATION_THEME.shadows.md,
  padding: 10,
}));

export const Popover = ({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <Content
        sideOffset={8}
      >
        {children}
      </Content>
    </RadixPopover.Root>
  );
};

export default Popover;
