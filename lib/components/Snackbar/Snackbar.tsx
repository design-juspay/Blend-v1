"use client";

import type React from "react";
import { toast as sonnerToast, Toaster as Snackbar } from "sonner";
import { Info, X } from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text, { VariantType } from "../Text/Text";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { AddToastOptions, CustomToastProps, SnackbarVariant } from "./types";
import snackbarTokens from "./snackbar.tokens";

const StyledToast: React.FC<CustomToastProps> = ({
  header,
  description,
  variant,
  onClose,
  actionButton,
}) => {
  const getIconColor = () => {
    switch (variant) {
      case "info":
        return snackbarTokens.icon.color.info;
      case "success":
        return snackbarTokens.icon.color.success;
      case "warning":
        return snackbarTokens.icon.color.warning;
      case "error":
        return snackbarTokens.icon.color.error;
    }
  };

  return (
    <Block
      backgroundColor={snackbarTokens.container.backgroundColor}
      borderRadius={snackbarTokens.container.borderRadius}
      padding={snackbarTokens.container.padding}
      minWidth={snackbarTokens.container.minWidth}
      maxWidth={snackbarTokens.container.maxWidth}
      boxShadow={snackbarTokens.container.boxShadow}
    >
      <Block
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={snackbarTokens.header.layout.gap}
        marginBottom={snackbarTokens.header.layout.marginBottom}
      >
        <Block
          display="flex"
          alignItems="center"
          gap={snackbarTokens.header.layout.iconGap}
        >
          <Info size={16} color={getIconColor()} />
          <Text
            variant={snackbarTokens.header.text.variant as VariantType}
            color={snackbarTokens.header.text.color}
          >
            {header}
          </Text>
        </Block>
        <PrimitiveButton
          backgroundColor="transparent"
          contentCentered
          onClick={onClose}
        >
          <X size={16} color={FOUNDATION_THEME.colors["gray"][0]} />
        </PrimitiveButton>
      </Block>

      <Block
        paddingLeft={snackbarTokens.description.layout.paddingLeft}
        display="flex"
        flexDirection="column"
        gap={snackbarTokens.description.layout.gap}
      >
        <Text
          variant={snackbarTokens.description.text.variant}
          color={snackbarTokens.description.text.color}
        >
          {description}
        </Text>
        {actionButton && (
          <PrimitiveButton
            backgroundColor="transparent"
            contentCentered
            paddingX={snackbarTokens.actionButton.layout.paddingX}
            color={snackbarTokens.actionButton.text.color}
            onClick={actionButton.onClick}
          >
            <Text
              variant={snackbarTokens.actionButton.text.variant}
              color={snackbarTokens.actionButton.text.color}
            >
              {actionButton.label}
            </Text>
          </PrimitiveButton>
        )}
      </Block>
    </Block>
  );
};

/**
 * @description Displays toast notifications with customizable content, variants, and actions.
 * Provides a simple API to show temporary messages to users with different visual styles.
 * @feature Multiple variants for different message types (info, success, warning, error)
 * @feature Customizable header and description content
 * @feature Optional action button for user interaction
 * @feature Automatic dismiss functionality with manual override option
 * @feature Consistent visual design with theme tokens
 * @feature Built on Sonner toast library for reliable behavior
 * @feature Close button for manual dismissal
 * @example Basic Usage
 * ```tsx
 * import { addSnackbar, SnackbarVariant } from "blend-v1";
 * 
 * function BasicSnackbarExample() {
 *   const showSimpleToast = () => {
 *     addSnackbar({
 *       header: "Settings saved",
 *       description: "Your preferences have been updated successfully."
 *     });
 *   };
 * 
 *   const showSuccessToast = () => {
 *     addSnackbar({
 *       header: "Upload complete",
 *       description: "Your file has been uploaded and processed.",
 *       variant: SnackbarVariant.SUCCESS
 *     });
 *   };
 * 
 *   return (
 *     <div className="space-y-4">
 *       <button onClick={showSimpleToast} className="px-4 py-2 bg-blue-500 text-white rounded">
 *         Show Simple Toast
 *       </button>
 *       <button onClick={showSuccessToast} className="px-4 py-2 bg-green-500 text-white rounded">
 *         Show Success Toast
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 * @example Different Variants and Close Handling
 * ```tsx
 * import { addSnackbar, SnackbarVariant } from "blend-v1";
 * 
 * function VariantSnackbarExample() {
 *   const showInfoToast = () => {
 *     addSnackbar({
 *       header: "New feature available",
 *       description: "Check out the updated dashboard with new analytics.",
 *       variant: SnackbarVariant.INFO,
 *       onClose: () => console.log("Info toast closed")
 *     });
 *   };
 * 
 *   const showWarningToast = () => {
 *     addSnackbar({
 *       header: "Storage almost full",
 *       description: "You have used 90% of your storage space. Consider upgrading your plan.",
 *       variant: SnackbarVariant.WARNING,
 *       onClose: () => console.log("Warning acknowledged")
 *     });
 *   };
 * 
 *   const showErrorToast = () => {
 *     addSnackbar({
 *       header: "Connection failed",
 *       description: "Unable to connect to the server. Please check your internet connection and try again.",
 *       variant: SnackbarVariant.ERROR,
 *       onClose: () => {
 *         console.log("Error toast dismissed");
 *         // Could trigger retry logic here
 *       }
 *     });
 *   };
 * 
 *   return (
 *     <div className="grid grid-cols-3 gap-4">
 *       <button onClick={showInfoToast} className="px-4 py-2 bg-blue-500 text-white rounded">
 *         Show Info
 *       </button>
 *       <button onClick={showWarningToast} className="px-4 py-2 bg-yellow-500 text-white rounded">
 *         Show Warning
 *       </button>
 *       <button onClick={showErrorToast} className="px-4 py-2 bg-red-500 text-white rounded">
 *         Show Error
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with Action Buttons
 * ```tsx
 * import { addSnackbar, SnackbarVariant } from "blend-v1";
 * import { useState } from "react";
 * 
 * function AdvancedSnackbarExample() {
 *   const [uploadProgress, setUploadProgress] = useState(0);
 *   const [isUploading, setIsUploading] = useState(false);
 * 
 *   const startUpload = () => {
 *     setIsUploading(true);
 *     setUploadProgress(0);
 * 
 *     // Simulate upload progress
 *     const interval = setInterval(() => {
 *       setUploadProgress(prev => {
 *         if (prev >= 100) {
 *           clearInterval(interval);
 *           setIsUploading(false);
 *           showUploadComplete();
 *           return 100;
 *         }
 *         return prev + 10;
 *       });
 *     }, 200);
 *   };
 * 
 *   const showUploadComplete = () => {
 *     addSnackbar({
 *       header: "Upload successful",
 *       description: "Your document has been uploaded and is ready for review.",
 *       variant: SnackbarVariant.SUCCESS,
 *       actionButton: {
 *         label: "View Document",
 *         onClick: () => {
 *           console.log("Navigating to document");
 *           // Navigate to document or open modal
 *         }
 *       },
 *       onClose: () => console.log("Upload notification dismissed")
 *     });
 *   };
 * 
 *   const showDeleteConfirmation = () => {
 *     addSnackbar({
 *       header: "Item deleted",
 *       description: "The item has been moved to trash. You can restore it within 30 days.",
 *       variant: SnackbarVariant.SUCCESS,
 *       actionButton: {
 *         label: "Undo",
 *         onClick: () => {
 *           console.log("Undoing delete action");
 *           addSnackbar({
 *             header: "Item restored",
 *             description: "The item has been restored successfully.",
 *             variant: SnackbarVariant.INFO
 *           });
 *         }
 *       }
 *     });
 *   };
 * 
 *   const showNetworkError = () => {
 *     addSnackbar({
 *       header: "Network error",
 *       description: "Failed to save changes. Please check your connection and try again.",
 *       variant: SnackbarVariant.ERROR,
 *       actionButton: {
 *         label: "Retry",
 *         onClick: () => {
 *           console.log("Retrying save operation");
 *           // Retry the failed operation
 *           addSnackbar({
 *             header: "Retrying...",
 *             description: "Attempting to save your changes again.",
 *             variant: SnackbarVariant.INFO
 *           });
 *         }
 *       },
 *       onClose: () => console.log("Network error acknowledged")
 *     });
 *   };
 * 
 *   const showFormValidation = () => {
 *     addSnackbar({
 *       header: "Form validation error",
 *       description: "Please fill in all required fields before submitting.",
 *       variant: SnackbarVariant.WARNING,
 *       actionButton: {
 *         label: "Review Form",
 *         onClick: () => {
 *           console.log("Scrolling to first error");
 *           // Scroll to first validation error
 *         }
 *       }
 *     });
 *   };
 * 
 *   return (
 *     <div className="space-y-6">
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">File Upload Example</h3>
 *         <button 
 *           onClick={startUpload} 
 *           disabled={isUploading}
 *           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
 *         >
 *           {isUploading ? `Uploading... ${uploadProgress}%` : "Start Upload"}
 *         </button>
 *       </div>
 * 
 *       <div className="space-y-2">
 *         <h3 className="text-lg font-semibold">Action Button Examples</h3>
 *         <div className="grid grid-cols-2 gap-4">
 *           <button onClick={showDeleteConfirmation} className="px-4 py-2 bg-red-500 text-white rounded">
 *             Delete with Undo
 *           </button>
 *           <button onClick={showNetworkError} className="px-4 py-2 bg-gray-500 text-white rounded">
 *             Network Error with Retry
 *           </button>
 *           <button onClick={showFormValidation} className="px-4 py-2 bg-orange-500 text-white rounded">
 *             Form Validation Error
 *           </button>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export const addSnackbar = ({
  header,
  description,
  variant = SnackbarVariant.INFO,
  onClose,
  actionButton,
}: AddToastOptions) => {
  return sonnerToast.custom((t) => (
    <StyledToast
      header={header}
      description={description}
      variant={variant}
      onClose={() => {
        sonnerToast.dismiss(t);
        onClose?.();
      }}
      actionButton={actionButton}
    />
  ));
};

// Export the Toaster component
export default Snackbar;
