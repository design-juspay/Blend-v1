import { forwardRef, useState } from "react";
import { SidebarProps } from "./types";
import Directory from "../Directory/Directory";
import { Button, ButtonSize, ButtonSubType, ButtonType } from "../Button";
import { PanelsTopLeft, ChevronDown } from "lucide-react";
import GradientBlur from "../GradientBlur/GradientBlur";
import styled from "styled-components";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { FOUNDATION_THEME } from "../../tokens";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const DirectoryContainer = styled(Block)`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const MainContentContainer = styled(Block)`
  width: 100%;
  height: 100%;
  background-color: ${FOUNDATION_THEME.colors.gray[0]};
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SimpleDropdown = ({
  placeholder,
  selectedOption,
  items,
  onSelect,
  width = "100%",
}: {
  placeholder: string;
  selectedOption?: string;
  items: Array<{ label: string; icon?: React.ReactNode }>;
  onSelect: (value: string) => void;
  width?: string;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Block
          as="span"
          width={width}
          backgroundColor={FOUNDATION_THEME.colors.gray[50]}
          padding="8px 12px"
          borderRadius={FOUNDATION_THEME.border.radius[4]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
        >
          <Text
            variant="body.sm"
            fontWeight={400}
            color={FOUNDATION_THEME.colors.gray[600]}
          >
            {selectedOption || placeholder}
          </Text>
          <ChevronDown size={16} />
        </Block>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            minWidth: "150px",
          }}
        >
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              onClick={() => onSelect(item.label)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                outline: "none",
              }}
              onSelect={(e) => {
                e.preventDefault();
                onSelect(item.label);
              }}
            >
              {item.icon}
              <Text variant="body.sm" color={FOUNDATION_THEME.colors.gray[600]}>
                {item.label}
              </Text>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      children,
      data,
      topbar,
      activeTenant,
      setActiveTenant,
      activeMerchant,
      setActiveMerchant,
      tenants,
      merchants,
      footer,
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return (
      <Block
        ref={ref}
        width="100%"
        height="100%"
        display="flex"
        backgroundColor={FOUNDATION_THEME.colors.gray[25]}
      >
        <Block
          maxWidth={isExpanded ? "300px" : "0"}
          width="100%"
          borderRight={
            isExpanded
              ? `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
              : "none"
          }
          display="flex"
          style={{
            willChange: "transform",
            transitionDuration: "150ms",
            animation: "slide-in-from-left 0.3s ease-out",
          }}
        >
          {isExpanded && (
            <>
              {/* TENANTS SIDE BAR _ SECONDARY SIDE BAR */}
              <Block
                width="fit-content"
                height="100%"
                borderRight={`1px solid ${FOUNDATION_THEME.colors.gray[200]}`}
                backgroundColor={FOUNDATION_THEME.colors.gray[25]}
                display="flex"
                flexDirection="column"
                gap="16px"
                alignItems="center"
                padding="10px"
              >
                {tenants &&
                  tenants.map((tenant, index) => (
                    // TODO: Add theme config
                    <Block
                      border="none"
                      backgroundColor="transparent"
                      width="32px"
                      height="32px"
                      borderRadius={FOUNDATION_THEME.border.radius[4]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      style={{
                        outline: `1px solid ${
                          activeTenant === tenant.label
                            ? FOUNDATION_THEME.colors.primary[500]
                            : FOUNDATION_THEME.colors.gray[150]
                        }`,
                        transitionDuration: "75ms",
                      }}
                      onClick={() => setActiveTenant?.(tenant.label)}
                      key={index}
                    >
                      {tenant.icon}
                    </Block>
                  ))}
              </Block>

              {/* PRIMARY SIDE BAR */}
              <Block
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                position="relative"
              >
                {/* MERCHANT SWITCHER  */}
                <Block
                  width="100%"
                  height="64px"
                  position="sticky"
                  top="0"
                  zIndex="10"
                  backgroundColor={FOUNDATION_THEME.colors.gray[25]}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  gap="12px"
                  padding="0 8px"
                >
                  {merchants.length > 1 ? (
                    // TODO: Change this with our own component
                    <SimpleDropdown
                      placeholder="Select Merchant"
                      selectedOption={activeMerchant}
                      items={merchants.map((merchant) => ({
                        label: merchant.label,
                        icon: merchant.icon,
                      }))}
                      onSelect={(value) => {
                        if (setActiveMerchant) {
                          setActiveMerchant(value);
                        }
                      }}
                      width="100%"
                    />
                  ) : (
                    <Text
                      variant="body.sm"
                      fontWeight={400}
                      color={FOUNDATION_THEME.colors.gray[600]}
                    >
                      {activeMerchant}
                    </Text>
                  )}
                  <Button
                    style={{ flexShrink: 0 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    buttonType={ButtonType.SECONDARY}
                    subType={ButtonSubType.ICON_ONLY}
                    size={ButtonSize.SMALL}
                    leadingIcon={PanelsTopLeft}
                  />
                </Block>

                {/* DIRECTORY */}
                <DirectoryContainer>
                  <Directory directoryData={data} className="pb-20" />
                </DirectoryContainer>

                <SidebarFooter footer={footer} />
              </Block>
            </>
          )}
        </Block>

        <MainContentContainer>
          {/* TOPBAR  */}
          <Block
            width="100%"
            height="64px"
            position="sticky"
            top="0"
            zIndex="10"
            borderBottom={`1px solid ${FOUNDATION_THEME.colors.gray[200]}`}
            backgroundColor={FOUNDATION_THEME.colors.gray[0]}
            display="flex"
            alignItems="center"
            gap="16px"
            padding="0 32px"
          >
            {isExpanded === false && (
              <Block
                display="flex"
                alignItems="center"
                gap="16px"
                width="fit-content"
                flexShrink={0}
              >
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{ flexShrink: 0 }}
                  buttonType={ButtonType.SECONDARY}
                  subType={ButtonSubType.ICON_ONLY}
                  size={ButtonSize.SMALL}
                  leadingIcon={PanelsTopLeft}
                />
                {merchants.length > 1 ? (
                  // TODO: Change this with our own component
                  <SimpleDropdown
                    placeholder="Select Merchant"
                    selectedOption={activeMerchant}
                    items={merchants.map((merchant) => ({
                      label: merchant.label,
                      icon: merchant.icon,
                    }))}
                    onSelect={(value) => {
                      if (setActiveMerchant) {
                        setActiveMerchant(value);
                      }
                    }}
                    width="100%"
                  />
                ) : (
                  <Text
                    variant="body.sm"
                    fontWeight={400}
                    color={FOUNDATION_THEME.colors.gray[600]}
                  >
                    {activeMerchant}
                  </Text>
                )}
              </Block>
            )}
            <Block flexGrow={1}>{topbar}</Block>
          </Block>

          <Block padding="24px">{children}</Block>
        </MainContentContainer>
      </Block>
    );
  }
);

const SidebarFooter = ({ footer }: { footer: React.ReactNode }) => {
  return (
    <Block
      width="100%"
      backgroundColor={FOUNDATION_THEME.colors.gray[25]}
      height="64px"
      position="sticky"
      bottom="0"
      zIndex="10"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="12px"
      padding="0 8px"
      borderTop={`1px solid ${FOUNDATION_THEME.colors.gray[200]}`}
    >
      <Block
        aria-hidden={true}
        position="absolute"
        left="0"
        top="-65px"
        right="0"
        height="64px"
        style={{ transform: "rotate(180deg)" }}
        pointerEvents="none"
        zIndex="10"
      >
        <GradientBlur />
      </Block>
      {footer}
    </Block>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
