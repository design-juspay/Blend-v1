import { useState, useEffect } from 'react';
import { SnackbarType, SnackbarPosition } from './types';
import snackbarTokens from './snackbar.tokens';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export const getSnackbarStyles = (type: SnackbarType) => {
  return snackbarTokens.type[type];
};

export const getPositionStyles = (position: SnackbarPosition) => {
  return snackbarTokens.position[position];
};

export const getBaseStyles = () => {
  return snackbarTokens.base;
};

export const getLayoutStyles = () => {
  return snackbarTokens.layout;
};

export const getIconComponentType = (type: SnackbarType) => {
  switch (type) {
    case 'info':
      return Info;
    case 'warning':
      return AlertCircle;
    case 'error':
      return XCircle;
    case 'success':
      return CheckCircle;
    default:
      return null;
  }
};

export const useSnackbarLogic = (
  autoClose: boolean,
  onClose?: () => void
) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoClose]);

  return { visible, handleClose };
}; 