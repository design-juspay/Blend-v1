import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { styled, css } from "styled-components";
import { AccordionProps, AccordionType } from "./types";
import { useComponentToken } from "../../context/useComponentToken";
import { AccordionTokensType } from "./accordion.tokens";

const StyledAccordionRoot = styled(RadixAccordion.Root)<{ 
  $accordionType: AccordionType 
}>`
  ${(props) => {
    const tokens = useComponentToken("ACCORDION") as AccordionTokensType;
    return css`
      width: ${tokens.root.layout.width};
      /* Applying object styles directly within css template literal */
      ${tokens.root.containerStyling[props.$accordionType]}
    `;
  }}
`;

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children,
      accordionType = AccordionType.NO_BORDER,
      defaultValue,
      value,
      isMultiple = false,
      onValueChange,
      className,
    },
    ref
  ) => {
    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const childProps = {
          ...(child.props as object),
          accordionType: accordionType,
        };

        return React.cloneElement(child, childProps);
      });
    };

    const commonProps = {
      ref: ref,
      $accordionType: accordionType,
      className,
    };

    return isMultiple ? (
      <StyledAccordionRoot
        type="multiple"
        value={value as string[] | undefined}
        defaultValue={defaultValue as string[] | undefined}
        onValueChange={onValueChange as ((value: string[]) => void) | undefined}
        {...commonProps}
      >
        {renderChildren()}
      </StyledAccordionRoot>
    ) : (
      <StyledAccordionRoot
        type="single"
        collapsible={true}
        value={value as string | undefined}
        defaultValue={defaultValue as string | undefined}
        onValueChange={onValueChange as ((value: string) => void) | undefined}
        {...commonProps}
      >
        {renderChildren()}
      </StyledAccordionRoot>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
