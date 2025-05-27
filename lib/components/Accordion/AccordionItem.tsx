import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { AccordionItemProps, AccordionType, AccordionChevronPosition } from "./types";
import accordionTokens from "./accordion.tokens";

const StyledAccordionItem = styled(RadixAccordion.Item)<{
  accordionType: AccordionType;
  isDisabled: boolean;
}>((props) => ({
  ...accordionTokens.base.item,
  ...accordionTokens.type[props.accordionType].item,
  ...(props.isDisabled && props.accordionType === AccordionType.BORDER && accordionTokens.states.disabled),
}));

const StyledAccordionTrigger = styled(RadixAccordion.Trigger)<{
  accordionType: AccordionType;
  isDisabled: boolean;
}>((props) => ({
  ...accordionTokens.base.trigger,
  ...accordionTokens.type[props.accordionType].trigger,
  ...(props.isDisabled && {
    ...accordionTokens.states.disabled,
    "&:hover": {
      backgroundColor: accordionTokens.states.disabled.backgroundColor,
    },
  }),
}));

const StyledAccordionContent = styled(RadixAccordion.Content)<{
  accordionType: AccordionType;
}>((props) => ({
  ...accordionTokens.base.content,
  ...accordionTokens.type[props.accordionType].content,
}));

const ContentWrapper = styled.div<{ accordionType: AccordionType }>((props) => ({
  ...accordionTokens.base.contentWrapper,
  ...accordionTokens.type[props.accordionType].contentWrapper,
}));

const HeaderRow = styled.div(() => accordionTokens.layout.headerRow);

const ChevronContainer = styled.div<{ position: AccordionChevronPosition }>((props) => 
  props.position === AccordionChevronPosition.RIGHT 
    ? accordionTokens.layout.chevronRight 
    : accordionTokens.layout.chevronLeft
);

const SlotContainer = styled.div<{ isLeft: boolean }>((props) => 
  props.isLeft ? accordionTokens.layout.leftSlot : accordionTokens.layout.rightSlot
);

const TitleContainer = styled.div<{ isDisabled: boolean }>((props) => ({
  ...accordionTokens.base.title,
  ...(props.isDisabled ? accordionTokens.base.titleDisabled : accordionTokens.base.titleEnabled),
  flex: 1,
}));

const SubtextRow = styled.div<{ chevronPosition: AccordionChevronPosition }>(() => ({
  display: "flex",
  alignItems: "center",
  ...accordionTokens.base.subtext,
}));

const SubtextContainer = styled.div<{ isDisabled: boolean }>((props) => 
  props.isDisabled ? accordionTokens.base.subtextDisabled : accordionTokens.base.subtextEnabled
);

const SubtextSlotContainer = styled.div(() => ({
  marginLeft: "8px",
  flexShrink: 0,
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
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "data-state") {
            const state = triggerRef.current?.getAttribute("data-state");
            setIsOpen(state === "open");
          }
        });
      });

      if (triggerRef.current) {
        const state = triggerRef.current.getAttribute("data-state");
        setIsOpen(state === "open");

        observer.observe(triggerRef.current, { attributes: true });
      }

      return () => observer.disconnect();
    }, []);

    const chevronIconStyle = {
      ...accordionTokens.layout.chevronIcon.default,
      ...(isDisabled 
        ? accordionTokens.layout.chevronIcon.disabled 
        : accordionTokens.layout.chevronIcon.enabled),
    };

    return (
      <StyledAccordionItem
        value={value}
        disabled={isDisabled}
        accordionType={accordionType}
        isDisabled={isDisabled}
        className={className}
        ref={ref}
        data-disabled={isDisabled || undefined}
      >
        <RadixAccordion.Header style={{ display: "flex" }}>
          <StyledAccordionTrigger
            ref={triggerRef}
            accordionType={accordionType}
            isDisabled={isDisabled}
            disabled={isDisabled}
            data-type={accordionType}
            data-disabled={isDisabled || undefined}
            style={{
              ...(accordionType === AccordionType.BORDER && isOpen && {
                borderBottom: `1px solid ${accordionTokens.base.item.borderBottom}`,
              }),
            }}
          >
            <div style={{ width: "100%", position: "relative" }}>
              <HeaderRow>
                {chevronPosition === AccordionChevronPosition.LEFT && (
                  <ChevronContainer position={chevronPosition} aria-hidden="true">
                    {isOpen ? (
                      <ChevronDown style={chevronIconStyle} />
                    ) : (
                      <ChevronRight style={chevronIconStyle} />
                    )}
                  </ChevronContainer>
                )}
                
                {leftSlot && (
                  <SlotContainer isLeft={true}>{leftSlot}</SlotContainer>
                )}
                
                <TitleContainer isDisabled={isDisabled}>
                  {title}
                </TitleContainer>
                
                {rightSlot && (
                  <SlotContainer isLeft={false}>{rightSlot}</SlotContainer>
                )}
                
                {chevronPosition === AccordionChevronPosition.RIGHT && (
                  <ChevronContainer position={chevronPosition} aria-hidden="true">
                    {isOpen ? (
                      <ChevronUp style={chevronIconStyle} />
                    ) : (
                      <ChevronDown style={chevronIconStyle} />
                    )}
                  </ChevronContainer>
                )}
              </HeaderRow>

              {(subtext || subtextSlot) && (
                <SubtextRow chevronPosition={chevronPosition}>
                  {subtext && (
                    <SubtextContainer isDisabled={isDisabled}>
                      {subtext}
                    </SubtextContainer>
                  )}
                  {subtextSlot && (
                    <SubtextSlotContainer>
                      {subtextSlot}
                    </SubtextSlotContainer>
                  )}
                </SubtextRow>
              )}
            </div>
          </StyledAccordionTrigger>
        </RadixAccordion.Header>
        <StyledAccordionContent accordionType={accordionType}>
          <ContentWrapper accordionType={accordionType}>
            {children}
          </ContentWrapper>
        </StyledAccordionContent>
      </StyledAccordionItem>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem; 