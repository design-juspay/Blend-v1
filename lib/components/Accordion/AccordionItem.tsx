import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { forwardRef } from "react";
import { styled, css, CSSObject } from "styled-components";
import { AccordionItemProps, AccordionType, AccordionChevronPosition } from "./types";
import { useComponentToken } from "../../context/useComponentToken";
import { AccordionTokensType } from "./accordion.tokens";
import Block from "../Primitives/Block/Block";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";

const StyledAccordionItem = styled(RadixAccordion.Item)<{
  $accordionType: AccordionType;
  $isDisabled: boolean;
}>`
  ${(props) => {
    const tokens = useComponentToken("ACCORDION") as AccordionTokensType;
    return css`
      ${tokens.item.base} 
      ${tokens.item.variantStyling[props.$accordionType]}
      ${props.$isDisabled && props.$accordionType === AccordionType.BORDER && tokens.item.stateStyling.disabled}
    `;
  }}
`;

const StyledAccordionHeader = styled(RadixAccordion.Header)`
  display: flex;
`;

const ChevronIconStyled = styled(Block)<{
  $chevronPosition: AccordionChevronPosition;
}>`
  /* Base transition and transform-origin are applied via inline style from tokens in getChevronIcon */
  /* Rotation logic based on ancestor's data-state and own $chevronPosition prop */
  button[data-state="open"] & {
    ${(props) => props.$chevronPosition === AccordionChevronPosition.RIGHT && css`
      transform: rotate(180deg);
    `}
    ${(props) => props.$chevronPosition === AccordionChevronPosition.LEFT && css`
      transform: rotate(90deg);
    `}
  }
`;

const StyledAccordionTrigger = styled(RadixAccordion.Trigger)<{
  $accordionType: AccordionType;
  $isDisabled: boolean;
}>`
  ${(props) => {
    const tokens = useComponentToken("ACCORDION") as AccordionTokensType;
    return css`
      ${tokens.trigger.base}
      padding: ${tokens.trigger.variantStyling[props.$accordionType].padding};

      &:focus-visible {
        outline: ${tokens.trigger.focusVisible.outline};
        outline-offset: ${tokens.trigger.focusVisible.outlineOffset};
      }
      
      &:hover:not(:disabled) {
        background-color: ${tokens.trigger.variantStyling[props.$accordionType].hover?.backgroundColor};
      }
      
      &[data-state="open"] {
        ${props.$accordionType === AccordionType.BORDER && tokens.trigger.stateStyling.open}
        /* Rotation logic moved to ChevronIconStyled based on this ancestor state */
      }
      
      ${props.$isDisabled && css`
        cursor: ${tokens.trigger.stateStyling.disabled.cursor};
        ${props.$accordionType === AccordionType.BORDER && css`
          background-color: ${tokens.trigger.stateStyling.disabled.backgroundColor};
        `}
      `}
    `;
  }}
`;

const StyledAccordionContent = styled(RadixAccordion.Content)<{
  $accordionType: AccordionType;
}>`
  ${(props) => {
    const tokens = useComponentToken("ACCORDION") as AccordionTokensType;
    return css`
      ${tokens.content.base}
      padding: ${tokens.content.variantStyling[props.$accordionType].padding};
    `;
  }}
`;

const AccordionItem = forwardRef<
  HTMLDivElement,
  AccordionItemProps & { 
    accordionType?: AccordionType;
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
    const tokens = useComponentToken("ACCORDION") as AccordionTokensType;

    const getChevronIcon = () => {
      const iconStyles: CSSObject = {
        width: tokens.chevronIcon.dimension.width,
        height: tokens.chevronIcon.dimension.height,
        color: isDisabled 
          ? tokens.chevronIcon.color.disabled 
          : tokens.chevronIcon.color.default,
        transition: tokens.chevronIcon.transition,
        transformOrigin: tokens.chevronIcon.transformOrigin,
      };

      return (
        <ChevronIconStyled
          $chevronPosition={chevronPosition}
          style={iconStyles}
        >
          {chevronPosition === AccordionChevronPosition.RIGHT ? (
            <ChevronDown style={{ width: '100%', height: '100%' }} />
          ) : (
            <ChevronRight style={{ width: '100%', height: '100%' }} />
          )}
        </ChevronIconStyled>
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
      >
        <StyledAccordionHeader>
          <StyledAccordionTrigger
            $accordionType={accordionType}
            $isDisabled={isDisabled}
            disabled={isDisabled}
            data-type={accordionType}
          >
            <Block width="100%" position="relative">
              <Block style={tokens.headerRow.layout as CSSObject}>
                {chevronPosition === AccordionChevronPosition.LEFT && (
                  <Block 
                    style={tokens.chevronIcon.layout.leftPosition as CSSObject}
                    aria-hidden="true"
                  >
                    {getChevronIcon()} 
                  </Block>
                )}
                
                {leftSlot && (
                  <Block style={tokens.leftSlot.layout as CSSObject} marginRight={tokens.leftSlot.spacing.marginRight}>
                    {leftSlot}
                  </Block>
                )}
                
                <Block 
                  flexGrow={1}
                >
                  <PrimitiveText
                    fontSize={tokens.title.font.size}
                    fontWeight={tokens.title.font.weight}
                    color={isDisabled 
                      ? tokens.title.color.disabled 
                      : tokens.title.color.default
                    }
                  >
                    {title}
                  </PrimitiveText>
                </Block>
                
                {rightSlot && (
                  <Block style={tokens.rightSlot.layout as CSSObject} marginLeft={tokens.rightSlot.spacing.marginLeft}>
                    {rightSlot}
                  </Block>
                )}
                
                {chevronPosition === AccordionChevronPosition.RIGHT && (
                  <Block 
                    style={tokens.chevronIcon.layout.rightPosition as CSSObject}
                    aria-hidden="true"
                  >
                    {getChevronIcon()}
                  </Block>
                )}
              </Block>

              {(subtext || subtextSlot) && (
                <Block 
                  display="flex" 
                  alignItems="center"
                  marginTop={tokens.subtext.spacing.marginTop}
                  paddingLeft={chevronPosition === AccordionChevronPosition.LEFT ? tokens.subtext.spacing.paddingLeft : undefined}
                >
                  {subtext && (
                    <PrimitiveText
                      fontSize={tokens.subtext.font.size}
                      color={isDisabled 
                        ? tokens.subtext.color.disabled
                        : tokens.subtext.color.default
                      }
                    >
                      {subtext}
                    </PrimitiveText>
                  )}
                  {subtextSlot && (
                    <Block marginLeft="8px" flexShrink={0}> {/* This 8px could be a token */}
                      {subtextSlot}
                    </Block>
                  )}
                </Block>
              )}
            </Block>
          </StyledAccordionTrigger>
        </StyledAccordionHeader>
        
        <StyledAccordionContent $accordionType={accordionType}>
          <Block style={tokens.contentWrapper.variantStyling[accordionType] as CSSObject}>
            {children}
          </Block>
        </StyledAccordionContent>
      </StyledAccordionItem>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
