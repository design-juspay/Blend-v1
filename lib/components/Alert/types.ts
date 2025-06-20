import { ReactNode } from "react";

export enum AlertVariant {
  PRIMARY = "primary",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  PURPLE = "purple",
  ORANGE = "orange",
  NEUTRAL = "neutral",
}

export enum AlertActionPlacement {
  BOTTOM = "bottom",
  RIGHT = "right",
}

export enum AlertStyle {
  SUBTLE = "subtle",
  NO_FILL = "noFill",
}

export type AlertAction = {
  label: string;
  onClick: () => void;
}

/**
 * Displays a prominent message to the user, often requiring attention or action.
 * Alerts can convey success, warnings, errors, or general information.
 * They can include a heading, description, actions, and an optional icon.
 * @feature Supports multiple visual variants (primary, success, warning, error, etc.).
 * @feature Customizable styles (subtle, noFill).
 * @feature Optional primary and secondary actions.
 * @feature Optional close button.
 * @example Basic Success Alert
 * ```tsx
 * <Alert
 *   variant={AlertVariant.SUCCESS}
 *   heading="Profile Updated"
 *   description="Your profile information has been successfully updated."
 *   onClose={() => console.log("Alert closed")}
 * />
 * ```
 * @example Error Alert with Actions
 * ```tsx
 * <Alert
 *   variant={AlertVariant.ERROR}
 *   heading="Submission Failed"
 *   description="We couldn't save your changes. Please try again."
 *   primaryAction={{ label: "Retry", onClick: () => console.log("Retry clicked") }}
 *   secondaryAction={{ label: "Cancel", onClick: () => console.log("Cancel clicked") }}
 * />
 * ```
 */
export type AlertProps = {
  /** The main title or heading for the alert.
   * @propCategory Content
   */
  heading: string;
  /** A more detailed message or description for the alert.
   * @propCategory Content
   */
  description: string;
  /** Determines the color scheme and icon used for the alert, indicating its nature.
   * @propCategory Appearance
   */
  variant?: AlertVariant;
  /** Modifies the visual presentation of the alert (e.g., subtle background).
   * @propCategory Appearance
   */
  style?: AlertStyle;
  /** Defines the primary action button for the alert.
   * @propCategory Actions
   */
  primaryAction?: AlertAction;
  /** Defines the secondary action button for the alert.
   * @propCategory Actions
   */
  secondaryAction?: AlertAction;
  /** Callback function triggered when the alert's close button (if available) is clicked.
   * @propCategory Behavior
   */
  onClose?: () => void;
  /** Custom icon to display in the alert, overriding the default icon for the variant.
   * @propCategory Appearance
   */
  icon?: ReactNode;
  /** Specifies the placement of action buttons within the alert.
   * @propCategory Layout
   */
  actionPlacement?: AlertActionPlacement;
}
