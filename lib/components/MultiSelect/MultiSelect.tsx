import { useState } from "react";
import Block from "../Primitives/Block/Block";
import {
  SelectMenuGroupType,
  SelectMenuItemType,
  SelectMenuSize,
  SelectMenuVariant,
} from "../Select";
import { dummyMenuItems } from "../../../src/demos/Menu/MenuDemo";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import { SelectionTagType } from "../Select/Select";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import MultiSelectMenu from "./MultiSelectMenu";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { FOUNDATION_THEME } from "../../tokens";
import Text from "../Text/Text";
import { ChevronDown, User, X } from "lucide-react";
import selectTokens from "../Select/select.token";
import { MultiSelectProps } from "./types";

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

/**
 * @description A form input component that allows users to select multiple options from a dropdown menu, displaying selected items as tags or counts.
 * Essential for forms requiring multiple selections like skills, categories, locations, or any multi-choice scenarios.
 * @feature Multiple item selection with visual feedback
 * @feature Two display variants: container (with labels) and no-container (inline)
 * @feature Selection display options: count or individual tags
 * @feature Search functionality within dropdown options
 * @feature Groupable menu items with separators
 * @feature Customizable sizing, alignment, and positioning
 * @feature Icon slot support for enhanced visual context
 * @example Basic Skills Multi-Select
 * ```tsx
 * import { MultiSelect, SelectMenuGroupType } from "blend-v1";
 * import { useState } from "react";
 *
 * const skillsData: SelectMenuGroupType[] = [
 *   {
 *     label: "Programming Languages",
 *     items: [
 *       { label: "JavaScript", value: "javascript" },
 *       { label: "TypeScript", value: "typescript" },
 *       { label: "Python", value: "python" },
 *       { label: "Java", value: "java" }
 *     ]
 *   },
 *   {
 *     label: "Frameworks",
 *     items: [
 *       { label: "React", value: "react" },
 *       { label: "Vue", value: "vue" },
 *       { label: "Angular", value: "angular" }
 *     ]
 *   }
 * ];
 *
 * function SkillsSelector() {
 *   const [selectedSkills, setSelectedSkills] = useState<string[]>(["javascript", "react"]);
 *
 *   const handleSkillChange = (skill: string) => {
 *     setSelectedSkills(prev => 
 *       prev.includes(skill) 
 *         ? prev.filter(s => s !== skill)
 *         : [...prev, skill]
 *     );
 *   };
 *
 *   return (
 *     <MultiSelect
 *       label="Technical Skills"
 *       placeholder="Select your skills..."
 *       selectedValues={selectedSkills}
 *       onChange={handleSkillChange}
 *       items={skillsData}
 *       required={true}
 *     />
 *   );
 * }
 * ```
 * @example Intermediate Location Selector with Customization
 * ```tsx
 * import { 
 *   MultiSelect, 
 *   SelectMenuGroupType, 
 *   SelectMenuVariant,
 *   SelectMenuSize,
 *   SelectionTagType
 * } from "blend-v1";
 * import { useState } from "react";
 * import { MapPin } from "lucide-react";
 *
 * const locationData: SelectMenuGroupType[] = [
 *   {
 *     label: "North America",
 *     showSeparator: true,
 *     items: [
 *       { label: "New York, NY", value: "ny" },
 *       { label: "San Francisco, CA", value: "sf" },
 *       { label: "Toronto, ON", value: "toronto" },
 *       { label: "Seattle, WA", value: "seattle" }
 *     ]
 *   },
 *   {
 *     label: "Europe",
 *     items: [
 *       { label: "London, UK", value: "london" },
 *       { label: "Berlin, Germany", value: "berlin" },
 *       { label: "Paris, France", value: "paris" },
 *       { label: "Amsterdam, Netherlands", value: "amsterdam" }
 *     ]
 *   }
 * ];
 *
 * function LocationSelector() {
 *   const [selectedLocations, setSelectedLocations] = useState<string[]>(["sf", "london"]);
 *
 *   return (
 *     <MultiSelect
 *       label="Preferred Work Locations"
 *       sublabel="Choose multiple locations"
 *       placeholder="Select locations..."
 *       selectedValues={selectedLocations}
 *       onChange={(location) => setSelectedLocations(prev => 
 *         prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
 *       )}
 *       items={locationData}
 *       variant={SelectMenuVariant.CONTAINER}
 *       size={SelectMenuSize.LARGE}
 *       selectionTagType={SelectionTagType.COUNT}
 *       slot={<MapPin size={16} />}
 *       hintText="Select all locations where you'd like to work"
 *       required={true}
 *       helpIconHintText="You can select multiple cities where you're willing to work"
 *     />
 *   );
 * }
 * ```
 * @example Advanced Multi-Select with Full Customization
 * ```tsx
 * import { 
 *   MultiSelect, 
 *   SelectMenuGroupType,
 *   SelectMenuVariant,
 *   SelectMenuSize,
 *   SelectionTagType,
 *   SelectMenuAlignment,
 *   SelectMenuSide
 * } from "blend-v1";
 * import { useState } from "react";
 * import { Users, Building, Globe } from "lucide-react";
 *
 * const projectCategoriesData: SelectMenuGroupType[] = [
 *   {
 *     label: "Team Size",
 *     showSeparator: true,
 *     items: [
 *       { label: "Solo (1 person)", value: "solo" },
 *       { label: "Small Team (2-5 people)", value: "small" },
 *       { label: "Medium Team (6-15 people)", value: "medium" },
 *       { label: "Large Team (16+ people)", value: "large" }
 *     ]
 *   },
 *   {
 *     label: "Industry",
 *     showSeparator: true,
 *     items: [
 *       { label: "Technology", value: "tech" },
 *       { label: "Healthcare", value: "healthcare" },
 *       { label: "Finance", value: "finance" },
 *       { label: "Education", value: "education" },
 *       { label: "E-commerce", value: "ecommerce" }
 *     ]
 *   },
 *   {
 *     label: "Scope",
 *     items: [
 *       { label: "Local", value: "local" },
 *       { label: "National", value: "national" },
 *       { label: "International", value: "international" }
 *     ]
 *   }
 * ];
 *
 * function ProjectCategorySelector() {
 *   const [selectedCategories, setSelectedCategories] = useState<string[]>(["small", "tech", "national"]);
 *   const [disabled, setDisabled] = useState(false);
 *
 *   const handleCategoryChange = (category: string) => {
 *     setSelectedCategories(prev => 
 *       prev.includes(category) 
 *         ? prev.filter(c => c !== category)
 *         : [...prev, category]
 *     );
 *   };
 *
 *   return (
 *     <div style={{ width: '400px' }}>
 *       <button onClick={() => setDisabled(!disabled)}>
 *         Toggle Disabled State
 *       </button>
 *       
 *       <MultiSelect
 *         label="Project Categories"
 *         sublabel="Select all applicable categories"
 *         placeholder="Choose project attributes..."
 *         selectedValues={selectedCategories}
 *         onChange={handleCategoryChange}
 *         items={projectCategoriesData}
 *         variant={SelectMenuVariant.CONTAINER}
 *         size={SelectMenuSize.MEDIUM}
 *         selectionTagType={SelectionTagType.COUNT}
 *         slot={<Building size={16} />}
 *         hintText="This helps us categorize and match your project appropriately"
 *         required={true}
 *         disabled={disabled}
 *         helpIconHintText="Select multiple categories that best describe your project"
 *         name="project-categories"
 *         minWidth={350}
 *         maxWidth={500}
 *         maxHeight={300}
 *         alignment={SelectMenuAlignment.START}
 *         side={SelectMenuSide.BOTTOM}
 *         sideOffset={8}
 *         alignOffset={0}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
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
  variant = SelectMenuVariant.CONTAINER,
  selectionTagType = SelectionTagType.COUNT,
  slot = <User size={13} />,
  hintText,
  placeholder,
  size = SelectMenuSize.MEDIUM,
  // dim
  minWidth,
  maxWidth,
  maxHeight,

  // alignment
  alignment,
  side,
  sideOffset,
  alignOffset,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const valueLabelMap = map(items);

  const showCancelButton =
    variant === SelectMenuVariant.CONTAINER && selectedValues.length > 0;

  return (
    <Block
      width="100%"
      display="flex"
      flexDirection="column"
      gap={8}
      maxWidth={"100%"}
    >
      {variant === SelectMenuVariant.CONTAINER && (
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
          width={variant === SelectMenuVariant.CONTAINER ? "100%" : "auto"}
          maxWidth={
            variant === SelectMenuVariant.NO_CONTAINER ? "100%" : "auto"
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
                  variant === SelectMenuVariant.CONTAINER
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
                  variant === SelectMenuVariant.CONTAINER
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
                  {variant === SelectMenuVariant.NO_CONTAINER && (
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
                  {variant === SelectMenuVariant.NO_CONTAINER ||
                    (variant === SelectMenuVariant.CONTAINER && (
                      <Text
                        as="span"
                        variant="body.md"
                        color={FOUNDATION_THEME.colors.gray[700]}
                        fontWeight={500}
                      >
                        {variant === SelectMenuVariant.CONTAINER
                          ? placeholder
                          : label}
                      </Text>
                    ))}
                  {selectedValues.length > 0 && (
                    <Text
                      as="span"
                      variant="body.md"
                      color={
                        variant === SelectMenuVariant.CONTAINER
                          ? selectionTagType === SelectionTagType.COUNT
                            ? FOUNDATION_THEME.colors.gray[0]
                            : FOUNDATION_THEME.colors.gray[700]
                          : selectionTagType === SelectionTagType.COUNT
                          ? FOUNDATION_THEME.colors.gray[0]
                          : FOUNDATION_THEME.colors.gray[400]
                      }
                      fontWeight={500}
                      style={{
                        height: "100%",
                        marginLeft: 8,
                        // border: "1px solid red",
                        backgroundColor:
                          selectionTagType === SelectionTagType.COUNT
                            ? FOUNDATION_THEME.colors.primary[600]
                            : "transparent",
                        borderRadius: 4,
                        padding:
                          selectionTagType === SelectionTagType.COUNT
                            ? "0px 6px"
                            : "0px 0px",
                      }}
                    >
                      {selectionTagType === SelectionTagType.COUNT
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
          {variant === SelectMenuVariant.CONTAINER &&
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
      {variant === SelectMenuVariant.CONTAINER && (
        <InputFooter hintText={hintText} />
      )}
    </Block>
  );
};

export default MultiSelect;
