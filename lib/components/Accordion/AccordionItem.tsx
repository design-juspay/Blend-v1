import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { AccordionItemProps, AccordionType, AccordionChevronPosition } from "./types";
import accordionTokens from "./accordion.tokens";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";

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

    const itemStyles = {
      ...accordionTokens.base.item,
      ...accordionTokens.type[accordionType].item,
      ...(isDisabled && accordionType === AccordionType.BORDER && accordionTokens.states.disabled),
    };

    const triggerStyles = {
      ...accordionTokens.base.trigger,
      ...accordionTokens.type[accordionType].trigger,
      ...(isDisabled && {
        ...accordionTokens.states.disabled,
        cursor: "not-allowed",
        "&:hover": {
          backgroundColor: accordionTokens.states.disabled.backgroundColor,
        },
      }),
      ...(accordionType === AccordionType.BORDER && isOpen && {
        borderBottom: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      }),
    };

    const contentStyles = {
      ...accordionTokens.base.content,
      ...accordionTokens.type[accordionType].content,
    };

    const contentWrapperStyles = {
      ...accordionTokens.base.contentWrapper,
      ...accordionTokens.type[accordionType].contentWrapper,
    };

    const chevronIconStyle = {
      width: accordionTokens.layout.chevronIcon.default.width,
      height: accordionTokens.layout.chevronIcon.default.height,
      ...(isDisabled 
        ? accordionTokens.layout.chevronIcon.disabled 
        : accordionTokens.layout.chevronIcon.enabled),
    };

    const getChevronIcon = () => {
      if (chevronPosition === AccordionChevronPosition.RIGHT) {
        return isOpen ? <ChevronUp style={chevronIconStyle} /> : <ChevronDown style={chevronIconStyle} />;
      } else {
        return isOpen ? <ChevronDown style={chevronIconStyle} /> : <ChevronRight style={chevronIconStyle} />;
      }
    };

    return (
      <RadixAccordion.Item asChild value={value} disabled={isDisabled}>
        <Block
          ref={ref}
          className={className}
          data-disabled={isDisabled || undefined}
          style={itemStyles}
        >
          <RadixAccordion.Header style={{ display: "flex" }}>
            <RadixAccordion.Trigger asChild>
              <PrimitiveButton
                ref={triggerRef}
                disabled={isDisabled}
                data-type={accordionType}
                data-disabled={isDisabled || undefined}
                style={triggerStyles}
                cursor={isDisabled ? "not-allowed" : "pointer"}
              >
                <Block width="100%" position="relative">
                  <Block style={accordionTokens.layout.headerRow}>
                    {chevronPosition === AccordionChevronPosition.LEFT && (
                      <Block 
                        style={accordionTokens.layout.chevronLeft}
                        aria-hidden="true"
                      >
                        {getChevronIcon()}
                      </Block>
                    )}
                    
                    {leftSlot && (
                      <Block style={accordionTokens.layout.leftSlot}>
                        {leftSlot}
                      </Block>
                    )}
                    
                    <Block 
                      flexGrow={1}
                      style={{
                        ...accordionTokens.base.title,
                        ...(isDisabled ? accordionTokens.base.titleDisabled : accordionTokens.base.titleEnabled)
                      }}
                    >
                      <PrimitiveText
                        fontSize={accordionTokens.base.title.fontSize}
                        fontWeight={accordionTokens.base.title.fontWeight}
                        color={isDisabled 
                          ? accordionTokens.base.titleDisabled.color 
                          : accordionTokens.base.titleEnabled.color
                        }
                      >
                        {title}
                      </PrimitiveText>
                    </Block>
                    
                    {rightSlot && (
                      <Block style={accordionTokens.layout.rightSlot}>
                        {rightSlot}
                      </Block>
                    )}
                    
                    {chevronPosition === AccordionChevronPosition.RIGHT && (
                      <Block 
                        style={accordionTokens.layout.chevronRight}
                        aria-hidden="true"
                      >
                        {getChevronIcon()}
                      </Block>
                    )}
                  </Block>

                  {(subtext || subtextSlot) && (
                    <Block display="flex" alignItems="center" style={accordionTokens.base.subtext}>
                      {subtext && (
                        <PrimitiveText
                          fontSize={accordionTokens.base.subtext.fontSize}
                          color={isDisabled 
                            ? accordionTokens.base.subtextDisabled.color 
                            : accordionTokens.base.subtextEnabled.color
                          }
                        >
                          {subtext}
                        </PrimitiveText>
                      )}
                      {subtextSlot && (
                        <Block marginLeft="8px" flexShrink={0}>
                          {subtextSlot}
                        </Block>
                      )}
                    </Block>
                  )}
                </Block>
              </PrimitiveButton>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          
          <RadixAccordion.Content asChild>
            <Block style={contentStyles}>
              <Block style={contentWrapperStyles}>
                {children}
              </Block>
            </Block>
          </RadixAccordion.Content>
        </Block>
      </RadixAccordion.Item>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem; 