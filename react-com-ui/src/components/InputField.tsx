import React, { useState } from 'react';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email';
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = '',
  errorMessage = '',
  type = 'text',
  required = false,
}) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isTouched) setIsTouched(true);
  };

  const handleClear = () => {
    setValue('');
    setIsTouched(true);
  };

  const showError = isTouched && errorMessage && !value;

  return (
    <div className="w-full max-w-md mx-auto centered-container">
      {/* Label */}
      <div className="text-center mb-2">
        <span className="text-base font-medium text-gray-900">
          {label}
        </span>
      </div>

      {/* Error Message */}
      {showError && (
        <div className="text-center mb-3">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      {/* Input Container */}
      <div className="relative mb-6 w-full">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={() => setIsTouched(true)}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 border-2 border-gray-300 rounded-lg
            text-center text-gray-900 placeholder-gray-500 text-base
            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            transition-all duration-200 bg-white input-center
            ${showError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}
          `}
        />
        
        {/* Clear Button (X symbol) */}
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2
                     text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Clear input"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Current Value Display */}
      <div className="text-center w-full">
        <p className="text-sm text-gray-700">
          <strong>Current value:</strong> {value || 'None'}
        </p>
      </div>
    </div>
  );
};

export default InputField;