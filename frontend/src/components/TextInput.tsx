import React, { ChangeEvent } from 'react';

type TextInputProps = {
  className?: string;
  placeholder?: string;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  className = '',
  placeholder = '',
  value = '',
  type,
  onChange,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
