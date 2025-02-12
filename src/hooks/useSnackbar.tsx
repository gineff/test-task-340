import { useState, useRef } from 'react';
import { Snackbar } from '@/components/snackbar';

export type SnackbarType = 'info' | 'success' | 'error' | 'warning';

interface SnackbarParams {
  message: string;
  type: SnackbarType;
  onClose?: () => void;
}

interface SnackbarState {
  isOpen: boolean;
  message: string;
  type: SnackbarType;
}

export const useSnackbar = () => {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    isOpen: false,
    message: '',
    type: 'info',
  });

  const onCloseRef = useRef<(() => void) | undefined>(undefined);

  const showSnackbar = ({ message, type, onClose }: SnackbarParams) => {
    onCloseRef.current = onClose; // Сохраняем ссылку на onClose
    setSnackbarState({ isOpen: true, message, type });
  };

  const closeSnackbar = () => {
    setSnackbarState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));

    onCloseRef.current?.();
    onCloseRef.current = undefined; // Сбрасываем ссылку после вызова
  };

  const SnackbarWrapper = () => {
    const { isOpen, message, type } = snackbarState;

    if (!isOpen) return null;

    return <Snackbar message={message} type={type} onClose={closeSnackbar} />;
  };

  return {
    Snackbar: SnackbarWrapper,
    showSnackbar,
  };
};
