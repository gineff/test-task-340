import { FC } from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      className="absolute top-4 right-4 text-white text-4xl hover:text-gray-500 focus:outline-none"
      aria-label="Закрыть"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
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
  );
};
