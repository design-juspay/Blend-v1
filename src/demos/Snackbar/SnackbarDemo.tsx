import Snackbar, {
  addSnackbar,
} from "../../../lib/components/Snackbar/Snackbar";
import { SnackbarVariant } from "../../../lib/components/Snackbar/types";
import Button from "../../../lib/components/Button/Button";
import { ButtonSize, ButtonType } from "../../../lib/components/Button";
import Block from "../../../lib/components/Primitives/Block/Block";
import Text from "../../../lib/components/Text/Text";

const SnackbarDemo = () => {
  const showInfoSnackbar = () => {
    addSnackbar({
      header: "Information",
      description: "This is an informational message for the user.",
      variant: SnackbarVariant.INFO,
    });
  };

  const showSuccessSnackbar = () => {
    addSnackbar({
      header: "Success",
      description: "Your action was completed successfully!",
      variant: SnackbarVariant.SUCCESS,
    });
  };

  const showWarningSnackbar = () => {
    addSnackbar({
      header: "Warning",
      description: "Please be careful with this action.",
      variant: SnackbarVariant.WARNING,
    });
  };

  const showErrorSnackbar = () => {
    addSnackbar({
      header: "Error",
      description: "Something went wrong. Please try again.",
      variant: SnackbarVariant.ERROR,
    });
  };

  const showSnackbarWithAction = () => {
    addSnackbar({
      header: "New Update Available",
      description: "A new version of the application is available.",
      variant: SnackbarVariant.INFO,
      actionButton: {
        label: "Update Now",
        onClick: () => {
          console.log("Update action triggered");
        },
      },
    });
  };

  const showSnackbarWithCustomClose = () => {
    addSnackbar({
      header: "Custom Close Handler",
      description: "This snackbar has a custom close handler.",
      variant: SnackbarVariant.INFO,
      onClose: () => {
        console.log("Custom close handler triggered");
      },
    });
  };

  return (
    <Block padding="24px" display="flex" flexDirection="column" gap="24px">
      {/* Component Description */}
      <Block marginBottom="16px">
        <Text variant="heading.md">Snackbar Component</Text>
        <Text variant="body.md">
          Snackbars provide brief notifications or feedback messages to users.
          They appear temporarily at the top of the screen and can include
          actions.
        </Text>
      </Block>

      {/* Basic Variants */}
      <Block display="flex" flexDirection="column" gap="16px">
        <Text variant="heading.sm">Snackbar Variants</Text>
        <Block display="flex" gap="16px" flexWrap="wrap">
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            onClick={showInfoSnackbar}
            text="Info Snackbar"
          >
            Info Snackbar
          </Button>
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            onClick={showSuccessSnackbar}
            text="Success Snackbar"
          >
            Success Snackbar
          </Button>
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            onClick={showWarningSnackbar}
            text="Warning Snackbar"
          >
            Warning Snackbar
          </Button>
          <Button
            buttonType={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            onClick={showErrorSnackbar}
            text="Error Snackbar"
          >
            Error Snackbar
          </Button>
        </Block>
      </Block>

      {/* Advanced Usage */}
      <Block display="flex" flexDirection="column" gap="16px">
        <Text variant="heading.sm">Advanced Usage</Text>
        <Block display="flex" gap="16px" flexWrap="wrap">
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.MEDIUM}
            onClick={showSnackbarWithAction}
            text="Snackbar with Action"
          >
            Snackbar with Action
          </Button>
          <Button
            buttonType={ButtonType.SECONDARY}
            size={ButtonSize.MEDIUM}
            onClick={showSnackbarWithCustomClose}
            text="Custom Close Handler"
          >
            Custom Close Handler
          </Button>
        </Block>
      </Block>

      {/* Snackbar Component (required for the toasts to appear) */}
      <Snackbar position="top-right" />
    </Block>
  );
};

export default SnackbarDemo;
