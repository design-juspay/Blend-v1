"use client";

import type React from "react";
import { toast as sonnerToast, Toaster } from "sonner";
import { Info, X } from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";

// Custom Toast Component
interface CustomToastProps {
  header: string;
  description?: string;
  variant: "info" | "success" | "warning" | "error";
  onClose?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

const CustomToast: React.FC<CustomToastProps> = ({
  header,
  description,
  variant,
  onClose,
  actionButton,
}) => {
  const getIconColor = () => {
    switch (variant) {
      case "info":
        return "#1b85ff";
      case "success":
        return "#00c951";
      case "warning":
        return "#efb100";
      case "error":
        return "#fb2c36";
    }
  };

  return (
    <Block
      backgroundColor={FOUNDATION_THEME.colors["gray"][900]}
      borderRadius={FOUNDATION_THEME.border.radius[8]}
      padding={FOUNDATION_THEME.unit[16]}
      minWidth={400}
      maxWidth={500}
      boxShadow={FOUNDATION_THEME.shadows.lg}
    >
      <Block
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={12}
        marginBottom={8}
      >
        <Block display="flex" alignItems="center" gap={8}>
          <Info size={16} color={getIconColor()} />
          <Text variant="body.md" color={FOUNDATION_THEME.colors["gray"][0]}>
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
        paddingLeft={24}
        display="flex"
        flexDirection="column"
        gap={FOUNDATION_THEME.unit[18]}
      >
        <Text variant="body.md" color={FOUNDATION_THEME.colors["gray"][300]}>
          {description}
        </Text>
        {actionButton && (
          <PrimitiveButton
            backgroundColor="transparent"
            contentCentered
            paddingX={FOUNDATION_THEME.unit[2]}
            color={FOUNDATION_THEME.colors["gray"][0]}
            onClick={actionButton.onClick}
          >
            <Text
              variant="body.md"
              color={FOUNDATION_THEME.colors["gray"][100]}
            >
              {actionButton.label}
            </Text>
          </PrimitiveButton>
        )}
      </Block>
    </Block>
  );
};

// addToast method
type AddToastOptions = {
  header: string;
  description?: string;
  variant: "info" | "success" | "warning" | "error";
  onClose?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export const addToast = (options: AddToastOptions) => {
  return sonnerToast.custom((t) => (
    <CustomToast
      header={options.header}
      description={options.description}
      variant={options.variant}
      onClose={() => {
        sonnerToast.dismiss(t);
        options.onClose?.();
      }}
      actionButton={options.actionButton}
    />
  ));
};

// Export the original toast for other use cases
export const toast = sonnerToast;

// Export the Toaster component
export { Toaster as Snackbar };
