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

const SidebarWrapper = styled(Block)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${FOUNDATION_THEME.colors.gray[25]};
`;

const SidebarContainer = styled(Block)<{ $isExpanded: boolean }>`
  max-width: ${({ $isExpanded }) => ($isExpanded ? "300px" : "0")};
  width: 100%;
  border-right: ${({ $isExpanded }) =>
    $isExpanded ? `1px solid ${FOUNDATION_THEME.colors.gray[200]}` : "none"};
  display: flex;
  will-change: transform;
  transition-duration: 150ms;
  animation: slide-in-from-left 0.3s ease-out;
`;

const TenantContainer = styled(Block)`
  width: fit-content;
  height: 100%;
  border-right: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  background-color: ${FOUNDATION_THEME.colors.gray[25]};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 10px;
`;

const TenantButton = styled.button<{ $isActive: boolean }>`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: ${FOUNDATION_THEME.border.radius[4]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: 1px solid
    ${({ $isActive }) =>
      $isActive
        ? FOUNDATION_THEME.colors.primary[500]
        : FOUNDATION_THEME.colors.gray[150]};
  transition-duration: 75ms;
`;

const PrimarySidebarContainer = styled(Block)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MerchantSwitcherContainer = styled(Block)`
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${FOUNDATION_THEME.colors.gray[25]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 8px;
`;

const DirectoryContainer = styled(Block)`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const FooterContainer = styled(Block)`
  width: 100%;
  background-color: ${FOUNDATION_THEME.colors.gray[25]};
  height: 64px;
  position: sticky;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 8px;
  border-top: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
`;

const GradientBlurContainer = styled(Block)`
  position: absolute;
  left: 0;
  top: -65px;
  right: 0;
  height: 64px;
  transform: rotate(180deg);
  pointer-events: none;
  z-index: 10;
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

const TopbarWrapper = styled(Block)`
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  background-color: ${FOUNDATION_THEME.colors.gray[0]};
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 32px;
`;

const CollapsedMerchantContainer = styled(Block)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
  flex-shrink: 0;
`;

const ContentArea = styled(Block)`
  padding: 24px;
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
      <SidebarWrapper ref={ref}>
        <SidebarContainer $isExpanded={isExpanded}>
          {isExpanded && (
            <>
              {/* TENANTS SIDE BAR _ SECONDARY SIDE BAR */}
              <TenantContainer>
                {tenants &&
                  tenants.map((tenant, index) => (
                    // TODO: Add theme config
                    <TenantButton
                      onClick={() => setActiveTenant?.(tenant.label)}
                      $isActive={activeTenant === tenant.label}
                      key={index}
                    >
                      {tenant.icon}
                    </TenantButton>
                  ))}
              </TenantContainer>

              {/* PRIMARY SIDE BAR */}
              <PrimarySidebarContainer>
                {/* MERCHANT SWITCHER  */}
                <MerchantSwitcherContainer>
                  {merchants.length > 1 ? (
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
                </MerchantSwitcherContainer>

                {/* DIRECTORY */}
                <DirectoryContainer>
                  <Directory directoryData={data} className="pb-20" />
                </DirectoryContainer>

                <SidebarFooter footer={footer} />
              </PrimarySidebarContainer>
            </>
          )}
        </SidebarContainer>

        <MainContentContainer>
          {/* TOPBAR  */}
          <TopbarWrapper>
            {isExpanded === false && (
              <CollapsedMerchantContainer>
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{ flexShrink: 0 }}
                  buttonType={ButtonType.SECONDARY}
                  subType={ButtonSubType.ICON_ONLY}
                  size={ButtonSize.SMALL}
                  leadingIcon={PanelsTopLeft}
                />
                {merchants.length > 1 ? (
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
              </CollapsedMerchantContainer>
            )}
            <Block flexGrow={1}>{topbar}</Block>
          </TopbarWrapper>

          <ContentArea>{children}</ContentArea>
        </MainContentContainer>
      </SidebarWrapper>
    );
  }
);

const SidebarFooter = ({ footer }: { footer: React.ReactNode }) => {
  return (
    <FooterContainer>
      <GradientBlurContainer aria-hidden={true}>
        <GradientBlur />
      </GradientBlurContainer>
      {footer}
    </FooterContainer>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
