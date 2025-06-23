import { ChevronDownIcon } from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";
import Text from "../Text/Text";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { Menu, MenuAlignment, MenuV2GroupType } from "../Menu";

/**
 * @description A component that combines a label, an optional label, a hint text, and a trigger (styled button)
 * which opens a Menu component to display a list of selectable items.
 * It is essentially a styled wrapper around the Menu component to provide a common Dropdown UI pattern.
 * @feature Displays a trigger element that opens a menu of items.
 * @feature Includes optional main label, secondary "optional" label, and hint text.
 * @feature Allows for a custom slot (e.g., an icon) within the trigger.
 * @feature Utilizes the `Menu` component for displaying items.
 * @example Basic Usage
 * ```tsx
 * import { Dropdown, MenuV2GroupType } from "blend-v1";
 *
 * const menuItems: MenuV2GroupType[] = [
 *   {
 *     items: [
 *       { label: "Profile", onClick: () => console.log("Profile selected") },
 *       { label: "Settings", onClick: () => console.log("Settings selected") },
 *     ]
 *   }
 * ];
 *
 * <Dropdown
 *   label="User Options"
 *   items={menuItems}
 * />
 * ```
 * @example Intermediate Usage with Custom Labels and Icon
 * ```tsx
 * import { Dropdown, MenuV2GroupType } from "blend-v1";
 * import { User, Settings, HelpCircle } from "lucide-react";
 *
 * const menuItems: MenuV2GroupType[] = [
 *   {
 *     items: [
 *       { 
 *         label: "My Profile", 
 *         onClick: () => console.log("Profile selected"),
 *         slot1: <User size={16} />
 *       },
 *       { 
 *         label: "Account Settings", 
 *         onClick: () => console.log("Settings selected"),
 *         slot1: <Settings size={16} />
 *       },
 *       { 
 *         label: "Help & Support", 
 *         onClick: () => console.log("Help selected"),
 *         slot1: <HelpCircle size={16} />
 *       },
 *     ]
 *   }
 * ];
 *
 * <Dropdown
 *   label="Account Actions"
 *   optionalLabel="(choose an option)"
 *   hintText="Select an action to perform on your account"
 *   slot={<User size={16} />}
 *   items={menuItems}
 * />
 * ```
 * @example Advanced Usage with Multiple Groups and Actions
 * ```tsx
 * import { 
 *   Dropdown, 
 *   MenuV2GroupType, 
 *   MenuItemV2Variant, 
 *   MenuItemV2ActionType 
 * } from "blend-v1";
 * import { User, Settings, LogOut, Shield, CreditCard } from "lucide-react";
 *
 * const menuItems: MenuV2GroupType[] = [
 *   {
 *     label: "Account",
 *     items: [
 *       { 
 *         label: "View Profile", 
 *         onClick: () => console.log("Profile selected"),
 *         slot1: <User size={16} />,
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *       { 
 *         label: "Account Settings", 
 *         onClick: () => console.log("Settings selected"),
 *         slot1: <Settings size={16} />,
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *       { 
 *         label: "Billing & Plans", 
 *         onClick: () => console.log("Billing selected"),
 *         slot1: <CreditCard size={16} />,
 *         subLabel: "Manage payments",
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *     ],
 *     showSeparator: true
 *   },
 *   {
 *     label: "Security",
 *     items: [
 *       { 
 *         label: "Privacy Settings", 
 *         onClick: () => console.log("Privacy selected"),
 *         slot1: <Shield size={16} />,
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *     ],
 *     showSeparator: true
 *   },
 *   {
 *     label: "Actions",
 *     items: [
 *       { 
 *         label: "Sign Out", 
 *         onClick: () => console.log("Logout selected"), 
 *         variant: MenuItemV2Variant.ACTION,
 *         actionType: MenuItemV2ActionType.DANGER,
 *         slot1: <LogOut size={16} />
 *       },
 *     ]
 *   }
 * ];
 *
 * <Dropdown
 *   label="User Account"
 *   optionalLabel="(required action)"
 *   hintText="Choose an action to manage your account and settings"
 *   slot={<User size={18} />}
 *   items={menuItems}
 * />
 * ```
 */
const Dropdown = ({
  /**
   * @propCategory Content
   * @description The main label displayed above the dropdown trigger.
   * @default "Your Label"
   */
  label = "Your Label",
  /**
   * @propCategory Content
   * @description An optional secondary label displayed next to the main label, often indicating optionality.
   * @default "(optional)"
   */
  optionalLabel = "(optional)",
  /**
   * @propCategory Content
   * @description A hint text displayed below the dropdown trigger.
   * @default "This is a hint text"
   */
  hintText = "This is a hint text",
  /**
   * @propCategory Content
   * @description An optional ReactNode (e.g., an icon) to be displayed inside the dropdown trigger, before the "Select an option" text.
   */
  slot,
  /**
   * @propCategory Required
   * @description An array of `MenuV2GroupType` objects defining the groups and items to be displayed in the dropdown menu.
   * This is passed directly to the underlying `Menu` component.
   */
  items,
}: {
  label?: string;
  optionalLabel?: string;
  hintText?: string;
  slot?: React.ReactNode;
  items: MenuV2GroupType[];
}) => {
  return (
    <Block display="flex" flexDirection="column" gap={10}>
      <Block display="flex" gap={8}>
        <Text as="label" variant="body.md" fontWeight={500} color={"black"}>
          {label}
        </Text>
        {optionalLabel && (
          <Text
            as="span"
            variant="body.md"
            color={FOUNDATION_THEME.colors.gray[400]}
          >
            {optionalLabel}
          </Text>
        )}
      </Block>
      <Menu
        items={items}
        alignment={MenuAlignment.START}
        trigger={
          <PrimitiveButton
            backgroundColor={FOUNDATION_THEME.colors.gray[0]}
            _hover={{
              border: `1.5px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
            }}
            _focus={{
              border: `1.5px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
            }}
            _active={{
              border: `1.5px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
            }}
            style={{
              cursor: "pointer",
              border: `1.5px solid ${FOUNDATION_THEME.colors.gray[200]}`,
              borderRadius: 8,
            }}
          >
            <Block
              display="flex"
              alignItems="center"
              paddingX={14}
              paddingY={10}
              borderRadius={8}
              gap={8}
            >
              {slot && (
                <Block size={20} contentCentered>
                  {slot}
                </Block>
              )}
              <PrimitiveText
                style={{
                  cursor: "pointer",
                  flexGrow: 1,
                  userSelect: "none",
                  touchAction: "none",
                }}
                as="label"
                color={"black"}
                truncate
              >
                Select an option
              </PrimitiveText>

              <Block size={20} contentCentered borderRadius={4}>
                <ChevronDownIcon
                  size={16}
                  color={FOUNDATION_THEME.colors.gray[400]}
                />
              </Block>
            </Block>
          </PrimitiveButton>
        }
      />

      <Text variant="body.md" color={FOUNDATION_THEME.colors.gray[400]}>
        {hintText}
      </Text>
    </Block>
  );
};

export default Dropdown;
