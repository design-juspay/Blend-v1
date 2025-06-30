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
  border: props.$accordionToken.itemBorder[props.$accordionType],
  borderBottom: props.$accordionToken.itemBorderBottomState[props.$accordionType].closed,
  borderRadius: props.$accordionToken.itemBorderRadius[props.$accordionType],
  overflow: props.$accordionToken.itemOverflow[props.$accordionType],
  ...(props.$isDisabled && props.$accordionType === AccordionType.BORDER && {
    backgroundColor: props.$accordionToken.triggerBackgroundColor[props.$accordionType].disabled,
  }),
  '&[data-state="open"]': {
    borderBottom: props.$accordionToken.itemBorderBottomState[props.$accordionType].open,
  },
}));

const StyledAccordionHeader = styled(RadixAccordion.Header)({
  display: "flex",
});

const StyledAccordionTrigger = styled(RadixAccordion.Trigger)<{
  $accordionType: AccordionType;
  $isDisabled: boolean;
  $accordionToken: AccordionTokenType;
}>((props) => ({
  display: props.$accordionToken.triggerDisplay,
  width: props.$accordionToken.triggerWidth,
  textAlign: props.$accordionToken.triggerTextAlign,
  transition: props.$accordionToken.triggerTransition,
  cursor: props.$accordionToken.triggerCursor,
  border: props.$accordionToken.triggerBorder,
  outline: props.$accordionToken.triggerOutline,
  padding: props.$accordionToken.triggerPadding[props.$accordionType],
  backgroundColor: props.$accordionToken.triggerBackgroundColor[props.$accordionType].default,
  borderBottom: props.$accordionToken.triggerBorderBottomState[props.$accordionType].closed,
  ...(props.$isDisabled && {
    backgroundColor: props.$accordionToken.triggerBackgroundColor[props.$accordionType].disabled,
    cursor: "not-allowed",
  }),
  '&[data-state="open"]': {
    backgroundColor: props.$accordionToken.triggerBackgroundColor[props.$accordionType].open,
    borderBottom: props.$accordionToken.triggerBorderBottomState[props.$accordionType].open,
  },
  '&:hover:not(:disabled)': {
    backgroundColor: props.$accordionToken.triggerBackgroundColor[props.$accordionType].hover,
  },
  '&:focus-visible': {
    outline: props.$accordionToken.triggerFocusOutline,
    outlineOffset: props.$accordionToken.triggerFocusOutlineOffset,
  },
}));

const StyledAccordionContent = styled(RadixAccordion.Content)<{
  $accordionType: AccordionType;
  $accordionToken: AccordionTokenType;
}>((props) => ({
  overflow: props.$accordionToken.contentOverflow,
  transition: props.$accordionToken.contentTransition,
  padding: props.$accordionToken.contentPadding[props.$accordionType],
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
          ? accordionToken.chevronIconColor.disabled 
          : accordionToken.chevronIconColor.enabled,
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
                display={accordionToken.headerRowDisplay}
                alignItems={accordionToken.headerRowAlignItems}
                width={accordionToken.headerRowWidth}
                position={accordionToken.headerRowPosition}
                gap={accordionToken.headerSlotGap}
              >
                {chevronPosition === AccordionChevronPosition.LEFT && (
                  <Block 
                    display={accordionToken.chevronLeftDisplay}
                    alignItems={accordionToken.chevronLeftAlignItems}
                    justifyContent={accordionToken.chevronLeftJustifyContent}
                    flexShrink={accordionToken.chevronLeftFlexShrink}
                    aria-hidden="true"
                  >
                    {getChevronIcon()}
                  </Block>
                )}
                
                {leftSlot && chevronPosition !== AccordionChevronPosition.LEFT && (
                  <Block 
                    flexShrink={accordionToken.leftSlotFlexShrink}
                    display={accordionToken.leftSlotDisplay}
                    alignItems={accordionToken.leftSlotAlignItems}
                    justifyContent={accordionToken.leftSlotJustifyContent}
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
                    gap={accordionToken.headerSlotGap}
                  >
                    <PrimitiveText
                      fontSize={accordionToken.titleFontSize}
                      fontWeight={accordionToken.titleFontWeight}
                      color={isDisabled 
                        ? accordionToken.titleColor.disabled 
                        : accordionToken.titleColor.enabled
                      }
                    >
                      {title}
                    </PrimitiveText>
                    
                    {rightSlot && (
                      <Block 
                        flexShrink={accordionToken.rightSlotFlexShrink}
                        display={accordionToken.rightSlotDisplay}
                        alignItems={accordionToken.rightSlotAlignItems}
                        justifyContent={accordionToken.rightSlotJustifyContent}
                      >
                        {rightSlot}
                      </Block>
                    )}
                  </Block>
                  
                  {(subtext || subtextSlot) && (
                    <Block 
                      display="flex" 
                      alignItems="center"
                      marginTop={accordionToken.subtextMarginTop}
                    >
                      {subtext && (
                        <PrimitiveText
                          fontSize={accordionToken.subtextFontSize}
                          color={isDisabled 
                            ? accordionToken.subtextColor.disabled 
                            : accordionToken.subtextColor.enabled
                          }
                        >
                          {subtext}
                        </PrimitiveText>
                      )}
                      {subtextSlot && (
                        <Block marginLeft={foundationToken.spacing[6]} flexShrink={0}>
                          {subtextSlot}
                        </Block>
                      )}
                    </Block>
                  )}
                </Block>
                
                {chevronPosition === AccordionChevronPosition.RIGHT && (
                  <Block 
                    position={accordionToken.chevronRightPosition}
                    right={accordionToken.chevronRightRight}
                    top={accordionToken.chevronRightTop}
                    display={accordionToken.chevronRightDisplay}
                    alignItems={accordionToken.chevronRightAlignItems}
                    justifyContent={accordionToken.chevronRightJustifyContent}
                    height={accordionToken.chevronRightHeight}
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
          <Block 
            padding={accordionToken.contentWrapperPadding[accordionType]}
            borderTop={accordionToken.contentWrapperBorderTop[accordionType]}
          >
            {children}
          </Block>
        </StyledAccordionContent>
      </StyledAccordionItem>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem; 