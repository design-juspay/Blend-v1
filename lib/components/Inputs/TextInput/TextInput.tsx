import Block from "../../Primitives/Block/Block";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import { useRef, useState, useEffect } from "react";
import InputLabels from "../utils/InputLabels/InputLabels";
import InputFooter from "../utils/InputFooter/InputFooter";
import { TextInputSize, InputProps } from "./types";
import { useComponentToken } from "../../../context/useComponentToken";
import { TextInputTokensType } from "./textInput.tokens";

/**
 * @description A standard single-line text input field.
 * Allows users to enter and edit text.
 * The props for this component are defined in `InputProps` (ideally `TextInputProps`) in `./types.ts`.
 * @feature Single-line text input.
 * @feature Supports labels, sublabels, hint text, and error messages.
 * @feature Optional left and right slots for icons or other adornments.
 * @feature Customizable size.
 * @feature Controlled component with `value` and `onChange` props.
 * @example Basic Usage
 * ```tsx
 * import { TextInput, TextInputSize } from "blend-v1";
 * import { useState } from "react";
 *
 * function BasicForm() {
 *   const [email, setEmail] = useState("");
 *
 *   return (
 *     <TextInput
 *       label="Email Address"
 *       value={email}
 *       onChange={(e) => setEmail(e.target.value)}
 *       placeholder="Enter your email"
 *       size={TextInputSize.MEDIUM}
 *     />
 *   );
 * }
 * ```
 * @example Intermediate Usage with Icons and Validation
 * ```tsx
 * import { TextInput, TextInputSize } from "blend-v1";
 * import { User, Eye, EyeOff } from "lucide-react";
 * import { useState } from "react";
 *
 * function LoginForm() {
 *   const [username, setUsername] = useState("");
 *   const [password, setPassword] = useState("");
 *   const [showPassword, setShowPassword] = useState(false);
 *   const [errors, setErrors] = useState<{username?: string; password?: string}>({});
 *
 *   const validateUsername = (value: string) => {
 *     if (!value) return "Username is required";
 *     if (value.length < 3) return "Username must be at least 3 characters";
 *     return "";
 *   };
 *
 *   return (
 *     <>
 *       <TextInput
 *         label="Username"
 *         sublabel="Choose a unique username"
 *         value={username}
 *         onChange={(e) => {
 *           setUsername(e.target.value);
 *           const error = validateUsername(e.target.value);
 *           setErrors(prev => ({ ...prev, username: error }));
 *         }}
 *         placeholder="Enter username"
 *         size={TextInputSize.LARGE}
 *         leftSlot={<User size={18} />}
 *         error={!!errors.username}
 *         errorMessage={errors.username}
 *         hintText="Must be at least 3 characters long"
 *         required
 *       />
 *
 *       <TextInput
 *         label="Password"
 *         value={password}
 *         onChange={(e) => setPassword(e.target.value)}
 *         placeholder="Enter password"
 *         size={TextInputSize.LARGE}
 *         rightSlot={
 *           <button 
 *             type="button"
 *             onClick={() => setShowPassword(!showPassword)}
 *             style={{ background: 'none', border: 'none', cursor: 'pointer' }}
 *           >
 *             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
 *           </button>
 *         }
 *         hintText="Click the eye icon to toggle visibility"
 *         required
 *       />
 *     </>
 *   );
 * }
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { TextInput, TextInputSize } from "blend-v1";
 * import { Search, X, AlertCircle, HelpCircle } from "lucide-react";
 * import { useState } from "react";
 *
 * function AdvancedForm() {
 *   const [searchTerm, setSearchTerm] = useState("");
 *   const [companyName, setCompanyName] = useState("");
 *   const [description, setDescription] = useState("");
 *   const [isFormDisabled, setIsFormDisabled] = useState(false);
 *   const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
 *
 *   const clearSearch = () => setSearchTerm("");
 *   
 *   const validateCompanyName = (value: string) => {
 *     if (!value) return "Company name is required";
 *     if (value.length < 2) return "Company name must be at least 2 characters";
 *     if (!/^[a-zA-Z0-9\s&.-]+$/.test(value)) return "Invalid characters in company name";
 *     return "";
 *   };
 *
 *   return (
 *     <form>
 *       {/* Search Input with Clear Button */}
 *       <TextInput
 *         label="Search Products"
 *         sublabel="Find what you're looking for"
 *         value={searchTerm}
 *         onChange={(e) => setSearchTerm(e.target.value)}
 *         placeholder="Search by name, category, or SKU..."
 *         size={TextInputSize.LARGE}
 *         leftSlot={<Search size={18} color="#6b7280" />}
 *         rightSlot={
 *           searchTerm ? (
 *             <button 
 *               type="button"
 *               onClick={clearSearch}
 *               style={{ 
 *                 background: 'none', 
 *                 border: 'none', 
 *                 cursor: 'pointer',
 *                 display: 'flex',
 *                 alignItems: 'center'
 *               }}
 *             >
 *               <X size={16} color="#6b7280" />
 *             </button>
 *           ) : null
 *         }
 *         hintText="Use keywords or product codes for better results"
 *         name="search"
 *       />
 *
 *       {/* Company Name with Validation */}
 *       <TextInput
 *         label="Company Name"
 *         sublabel="Official registered business name"
 *         value={companyName}
 *         onChange={(e) => {
 *           setCompanyName(e.target.value);
 *           const error = validateCompanyName(e.target.value);
 *           setValidationErrors(prev => ({ ...prev, company: error }));
 *         }}
 *         placeholder="Enter company name"
 *         size={TextInputSize.MEDIUM}
 *         leftSlot={validationErrors.company ? 
 *           <AlertCircle size={16} color="#ef4444" /> : 
 *           undefined
 *         }
 *         error={!!validationErrors.company}
 *         errorMessage={validationErrors.company}
 *         hintText="This will appear on invoices and contracts"
 *         helpIconHintText="The company name should match your business registration documents exactly."
 *         required
 *         disabled={isFormDisabled}
 *         name="companyName"
 *       />
 *
 *       {/* Description Field */}
 *       <TextInput
 *         label="Business Description"
 *         sublabel="Brief overview of your business"
 *         value={description}
 *         onChange={(e) => setDescription(e.target.value)}
 *         placeholder="Describe your business in a few words..."
 *         size={TextInputSize.MEDIUM}
 *         hintText={`${description.length}/100 characters`}
 *         helpIconHintText="This description will be visible to potential customers and partners."
 *         name="description"
 *         disabled={isFormDisabled}
 *       />
 *
 *       {/* Disabled State Example */}
 *       <TextInput
 *         label="Account ID"
 *         sublabel="System generated"
 *         value="ACC-2024-001"
 *         onChange={() => {}} // No-op for disabled field
 *         placeholder="Generated automatically"
 *         size={TextInputSize.MEDIUM}
 *         disabled={true}
 *         hintText="This field is automatically generated and cannot be edited"
 *         name="accountId"
 *       />
 *
 *       <button 
 *         type="button"
 *         onClick={() => setIsFormDisabled(!isFormDisabled)}
 *         style={{ marginTop: '16px', padding: '8px 16px' }}
 *       >
 *         {isFormDisabled ? 'Enable Form' : 'Disable Form'}
 *       </button>
 *     </form>
 *   );
 * }
 * ```
 */
const toPixels = (value: string | number | undefined): number => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    // Remove 'px' and convert to number
    const numericValue = parseFloat(value.replace("px", ""));
    return isNaN(numericValue) ? 0 : numericValue;
  }

  return 0;
};

const TextInput = ({
  size = TextInputSize.MEDIUM,
  leftSlot,
  rightSlot,
  error = false,
  errorMessage,
  hintText,
  helpIconHintText,
  disabled = false,
  label,
  placeholder = "Enter",
  sublabel,
  value,
  onChange,
  name,
  required = false,
}: InputProps) => {
  const textInputTokens = useComponentToken(
    "TEXT_INPUT"
  ) as TextInputTokensType;
  const leftSlotRef = useRef<HTMLDivElement>(null);
  const rightSlotRef = useRef<HTMLDivElement>(null);

  const [leftSlotWidth, setLeftSlotWidth] = useState(0);
  const [rightSlotWidth, setRightSlotWidth] = useState(0);

  useEffect(() => {
    if (leftSlotRef.current) {
      setLeftSlotWidth(leftSlotRef.current.offsetWidth);
    } else {
      setLeftSlotWidth(0);
    }
    if (rightSlotRef.current) {
      setRightSlotWidth(rightSlotRef.current.offsetWidth);
    } else {
      setRightSlotWidth(0);
    }
  }, [leftSlot, rightSlot]);

  const paddingX = toPixels(textInputTokens.input.paddingX[size]);
  const paddingY = toPixels(textInputTokens.input.paddingY[size]);
  const GAP = toPixels(textInputTokens.input.gap);

  const paddingInlineStart = leftSlot
    ? paddingX + leftSlotWidth + GAP
    : paddingX;
  const paddingInlineEnd = rightSlot
    ? paddingX + rightSlotWidth + GAP
    : paddingX;
  return (
    <Block display="flex" flexDirection="column" gap={8} width={"100%"}>
      <InputLabels
        label={label}
        sublabel={sublabel}
        helpIconHintText={helpIconHintText}
        disabled={disabled}
        name={name}
        required={required}
      />
      <Block position="relative" width={"100%"}>
        {leftSlot && (
          <Block
            ref={leftSlotRef}
            position="absolute"
            top={paddingY}
            left={paddingX}
            bottom={paddingY}
            contentCentered
          >
            {leftSlot}
          </Block>
        )}

        <PrimitiveInput
          required={required}
          value={value}
          type="text"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          width={"100%"}
          disabled={disabled}
          //styling props
          paddingInlineStart={paddingInlineStart}
          paddingInlineEnd={paddingInlineEnd}
          paddingTop={paddingY}
          paddingBottom={paddingY}
          borderRadius={textInputTokens.input.borderRadius}
          boxShadow={textInputTokens.input.boxShadow}
          border={textInputTokens.input.border[error ? "error" : "default"]}
          outline="none"
          _hover={{
            border: textInputTokens.input.border.hover,
          }}
          color={textInputTokens.input.color[disabled ? "disabled" : "default"]}
          _focus={{
            border: textInputTokens.input.border.focus,
            outline: textInputTokens.input.outline.focus,
          }}
          _disabled={{
            backgroundColor: textInputTokens.input.backgroundColor.disabled,
            border: textInputTokens.input.border.disabled,
            cursor: "not-allowed",
          }}
        />
        {rightSlot && (
          <Block
            ref={rightSlotRef}
            position="absolute"
            top={paddingY}
            right={paddingX}
            bottom={paddingY}
            contentCentered
          >
            {rightSlot}
          </Block>
        )}
      </Block>
      <InputFooter
        error={error}
        errorMessage={errorMessage}
        hintText={hintText}
        disabled={disabled}
      />
    </Block>
  );
};

export default TextInput;
