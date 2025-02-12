import React, { useState, useEffect } from 'react';

interface SnackbarProps {
  message: string; 
  type?: 'info' | 'success' | 'error' | 'warning'; 
  duration?: number; 
  onClose?: () => void; 
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  const typeStyles: Record<string, string> = {
    info: 'bg-gray-800 text-white',
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-600 text-black',
  };

  useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed top-8 left-4 right-4 z-50 max-w-md mx-auto pointer-events-auto opacity-0 translate-y-4 transition-all duration-300 ease-in-out transform ${
        visible ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      <div
        className={`p-4 rounded-lg shadow-lg flex items-center justify-between ${typeStyles[type]}`}
      >
        <span>{message}</span>
        <button
          className="text-gray-400 hover:text-gray-200 focus:outline-none"
          onClick={handleClose}
          aria-label="Закрыть"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
