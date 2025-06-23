import { forwardRef } from "react";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import Block from "../Primitives/Block/Block";
import {
  ButtonV2Props,
  ButtonSizeV2,
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "./types";
import { ButtonTokensType } from "./button.tokens";
import Text from "../Text/Text";
import { useComponentToken } from "../../context/useComponentToken";
import { LoaderCircle } from "lucide-react";

/**
 * @description A versatile button component with comprehensive styling options and state management.
 * Provides multiple visual styles, sizes, and interaction states for various UI needs.
 * @feature Multiple visual types for different action contexts (primary, secondary, danger, success)
 * @feature Three size variants for different UI scales (small, medium, large)
 * @feature Sub-types for specialized use cases (default, icon-only, inline)
 * @feature Support for leading and trailing icons with ReactNode flexibility
 * @feature Loading state with animated indicator
 * @feature Disabled state with appropriate visual feedback
 * @feature Button group integration for seamless grouping
 * @example Basic Usage
 * ```tsx
 * import { ButtonV2, ButtonTypeV2, ButtonSizeV2 } from "blend-v1";
 * 
 * function BasicButtonExample() {
 *   return (
 *     <div className="space-y-4">
 *       <ButtonV2
 *         text="Primary Button"
 *         buttonType={ButtonTypeV2.PRIMARY}
 *         onClick={() => console.log("Primary clicked")}
 *       />
 * 
 *       <ButtonV2
 *         text="Secondary Button"
 *         buttonType={ButtonTypeV2.SECONDARY}
 *         size={ButtonSizeV2.LARGE}
 *         onClick={() => console.log("Secondary clicked")}
 *       />
 * 
 *       <ButtonV2
 *         text="Success Button"
 *         buttonType={ButtonTypeV2.SUCCESS}
 *         size={ButtonSizeV2.SMALL}
 *         onClick={() => console.log("Success clicked")}
 *       />
 *     </div>
 *   );
 * }
 * ```
 * @example Buttons with Icons and States
 * ```tsx
 * import { 
 *   ButtonV2, 
 *   ButtonTypeV2, 
 *   ButtonSizeV2, 
 *   ButtonSubTypeV2 
 * } from "blend-v1";
 * import { 
 *   Download, 
 *   Trash2, 
 *   Plus, 
 *   Settings, 
 *   ArrowRight 
 * } from "lucide-react";
 * import { useState } from "react";
 * 
 * function IconButtonExample() {
 *   const [isLoading, setIsLoading] = useState(false);
 *   const [isDisabled, setIsDisabled] = useState(false);
 * 
 *   const handleDownload = async () => {
 *     setIsLoading(true);
 *     // Simulate download
 *     await new Promise(resolve => setTimeout(resolve, 2000));
 *     setIsLoading(false);
 *   };
 * 
 *   return (
 *     <div className="space-y-6">
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">Buttons with Icons</h3>
 *         <div className="flex gap-3">
 *           <ButtonV2
 *             text="Download"
 *             buttonType={ButtonTypeV2.PRIMARY}
 *             leadingIcon={<Download size={16} />}
 *             loading={isLoading}
 *             onClick={handleDownload}
 *           />
 * 
 *           <ButtonV2
 *             text="Add Item"
 *             buttonType={ButtonTypeV2.SECONDARY}
 *             leadingIcon={<Plus size={16} />}
 *             onClick={() => console.log("Add item")}
 *           />
 * 
 *           <ButtonV2
 *             text="Next Step"
 *             buttonType={ButtonTypeV2.PRIMARY}
 *             trailingIcon={<ArrowRight size={16} />}
 *             onClick={() => console.log("Next step")}
 *           />
 *         </div>
 *       </div>
 * 
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">Icon-Only Buttons</h3>
 *         <div className="flex gap-3">
 *           <ButtonV2
 *             buttonType={ButtonTypeV2.SECONDARY}
 *             subType={ButtonSubTypeV2.ICON_ONLY}
 *             leadingIcon={<Settings size={20} />}
 *             onClick={() => console.log("Settings")}
 *           />
 * 
 *           <ButtonV2
 *             buttonType={ButtonTypeV2.DANGER}
 *             subType={ButtonSubTypeV2.ICON_ONLY}
 *             leadingIcon={<Trash2 size={20} />}
 *             disabled={isDisabled}
 *             onClick={() => console.log("Delete")}
 *           />
 *         </div>
 *       </div>
 * 
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">Control States</h3>
 *         <div className="flex gap-3">
 *           <button
 *             onClick={() => setIsLoading(!isLoading)}
 *             className="px-3 py-1 border rounded text-sm"
 *           >
 *             Toggle Loading
 *           </button>
 *           <button
 *             onClick={() => setIsDisabled(!isDisabled)}
 *             className="px-3 py-1 border rounded text-sm"
 *           >
 *             Toggle Disabled
 *           </button>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with All Props
 * ```tsx
 * import { 
 *   ButtonV2, 
 *   ButtonTypeV2, 
 *   ButtonSizeV2, 
 *   ButtonSubTypeV2 
 * } from "blend-v1";
 * import { 
 *   Save, 
 *   Upload, 
 *   AlertTriangle, 
 *   Check, 
 *   ExternalLink,
 *   Heart,
 *   Star
 * } from "lucide-react";
 * import { useState } from "react";
 * 
 * function AdvancedButtonExample() {
 *   const [saveLoading, setSaveLoading] = useState(false);
 *   const [uploadLoading, setUploadLoading] = useState(false);
 *   const [formValid, setFormValid] = useState(false);
 * 
 *   const handleSave = async () => {
 *     setSaveLoading(true);
 *     // Simulate save operation
 *     await new Promise(resolve => setTimeout(resolve, 1500));
 *     setSaveLoading(false);
 *   };
 * 
 *   const handleUpload = async () => {
 *     setUploadLoading(true);
 *     // Simulate upload operation
 *     await new Promise(resolve => setTimeout(resolve, 2500));
 *     setUploadLoading(false);
 *   };
 * 
 *   return (
 *     <div className="space-y-8">
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">All Button Types</h3>
 *         <div className="grid grid-cols-2 gap-4">
 *           <ButtonV2
 *             text="Save Changes"
 *             buttonType={ButtonTypeV2.PRIMARY}
 *             size={ButtonSizeV2.LARGE}
 *             leadingIcon={<Save size={18} />}
 *             loading={saveLoading}
 *             onClick={handleSave}
 *           />
 * 
 *           <ButtonV2
 *             text="Upload File"
 *             buttonType={ButtonTypeV2.SECONDARY}
 *             size={ButtonSizeV2.LARGE}
 *             leadingIcon={<Upload size={18} />}
 *             loading={uploadLoading}
 *             onClick={handleUpload}
 *           />
 * 
 *           <ButtonV2
 *             text="Delete Account"
 *             buttonType={ButtonTypeV2.DANGER}
 *             size={ButtonSizeV2.MEDIUM}
 *             leadingIcon={<AlertTriangle size={16} />}
 *             onClick={() => console.log("Delete account")}
 *           />
 * 
 *           <ButtonV2
 *             text="Confirm Action"
 *             buttonType={ButtonTypeV2.SUCCESS}
 *             size={ButtonSizeV2.MEDIUM}
 *             leadingIcon={<Check size={16} />}
 *             disabled={!formValid}
 *             onClick={() => console.log("Action confirmed")}
 *           />
 *         </div>
 *       </div>
 * 
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">All Sizes and Sub-types</h3>
 *         <div className="space-y-4">
 *           <div className="flex items-center gap-3">
 *             <span className="w-20 text-sm">Small:</span>
 *             <ButtonV2
 *               text="Button"
 *               buttonType={ButtonTypeV2.PRIMARY}
 *               size={ButtonSizeV2.SMALL}
 *               onClick={() => console.log("Small button")}
 *             />
 *             <ButtonV2
 *               text="With Icon"
 *               buttonType={ButtonTypeV2.SECONDARY}
 *               size={ButtonSizeV2.SMALL}
 *               leadingIcon={<Star size={14} />}
 *               onClick={() => console.log("Small with icon")}
 *             />
 *           </div>
 * 
 *           <div className="flex items-center gap-3">
 *             <span className="w-20 text-sm">Medium:</span>
 *             <ButtonV2
 *               text="Button"
 *               buttonType={ButtonTypeV2.PRIMARY}
 *               size={ButtonSizeV2.MEDIUM}
 *               onClick={() => console.log("Medium button")}
 *             />
 *             <ButtonV2
 *               text="With Icon"
 *               buttonType={ButtonTypeV2.SECONDARY}
 *               size={ButtonSizeV2.MEDIUM}
 *               leadingIcon={<Heart size={16} />}
 *               onClick={() => console.log("Medium with icon")}
 *             />
 *           </div>
 * 
 *           <div className="flex items-center gap-3">
 *             <span className="w-20 text-sm">Large:</span>
 *             <ButtonV2
 *               text="Button"
 *               buttonType={ButtonTypeV2.PRIMARY}
 *               size={ButtonSizeV2.LARGE}
 *               onClick={() => console.log("Large button")}
 *             />
 *             <ButtonV2
 *               text="External Link"
 *               buttonType={ButtonTypeV2.SECONDARY}
 *               size={ButtonSizeV2.LARGE}
 *               trailingIcon={<ExternalLink size={18} />}
 *               onClick={() => console.log("Large with icon")}
 *             />
 *           </div>
 * 
 *           <div className="flex items-center gap-3">
 *             <span className="w-20 text-sm">Inline:</span>
 *             <ButtonV2
 *               text="Inline button"
 *               buttonType={ButtonTypeV2.SECONDARY}
 *               subType={ButtonSubTypeV2.INLINE}
 *               onClick={() => console.log("Inline button")}
 *             />
 *             <span className="text-sm">
 *               can be used within text or other content seamlessly
 *             </span>
 *           </div>
 *         </div>
 *       </div>
 * 
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">Form Controls</h3>
 *         <div className="space-y-3">
 *           <label className="flex items-center gap-2">
 *             <input
 *               type="checkbox"
 *               checked={formValid}
 *               onChange={(e) => setFormValid(e.target.checked)}
 *             />
 *             <span className="text-sm">Form is valid</span>
 *           </label>
 *           <p className="text-sm text-gray-600">
 *             Toggle the checkbox to enable/disable the success button above
 *           </p>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
const ButtonV2 = forwardRef<HTMLButtonElement, ButtonV2Props>(
  (
    {
      key,
      buttonType = ButtonTypeV2.PRIMARY,
      size = ButtonSizeV2.SMALL,
      subType = ButtonSubTypeV2.DEFAULT,
      text,
      leadingIcon,
      trailingIcon,
      disabled,
      onClick,
      loading,
      buttonGroupPosition,
    },
    ref
  ) => {
    const buttonTokens = useComponentToken("BUTTON") as ButtonTokensType;
    const getBorderRadius = () => {
      const variantBorderRadius =
        buttonTokens.borderRadius[buttonType][subType].default;
      if (buttonGroupPosition === undefined) return variantBorderRadius;
      if (buttonGroupPosition === "left") {
        return `${variantBorderRadius} 0 0 ${variantBorderRadius}`;
      } else if (buttonGroupPosition === "right") {
        return `0 ${variantBorderRadius} ${variantBorderRadius} 0`;
      }
      return `0px 0px 0px 0px`;
    };

    return (
      <PrimitiveButton
        key={key}
        onClick={onClick}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={subType === ButtonSubTypeV2.INLINE ? "fit-content" : "auto"}
        ref={ref}
        gap={buttonTokens.gap}
        background={buttonTokens.backgroundColor[buttonType][subType].default}
        disabled={disabled}
        color={buttonTokens.color[buttonType][subType].default}
        borderRadius={getBorderRadius()}
        padding={buttonTokens.padding[size][subType]}
        border={buttonTokens.border[buttonType][subType].default}
        outline={buttonTokens.outline[buttonType][subType].default}
        _active={
          !disabled
            ? {
                background:
                  buttonTokens.backgroundColor[buttonType][subType].active,
                border: buttonTokens.border[buttonType][subType].active,
                boxShadow: buttonTokens.shadow[buttonType][subType].active,
              }
            : undefined
        }
        _hover={{
          border: buttonTokens.border[buttonType][subType].hover,
          background: buttonTokens.backgroundColor[buttonType][subType].hover,
          outline: buttonTokens.outline[buttonType][subType].hover,
          color: buttonTokens.color[buttonType][subType].hover,
        }}
        _focusVisible={{
          border: buttonTokens.border[buttonType][subType].default,
          outline: buttonTokens.outline[buttonType][subType].active,
        }}
        _disabled={{
          background:
            buttonTokens.backgroundColor[buttonType][subType].disabled,
          border: buttonTokens.border[buttonType][subType].disabled,
          color: buttonTokens.color[buttonType][subType].disabled,
          cursor: "not-allowed",
        }}
      >
        {loading ? (
          <LoaderCircle
            size={16}
            color={buttonTokens.color[buttonType][subType].default}
            style={{
              animation: "spin 1s linear infinite",
            }}
          />
        ) : (
          <>
            {leadingIcon && (
              <Block as="span" contentCentered>
                {leadingIcon}
              </Block>
            )}
            {text && (
              <Text
                fontFamily="InterDisplay"
                variant="body.md"
                style={{
                  fontWeight: 500,
                }}
                as="span"
                color="inherit"
              >
                {text}
              </Text>
            )}
            {trailingIcon && (
              <Block as="span" contentCentered>
                {trailingIcon}
              </Block>
            )}
          </>
        )}
      </PrimitiveButton>
    );
  }
);

export default ButtonV2;
