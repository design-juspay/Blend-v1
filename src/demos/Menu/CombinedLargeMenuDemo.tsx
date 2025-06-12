import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonSize,
  ButtonType,
  Menu,
  MenuItemV2Type,
  MenuItemV2Variant,
  MenuV2GroupType,
  Tag,
  TagColor,
  TagShape,
  TagSize,
} from "../../../lib/main";
import { ChevronDown, Settings2 } from "lucide-react";
import Block from "../../../lib/components/Primitives/Block/Block";
import Text from "../../../lib/components/Text/Text";
import { FOUNDATION_THEME } from "../../../lib/tokens";
import SimpleExample from "../../../lib/components/Virtualizer/SimpleExample";

const generateSubMenu = (size: number): MenuItemV2Type[] => {
  const items: MenuItemV2Type[] = [];
  for (let i = 0; i < size; i++) {
    items.push({
      label: `Submenu Item ${i + 1}`,
      variant: MenuItemV2Variant.DEFAULT,
      onClick: () => console.log(`Clicked submenu item ${i + 1}`),
      slot3:
        i % 2 !== 0 ? (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.ERROR}
            size={TagSize.XS}
            text="Permanent"
          />
        ) : null,
    });
  }
  return items;
};

const generateDataset = (
  mainSize: number,
  submenuSize: number
): MenuV2GroupType[] => {
  const items: MenuItemV2Type[] = [];

  for (let i = 0; i < mainSize; i++) {
    if (i % 10 === 0) {
      items.push({
        label: `Menu Item ${i + 1} (with large submenu)`,
        variant: MenuItemV2Variant.DEFAULT,
        subMenu: generateSubMenu(submenuSize),
      });
    } else {
      items.push({
        label: `Menu Item ${i + 1}`,
        variant: MenuItemV2Variant.DEFAULT,
        onClick: () => console.log(`Clicked item ${i + 1}`),
        slot1: i % 2 === 0 ? <Settings2 size={13} /> : null,
      });
    }
  }

  return [
    {
      label: `${mainSize} Main Items, ${submenuSize} Submenu Items`,
      items,
      showSeparator: false,
    },
  ];
};

const CombinedLargeMenuDemo = () => {
  const [mainMenuSize, setMainMenuSize] = useState<number>(500);
  const [submenuSize, setSubmenuSize] = useState<number>(1000);
  const [menuItems, setMenuItems] = useState<MenuV2GroupType[]>([]);
  const [useVirtualization, setUseVirtualization] = useState<boolean>(true);

  useEffect(() => {
    setMenuItems(generateDataset(mainMenuSize, submenuSize));
  }, [mainMenuSize, submenuSize]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <SimpleExample />

      <Block display="flex" flexDirection="column" gap={16}>
        <Text variant="heading.md">Combined Large Menu and Submenu Demo</Text>
        <Text variant="body.md">
          This example demonstrates a menu with both a large number of main
          items AND large submenus. Virtualization ensures only visible items
          are rendered in the DOM at both levels.
        </Text>

        <Block display="flex" flexDirection="column" gap={8}>
          <Text
            variant="body.sm"
            fontWeight={600}
            style={{ marginBottom: "8px" }}
            color={FOUNDATION_THEME.colors.gray[600]}
          >
            Main Menu Size:
          </Text>
          <Block display="flex" gap={8}>
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setMainMenuSize(100)}
              text="100 items"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setMainMenuSize(500)}
              text="500 items"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setMainMenuSize(1000)}
              text="1,000 items"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setMainMenuSize(100000)}
              text="100,000 items"
            />
          </Block>
        </Block>

        <Block display="flex" flexDirection="column" gap={8}>
          <Text
            variant="body.sm"
            fontWeight={600}
            style={{ marginBottom: "8px" }}
            color={FOUNDATION_THEME.colors.gray[600]}
          >
            Submenu Size:
          </Text>
          <Block display="flex" gap={8}>
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setSubmenuSize(100)}
              text="100 items"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setSubmenuSize(1000)}
              text="1,000 items"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setSubmenuSize(100000)}
              text="100,000 items"
            />
          </Block>
        </Block>

        <Block display="flex" flexDirection="column" gap={8}>
          <Text
            variant="body.sm"
            fontWeight={600}
            style={{ marginBottom: "8px" }}
            color={FOUNDATION_THEME.colors.gray[600]}
          >
            Virtualization:
          </Text>
          <Block display="flex" gap={8}>
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setUseVirtualization(true)}
              text="Enabled"
            />
            <Button
              buttonType={ButtonType.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={() => setUseVirtualization(false)}
              text="Disabled (Careful!)"
            />
          </Block>
        </Block>

        <Block marginTop={16}>
          <Menu
            trigger={
              <Button
                buttonType={ButtonType.PRIMARY}
                size={ButtonSize.MEDIUM}
                trailingIcon={ChevronDown}
              >
                Open Menu ({mainMenuSize} main items, {submenuSize} submenu
                items)
              </Button>
            }
            items={menuItems}
            useVirtualization={useVirtualization}
            itemHeight={40}
            maxHeight={400}
            enableSearch={true}
            virtualizationThreshold={20}
          />
        </Block>
      </Block>
    </div>
  );
};

export default CombinedLargeMenuDemo;
