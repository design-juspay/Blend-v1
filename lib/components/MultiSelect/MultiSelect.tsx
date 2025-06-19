import { useState } from "react";
import Block from "../Primitives/Block/Block";
import { SelectMenuGroupType, SelectMenuItemType } from "../Select";
import { dummyMenuItems } from "../../../src/demos/Menu/MenuDemo";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import MultiSelectMenu from "./MultiSelectMenu";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { FOUNDATION_THEME } from "../../tokens";
import Text from "../Text/Text";
import { ChevronDown, User, X } from "lucide-react";
import selectTokens from "../Select/select.token";
import {
  MultiSelectMenuSize,
  MultiSelectProps,
  MultiSelectSelectionTagType,
  MultiSelectVariant,
} from "./types";

const map = function getValueLabelMap(
  groups: SelectMenuGroupType[]
): Record<string, string> {
  const map: Record<string, string> = {};

  function traverse(items: SelectMenuItemType[]) {
    for (const item of items) {
      map[item.value] = item.label;
      if (item.subMenu) {
        traverse(item.subMenu);
      }
    }
  }

  for (const group of groups) {
    traverse(group.items);
  }

  return map;
};

const MultiSelect = ({
  selectedValues,
  onChange,
  items = dummyMenuItems,
  label,
  sublabel,
  disabled,
  helpIconHintText,
  name,
  required,
  variant = MultiSelectVariant.CONTAINER,
  selectionTagType = MultiSelectSelectionTagType.COUNT,
  slot = <User size={13} />,
  hintText,
  placeholder,
  size = MultiSelectMenuSize.MEDIUM,
  minWidth,
  maxWidth,
  maxHeight,
  alignment,
  side,
  sideOffset,
  alignOffset,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const valueLabelMap = map(items);

  const showCancelButton =
    variant === MultiSelectVariant.CONTAINER && selectedValues.length > 0;

  return (
    <Block
      width="100%"
      display="flex"
      flexDirection="column"
      gap={8}
      maxWidth={"100%"}
    >
      {variant === MultiSelectVariant.CONTAINER && (
        <InputLabels
          label={label}
          sublabel={sublabel}
          disabled={disabled}
          helpIconHintText={helpIconHintText}
          name={name}
          required={required}
        />
      )}
      <Block display="flex">
        <Block
          width={variant === MultiSelectVariant.CONTAINER ? "100%" : "auto"}
          maxWidth={
            variant === MultiSelectVariant.NO_CONTAINER ? "100%" : "auto"
          }
          display="flex"
          alignItems="center"
        >
          <MultiSelectMenu
            items={items}
            selected={selectedValues}
            onSelect={onChange}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            alignment={alignment}
            side={side}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            open={open}
            onOpenChange={setOpen}
            trigger={
              <PrimitiveButton
                display="flex"
                width={"100%"}
                alignItems="center"
                overflow="hidden"
                borderRadius={`8px ${showCancelButton ? 0 : 8}px ${
                  showCancelButton ? 0 : 8
                }px 8px`}
                boxShadow={
                  variant === MultiSelectVariant.CONTAINER
                    ? FOUNDATION_THEME.shadows.xs
                    : undefined
                }
                justifyContent="space-between"
                paddingX={selectTokens.trigger.selectedValue.padding[size].x}
                paddingY={selectTokens.trigger.selectedValue.padding[size].y}
                backgroundColor={
                  open
                    ? FOUNDATION_THEME.colors.gray[25]
                    : FOUNDATION_THEME.colors.gray[0]
                }
                outline={
                  variant === MultiSelectVariant.CONTAINER
                    ? `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`
                    : undefined
                }
                _hover={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[50],
                }}
                _focus={{
                  outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
                }}
                gap={8}
              >
                {slot && (
                  <Block as="span" contentCentered>
                    {slot}
                  </Block>
                )}
                <Block
                  as="span"
                  height={20}
                  textAlign="left"
                  style={{
                    textAlign: "left",
                    flexGrow: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* NO CONTAINER Label*/}
                  {variant === MultiSelectVariant.NO_CONTAINER && (
                    <Text
                      as="span"
                      variant="body.md"
                      color={FOUNDATION_THEME.colors.gray[700]}
                      fontWeight={500}
                    >
                      {label}
                    </Text>
                  )}

                  {/* Variant == Container - always show the placeholder*/}
                  {variant === MultiSelectVariant.NO_CONTAINER ||
                    (variant === MultiSelectVariant.CONTAINER && (
                      <Text
                        as="span"
                        variant="body.md"
                        color={FOUNDATION_THEME.colors.gray[700]}
                        fontWeight={500}
                      >
                        {variant === MultiSelectVariant.CONTAINER
                          ? placeholder
                          : label}
                      </Text>
                    ))}
                  {selectedValues.length > 0 && (
                    <Text
                      as="span"
                      variant="body.md"
                      color={
                        variant === MultiSelectVariant.CONTAINER
                          ? selectionTagType ===
                            MultiSelectSelectionTagType.COUNT
                            ? FOUNDATION_THEME.colors.gray[0]
                            : FOUNDATION_THEME.colors.gray[700]
                          : selectionTagType ===
                            MultiSelectSelectionTagType.COUNT
                          ? FOUNDATION_THEME.colors.gray[0]
                          : FOUNDATION_THEME.colors.gray[400]
                      }
                      fontWeight={500}
                      style={{
                        height: "100%",
                        marginLeft: 8,
                        // border: "1px solid red",
                        backgroundColor:
                          selectionTagType === MultiSelectSelectionTagType.COUNT
                            ? FOUNDATION_THEME.colors.primary[600]
                            : "transparent",
                        borderRadius: 4,
                        padding:
                          selectionTagType === MultiSelectSelectionTagType.COUNT
                            ? "0px 6px"
                            : "0px 0px",
                      }}
                    >
                      {selectionTagType === MultiSelectSelectionTagType.COUNT
                        ? selectedValues.length
                        : selectedValues
                            .map((v) => valueLabelMap[v])
                            .join(", ")}
                    </Text>
                  )}
                </Block>
                <Block
                  as="span"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  size={20}
                  contentCentered
                  flexShrink={0}
                >
                  <ChevronDown size={16} />
                </Block>
              </PrimitiveButton>
            }
          />
          {variant === MultiSelectVariant.CONTAINER &&
            selectedValues.length > 0 && (
              <PrimitiveButton
                borderRadius={`0 8px 8px 0`}
                backgroundColor={FOUNDATION_THEME.colors.gray[0]}
                contentCentered
                height={"100%"}
                style={{ aspectRatio: 1 }}
                onClick={() => onChange("")}
                outline={`1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`}
                _hover={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[25],
                }}
                _focus={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[25],
                  outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
                }}
              >
                <X size={16} color={FOUNDATION_THEME.colors.gray[400]} />
              </PrimitiveButton>
            )}
        </Block>
      </Block>
      {variant === MultiSelectVariant.CONTAINER && (
        <InputFooter hintText={hintText} />
      )}
    </Block>
  );
};

export default MultiSelect;
