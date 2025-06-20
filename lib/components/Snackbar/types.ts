/**
 * @propCategory Enum
 * @description Defines the visual variant or type of the Snackbar/Toast notification.
 */
export enum SnackbarVariant {
  /** Informational message. */
  INFO = "info",
  /** Success message. */
  SUCCESS = "success",
  /** Warning message. */
  WARNING = "warning",
  /** Error message. */
  ERROR = "error",
}

/**
 * @description Options for adding a new toast notification via a `useSnackbar` hook or similar mechanism.
 * This type defines the content and behavior of a single toast.
 * @feature Customizable header and description.
 * @feature Different visual variants (info, success, warning, error).
 * @feature Optional close callback and action button.
 * @example
 * ```tsx
 * // Assuming a useSnackbar hook is available:
 * // const { addToast } = useSnackbar();
 *
 * // addToast({
 * //   header: "Update Successful",
 * //   description: "Your profile has been saved.",
 * //   variant: SnackbarVariant.SUCCESS,
 * //   actionButton: {
 * //     label: "View Profile",
 * //     onClick: () => console.log("Navigate to profile"),
 * //   }
 * // });
 * ```
 */
export type AddToastOptions = {
  /**
   * @propCategory Required
   * @description The main header text for the toast notification.
   */
  header: string;
  /**
   * @propCategory Content
   * @description Optional descriptive text displayed below the header.
   */
  description?: string;
  /**
   * @propCategory Appearance
   * @description The visual variant of the toast.
   * @default SnackbarVariant.INFO
   */
  variant?: SnackbarVariant;
  /**
   * @propCategory Event Handler
   * @description Optional callback function invoked when the toast is closed by the user or automatically.
   */
  onClose?: () => void;
  /**
   * @propCategory Actions
   * @description Optional action button to display on the toast.
   */
  actionButton?: {
    /** The label for the action button. */
    label: string;
    /** Callback function invoked when the action button is clicked. */
    onClick: () => void;
  };
};

/**
 * @description Props for a custom toast component, likely used internally by the Snackbar system
 * to render individual toast notifications. This is similar to `AddToastOptions` but might be used
 * when rendering a toast that's already been added.
 */
export type CustomToastProps = {
  /**
   * @propCategory Required
   * @description The main header text for the toast notification.
   */
  header: string;
  /**
   * @propCategory Content
   * @description Optional descriptive text displayed below the header.
   */
  description?: string;
  /**
   * @propCategory Required
   * @description The visual variant of the toast.
   */
  variant: SnackbarVariant;
  /**
   * @propCategory Event Handler
   * @description Optional callback function invoked when the toast is closed.
   */
  onClose?: () => void;
  /**
   * @propCategory Actions
   * @description Optional action button to display on the toast.
   */
  actionButton?: {
    /** The label for the action button. */
    label: string;
    /** Callback function invoked when the action button is clicked. */
    onClick: () => void;
  };
};
