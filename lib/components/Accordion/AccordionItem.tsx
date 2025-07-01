import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { forwardRef } from "react";
import { styled } from "styled-components";
import { AccordionItemProps, AccordionType, AccordionChevronPosition } from "./types";
import { AccordionTokenType } from "./accordion.tokens";
import { useComponentToken } from "../../context/useComponentToken";
import Block from "../Primitives/Block/Block";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";
import { foundationToken } from "../../foundationToken";

const StyledAccordionItem = styled(RadixAccordion.Item)<{
  $accordionType: AccordionType;
  $isDisabled: boolean;
  $accordionToken: AccordionTokenType;
}>((props) => ({
  border: props.$accordionToken.border[props.$accordionType].default.default,
  borderRadius: props.$accordionToken.borderRadius[props.$accordionType],
  overflow: props.$accordionType === AccordionType.BORDER ? "hidden" : "visible",
  ...(props.$isDisabled && props.$accordionType === AccordionType.BORDER && {
    backgroundColor: props.$accordionToken.backgroundColor[props.$accordionType].default.disabled,
  }),
}));

const StyledAccordionHeader = styled(RadixAccordion.Header)({
  display: "flex",
});

const StyledAccordionTrigger = styled(RadixAccordion.Trigger)<{
  $accordionType: AccordionType;
  $isDisabled: boolean;
  $accordionToken: AccordionTokenType;
}>((props) => ({
  display: "flex",
  width: "100%",
  textAlign: "left",
  transition: "all 0.2s ease",
  cursor: "pointer",
  border: "none",
  outline: "none",
  padding: props.$accordionToken.padding[props.$accordionType],
  borderRadius: props.$accordionToken.borderRadius[props.$accordionType],
  backgroundColor: props.$accordionToken.backgroundColor[props.$accordionType].default.default,
  ...(props.$isDisabled && {
    backgroundColor: props.$accordionToken.backgroundColor[props.$accordionType].default.disabled,
    cursor: "not-allowed",
  }),
  '&[data-state="open"]': {
    backgroundColor: props.$accordionToken.backgroundColor[props.$accordionType].default.open,
  },
  '&:hover:not(:disabled)': {
    backgroundColor: props.$accordionToken.backgroundColor[props.$accordionType].default.hover,
  },
  '&:focus-visible': {
    outline: props.$accordionToken.focusOutline,
    outlineOffset: props.$accordionToken.focusOutlineOffset,
  },
}));

const StyledAccordionContent = styled(RadixAccordion.Content)<{
  $accordionType: AccordionType;
  $accordionToken: AccordionTokenType;
}>(() => ({
  overflow: "hidden",
  transition: "all 0.2s ease",
}));

const StyledSeparator = styled.hr<{
  $accordionType: AccordionType;
  $accordionToken: AccordionTokenType;
}>((props) => ({
  margin: 0,
  border: "none",
  height: props.$accordionToken.separatorHeight,
  backgroundColor: props.$accordionToken.separatorColor[props.$accordionType],
}));

const ChevronIcon = styled(Block)<{
  $chevronPosition: AccordionChevronPosition;
}>((props) => ({
  transition: 'transform 200ms ease',
  transformOrigin: 'center',
  
  ...(props.$chevronPosition === AccordionChevronPosition.RIGHT && {
    '[data-state="open"] &': {
      transform: 'rotate(180deg)',
    },
  }),
  
  ...(props.$chevronPosition === AccordionChevronPosition.LEFT && {
    '[data-state="open"] &': {
      transform: 'rotate(90deg)',
    },
  }),
}));

const AccordionItem = forwardRef<
  HTMLDivElement,
  AccordionItemProps & {
    accordionType?: AccordionType;
    chevronPosition?: AccordionChevronPosition;
  }
>(
  (
    {
      value,
      title,
      children,
      subtext,
      leftSlot,
      rightSlot,
      subtextSlot,
      isDisabled = false,
      chevronPosition = AccordionChevronPosition.RIGHT,
      className,
      accordionType = AccordionType.NO_BORDER,
    },
    ref
  ) => {
    const accordionToken = useComponentToken("ACCORDION") as AccordionTokenType;
    
    const getChevronIcon = () => {
      const iconStyles = {
        width: accordionToken.chevronIconWidth,
        height: accordionToken.chevronIconHeight,
        color: isDisabled 
          ? accordionToken.chevronIconColor.default.disabled 
          : accordionToken.chevronIconColor.default.enabled,
      };

      return (
        <ChevronIcon 
          $chevronPosition={chevronPosition}
          style={iconStyles}
        >
          {chevronPosition === AccordionChevronPosition.RIGHT ? (
            <ChevronDown style={{ width: '100%', height: '100%' }} />
          ) : (
            <ChevronRight style={{ width: '100%', height: '100%' }} />
          )}
        </ChevronIcon>
      );
    };

    return (
      <StyledAccordionItem
        value={value}
        disabled={isDisabled}
        className={className}
        ref={ref}
        data-disabled={isDisabled || undefined}
        $accordionType={accordionType}
        $isDisabled={isDisabled}
        $accordionToken={accordionToken}
      >
        <StyledAccordionHeader>
          <StyledAccordionTrigger
            $accordionType={accordionType}
            $isDisabled={isDisabled}
            $accordionToken={accordionToken}
            disabled={isDisabled}
            data-type={accordionType}
            data-disabled={isDisabled || undefined}
          >
            <Block width="100%" position="relative">
              <Block 
                display="flex"
                alignItems="flex-start"
                width="100%"
                position="relative"
                gap={foundationToken.spacing[8]}
              >
                {chevronPosition === AccordionChevronPosition.LEFT && (
                  <Block 
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    aria-hidden="true"
                  >
                    {getChevronIcon()}
                  </Block>
                )}
                
                {leftSlot && chevronPosition !== AccordionChevronPosition.LEFT && (
                  <Block 
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {leftSlot}
                  </Block>
                )}
                
                <Block 
                  flexGrow={chevronPosition === AccordionChevronPosition.LEFT ? 1 : 0}
                  display="flex"
                  flexDirection="column"

                >
                  <Block 
                    display="flex"
                    alignItems="center"
                    gap={foundationToken.spacing[8]}
                  >
                    <PrimitiveText
                      fontSize={accordionToken.fontSize}
                      fontWeight={accordionToken.fontWeight}
                      color={isDisabled 
                        ? accordionToken.color.default.disabled 
                        : accordionToken.color.default.enabled
                      }
                    >
                      {title}
                    </PrimitiveText>
                    
                    {rightSlot && (
                      <Block 
                        flexShrink={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {rightSlot}
                      </Block>
                    )}
                  </Block>
                  
                  {(subtext || subtextSlot) && (
                    <Block 
                      display="flex" 
                      alignItems="center"
                      gap={accordionToken.subtextGap}
                    >
                      {subtext && (
                        <PrimitiveText
                          fontSize={accordionToken.subtextFontSize}
                          color={isDisabled 
                            ? accordionToken.subtextColor.default.disabled 
                            : accordionToken.subtextColor.default.enabled
                          }
                        >
                          {subtext}
                        </PrimitiveText>
                      )}
                      {subtextSlot && (
                        <Block flexShrink={0}>
                          {subtextSlot}
                        </Block>
                      )}
                    </Block>
                  )}
                </Block>
                
                {chevronPosition === AccordionChevronPosition.RIGHT && (
                  <Block 
                    position="absolute"
                    right={0}
                    top={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    aria-hidden="true"
                  >
                    {getChevronIcon()}
                  </Block>
                )}
              </Block>
            </Block>
          </StyledAccordionTrigger>
        </StyledAccordionHeader>
        
        <StyledAccordionContent $accordionType={accordionType} $accordionToken={accordionToken}>
          {accordionType === AccordionType.BORDER && (
            <StyledSeparator $accordionType={accordionType} $accordionToken={accordionToken} />
          )}
          <Block padding={accordionToken.contentPadding[accordionType]}>
            {children}
          </Block>
        </StyledAccordionContent>
      </StyledAccordionItem>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem; 