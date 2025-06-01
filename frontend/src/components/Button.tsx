import React, { FC, ReactNode } from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  type = 'button',
  className = '',
  disabled = false,
  onClick = () => {},
  children,
}) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
