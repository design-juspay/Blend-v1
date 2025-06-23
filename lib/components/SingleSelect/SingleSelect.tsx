import { useState } from "react";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import Block from "../Primitives/Block/Block";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import {
  SelectMenuGroupType,
  SelectMenuItemType,
  SelectMenuSize,
  SelectMenuVariant,
} from "../Select";
import Text from "../Text/Text";
import SingleSelectMenu from "./SingleSelectMenu";
import { dummyMenuItems } from "../../../src/demos/Menu/MenuDemo";
import { FOUNDATION_THEME } from "../../tokens";
import selectTokens from "../Select/select.token";
import { ChevronDown } from "lucide-react";
import { SingleSelectProps } from "./types";

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
 * @description A form input component that allows users to select a single option from a dropdown menu, with support for search functionality and customizable styling.
 * Perfect for country selectors, category pickers, status dropdowns, and any single-choice scenario.
 * @feature Single item selection with clear visual feedback
 * @feature Optional search functionality for filtering large lists
 * @feature Two display variants: container (with labels) and no-container (inline)
 * @feature Groupable menu items with separators and labels
 * @feature Customizable sizing, alignment, and positioning
 * @feature Icon slot support for enhanced visual context
 * @feature Keyboard navigation and accessibility support
 * @example Basic Country Selector
 * ```tsx
 * import { SingleSelect, SelectMenuGroupType } from "blend-v1";
 * import { useState } from "react";
 *
 * const countryData: SelectMenuGroupType[] = [
 *   {
 *     items: [
 *       { label: "United States", value: "us" },
 *       { label: "Canada", value: "ca" },
 *       { label: "United Kingdom", value: "uk" },
 *       { label: "Germany", value: "de" },
 *       { label: "France", value: "fr" },
 *       { label: "Australia", value: "au" }
 *     ]
 *   }
 * ];
 *
 * function CountrySelector() {
 *   const [selectedCountry, setSelectedCountry] = useState<string>("us");
 *
 *   return (
 *     <SingleSelect
 *       label="Country"
 *       placeholder="Select your country"
 *       selected={selectedCountry}
 *       onSelect={setSelectedCountry}
 *       items={countryData}
 *       required={true}
 *     />
 *   );
 * }
 * ```
 * @example Intermediate Status Selector with Search
 * ```tsx
 * import { 
 *   SingleSelect, 
 *   SelectMenuGroupType, 
 *   SelectMenuSize,
 *   SelectMenuVariant 
 * } from "blend-v1";
 * import { useState } from "react";
 * import { Activity } from "lucide-react";
 *
 * const statusData: SelectMenuGroupType[] = [
 *   {
 *     label: "Active States",
 *     showSeparator: true,
 *     items: [
 *       { label: "In Progress", value: "in_progress" },
 *       { label: "Under Review", value: "under_review" },
 *       { label: "Approved", value: "approved" }
 *     ]
 *   },
 *   {
 *     label: "Inactive States",
 *     items: [
 *       { label: "Draft", value: "draft" },
 *       { label: "Cancelled", value: "cancelled" },
 *       { label: "Archived", value: "archived" }
 *     ]
 *   }
 * ];
 *
 * function StatusSelector() {
 *   const [projectStatus, setProjectStatus] = useState<string>("in_progress");
 *
 *   return (
 *     <SingleSelect
 *       label="Project Status"
 *       subLabel="Current state of the project"
 *       placeholder="Choose status..."
 *       selected={projectStatus}
 *       onSelect={setProjectStatus}
 *       items={statusData}
 *       variant={SelectMenuVariant.CONTAINER}
 *       size={SelectMenuSize.MEDIUM}
 *       enableSearch={true}
 *       slot={<Activity size={16} />}
 *       hintText="This status will be visible to all team members"
 *       required={true}
 *       helpIconText="Project status helps track progress and communicate current state"
 *     />
 *   );
 * }
 * ```
 * @example Advanced Category Selector with Full Customization
 * ```tsx
 * import { 
 *   SingleSelect, 
 *   SelectMenuGroupType,
 *   SelectMenuVariant,
 *   SelectMenuSize,
 *   SelectMenuAlignment,
 *   SelectMenuSide
 * } from "blend-v1";
 * import { useState } from "react";
 * import { Tag, Star, Briefcase, Zap } from "lucide-react";
 *
 * const categoryData: SelectMenuGroupType[] = [
 *   {
 *     label: "Popular Categories",
 *     showSeparator: true,
 *     items: [
 *       { 
 *         label: "Technology & Software", 
 *         value: "tech",
 *         subMenu: [
 *           { label: "Web Development", value: "web_dev" },
 *           { label: "Mobile Apps", value: "mobile" },
 *           { label: "AI & Machine Learning", value: "ai_ml" }
 *         ]
 *       },
 *       { label: "Design & Creative", value: "design" },
 *       { label: "Marketing & Sales", value: "marketing" }
 *     ]
 *   },
 *   {
 *     label: "Business Categories",
 *     showSeparator: true,
 *     items: [
 *       { label: "Consulting", value: "consulting" },
 *       { label: "Finance & Accounting", value: "finance" },
 *       { label: "Legal Services", value: "legal" }
 *     ]
 *   },
 *   {
 *     label: "Other Categories",
 *     items: [
 *       { label: "Education & Training", value: "education" },
 *       { label: "Healthcare", value: "healthcare" },
 *       { label: "Real Estate", value: "real_estate" },
 *       { label: "Entertainment", value: "entertainment" }
 *     ]
 *   }
 * ];
 *
 * function AdvancedCategorySelector() {
 *   const [selectedCategory, setSelectedCategory] = useState<string>("tech");
 *   const [disabled, setDisabled] = useState(false);
 *
 *   return (
 *     <div style={{ width: '450px', padding: '20px' }}>
 *       <div style={{ marginBottom: '16px' }}>
 *         <button onClick={() => setDisabled(!disabled)}>
 *           {disabled ? 'Enable' : 'Disable'} Selector
 *         </button>
 *       </div>
 *
 *       <SingleSelect
 *         label="Business Category"
 *         subLabel="Select your primary business focus"
 *         placeholder="Choose a category..."
 *         selected={selectedCategory}
 *         onSelect={setSelectedCategory}
 *         items={categoryData}
 *         variant={SelectMenuVariant.CONTAINER}
 *         size={SelectMenuSize.LARGE}
 *         enableSearch={true}
 *         slot={<Briefcase size={18} />}
 *         hintText="This helps us personalize your experience and show relevant opportunities"
 *         required={true}
 *         disabled={disabled}
 *         helpIconText="Choose the category that best represents your primary business activity"
 *         name="business-category"
 *         alignment={SelectMenuAlignment.START}
 *         side={SelectMenuSide.BOTTOM}
 *         sideOffset={12}
 *         alignOffset={0}
 *         minWidth={400}
 *         maxWidth={600}
 *         maxHeight={350}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
const SingleSelect = ({
  label,
  subLabel,
  hintText,
  required,
  helpIconText,
  placeholder,
  size = SelectMenuSize.MEDIUM,
  items = dummyMenuItems,
  name,
  variant = SelectMenuVariant.CONTAINER,
  disabled,
  selected,
  onSelect,
  enableSearch,
  slot,
  alignment,
  side,
  sideOffset,
  alignOffset,
  minWidth,
  maxWidth,
  maxHeight,
}: SingleSelectProps) => {
  const [open, setOpen] = useState(false);
  const valueLabelMap = map(items);
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
          sublabel={subLabel}
          disabled={disabled}
          helpIconHintText={helpIconText}
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
          <SingleSelectMenu
            open={open}
            onOpenChange={setOpen}
            items={items}
            selected={selected}
            onSelect={onSelect}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            alignment={alignment}
            side={side}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            enableSearch={enableSearch}
            trigger={
              <PrimitiveButton
                display="flex"
                width={"100%"}
                alignItems="center"
                overflow="hidden"
                borderRadius={8}
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
                <Block display="flex" alignItems="center" gap={8}>
                  {slot && <Block contentCentered>{slot}</Block>}
                  <Text
                    variant="body.md"
                    color={
                      selected
                        ? FOUNDATION_THEME.colors.gray[700]
                        : FOUNDATION_THEME.colors.gray[600]
                    }
                    fontWeight={500}
                  >
                    {selected ? valueLabelMap[selected] : placeholder}
                  </Text>
                </Block>
                <Block contentCentered>
                  <ChevronDown
                    size={16}
                    color={FOUNDATION_THEME.colors.gray[500]}
                  />
                </Block>
              </PrimitiveButton>
            }
          />
        </Block>
      </Block>
      {variant === SelectMenuVariant.CONTAINER && (
        <InputFooter hintText={hintText} />
      )}
    </Block>
  );
};

export default SingleSelect;
