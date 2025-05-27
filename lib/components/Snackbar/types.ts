export type AddToastOptions = {
  header: string;
  description?: string;
  variant: "info" | "success" | "warning" | "error";
  onClose?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
};

export type CustomToastProps = {
  header: string;
  description?: string;
  variant: "info" | "success" | "warning" | "error";
  onClose?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
};
