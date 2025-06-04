import { FC, ChangeEvent } from 'react';

export type TextInputProps = {
  error?: string;
  label?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  value: string;
  multiline?: boolean;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextInput: FC<TextInputProps> = ({
  error = '',
  label = '',
  name = 'name',
  className = '',
  placeholder = '',
  value = '',
  type = 'text',
  multiline = false,
  rows = 4,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="w-full flex text-sm font-medium text-secondary mb-1">
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={name}
        />
      )}
      <div className="h-2 mt-1">{error && <p className="text-xs text-bred">{error}</p>}</div>
    </div>
  );
};

export default TextInput;
