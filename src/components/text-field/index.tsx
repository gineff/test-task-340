import React from 'react';

interface TextFieldProps
  extends Omit<React.ComponentProps<'input' | 'textarea'>, 'onChange' | 'onBlur'> {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  errorMessage?: string;
  parentTheme?: 'light' | 'dark';
  render?: () => React.ReactNode;
  min?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  errorMessage,
  parentTheme = 'light',
  render,
  min,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const isLight = parentTheme === 'light';

  const commonProps = {
    id: name,
    placeholder,
    value,
    onChange: handleChange,
    className: `block w-full px-3 py-2 border ${
      errorMessage ? 'border-red-500' : isLight ? 'border-gray-300' : 'border-gray-500'
    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 ${
      isLight ? 'focus:border-indigo-500' : 'focus:ring-blue-300 bg-gray-100'
    } sm:text-sm`,
  };

  return (
    <div className={errorMessage ? '' : 'mb-[1.5rem]'}>
      <label
        htmlFor={name}
        className={`block ${isLight ? 'text-gray-700' : 'text-white'} text-sm font-medium  mb-1`}
      >
        {label}
      </label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea {...commonProps} />
        ) : (
          <input {...commonProps} type={type} {...(min !== undefined ? { min } : {})} />
        )}
        {render && render()}
      </div>
      {errorMessage && <p className="mt-2 text-xs text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default TextField;
