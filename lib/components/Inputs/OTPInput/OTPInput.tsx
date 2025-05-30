import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import styled from "styled-components";
import PrimitiveText from "../../Primitives/PrimitiveText/PrimitiveText";

// Types
// Types
export interface OTPInputProps {
  length?: number
  value?: string
  onChange?: (value: string) => void
  error?: boolean
  errorMessage?: string
  hintText?: string
  label?: string
  sublabel?: string
  disabled?: boolean
  required?: boolean
  name?: string
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const InputBox = styled.input<{ $error?: boolean; $filled?: boolean }>`
width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$error ? "#e7000b" : props.$filled ? "#2b7fff" : "#d9d9d9")};
  background-color: ${(props) => (props.disabled ? "#f5f7fa" : "#ffffff")};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.disabled ? "#99a0ae" : "#2b303b")};
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${(props) => (props.$error ? "#e7000b" : "#2b7fff")};
    box-shadow: 0 0 0 3px ${(props) => (props.$error ? "#e7000b20" : "#2b7fff20")};
  }

  &:hover:not(:disabled) {
    border-color: ${(props) => (props.$error ? "#e7000b" : "#717784")};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f5f7fa;
    border-color: #d9d9d9;
  }

  /* Hide number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const RequiredIndicator = styled.span`
  color: #e7000b;
`

const HelpIcon = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #99a0ae;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: help;
`

// Component
const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value = "",
  onChange,
  error = false,
  errorMessage = "This is an error",
  hintText = "This is a hint text to help user.",
  label,
  sublabel,
  disabled = false,
  required = false,
  name,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""))
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Initialize OTP from value prop
  useEffect(() => {
    if (value) {
      const otpArray = value.split("").slice(0, length)
      const paddedOtp = [...otpArray, ...new Array(length - otpArray.length).fill("")]
      setOtp(paddedOtp)
    }
  }, [value, length])

  // Handle input change
  const handleChange = (index: number, val: string) => {
    if (disabled) return

    // Only allow single digit
    const newVal = val.slice(-1)

    // Only allow numbers
    if (newVal && !/^\d$/.test(newVal)) return

    const newOtp = [...otp]
    newOtp[index] = newVal
    setOtp(newOtp)

    // Call onChange with complete OTP
    onChange?.(newOtp.join(""))

    // Move to next input if value entered
    if (newVal && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle key down
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return

    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus()
      } else {
        // Clear current input
        const newOtp = [...otp]
        newOtp[index] = ""
        setOtp(newOtp)
        onChange?.(newOtp.join(""))
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return

    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length)
    const otpArray = pastedData.split("")
    const newOtp = [...otpArray, ...new Array(length - otpArray.length).fill("")]
    setOtp(newOtp)
    onChange?.(newOtp.join(""))

    // Focus the next empty input or last input
    const nextIndex = Math.min(otpArray.length, length - 1)
    inputRefs.current[nextIndex]?.focus()
  }

  return (
    <Container>
      {/* Label */}
      {label && (
        <LabelContainer>
          <PrimitiveText as="label" fontSize="14px" fontWeight={500} color="#2b303b" htmlFor={name}>
            {label}
            {required && <RequiredIndicator>*</RequiredIndicator>}
          </PrimitiveText>
          {sublabel && (
            <PrimitiveText fontSize="12px" color="#99a0ae">
              ({sublabel})
            </PrimitiveText>
          )}
          <HelpIcon title="Help information">?</HelpIcon>
        </LabelContainer>
      )}

      {/* OTP Input Boxes */}
      <InputContainer>
        {otp.map((digit, index) => (
          <InputBox
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(-1)}
            onPaste={index === 0 ? handlePaste : undefined}
            disabled={disabled}
            $error={error}
            $filled={!!digit}
            name={name ? `${name}-${index}` : undefined}
          />
        ))}
      </InputContainer>

      {/* Footer */}
      {(error && errorMessage) || hintText ? (
        <PrimitiveText fontSize="12px" color={error ? "#e7000b" : "#99a0ae"}>
          {error && errorMessage ? errorMessage : hintText}
        </PrimitiveText>
      ) : null}
    </Container>
  )
}

export default OTPInput