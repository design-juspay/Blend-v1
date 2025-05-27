import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { styled } from "styled-components";
import { AccordionProps, AccordionType } from "./types";
import accordionTokens from "./accordion.tokens";

const AccordionRoot = styled(RadixAccordion.Root)<{ accordionType: AccordionType }>((props) => ({
  ...accordionTokens.base.container,
  ...accordionTokens.type[props.accordionType].container,
}));

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children,
      accordionType = AccordionType.NO_BORDER,
      defaultValue,
      value,
      isCollapsible = true,
      isMultiple = false,
      onValueChange,
    },
    ref
  ) => {
    const baseProps = {
      collapsible: isCollapsible,
      ref: ref,
      accordionType: accordionType,
    };

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

    return isMultiple ? (
      <AccordionRoot
        type="multiple"
        value={value as string[]}
        defaultValue={defaultValue as string[]}
        onValueChange={onValueChange as ((value: string[]) => void)}
        {...baseProps}
      >
        {renderChildren()}
      </AccordionRoot>
    ) : (
      <AccordionRoot
        type="single"
        value={value as string }
        defaultValue={defaultValue as string }
        onValueChange={onValueChange as ((value: string) => void)}
        {...baseProps}
      >
        {renderChildren()}
      </AccordionRoot>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
