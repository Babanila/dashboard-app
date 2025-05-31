import React, { FC, ReactNode } from 'react';

type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ className = '', children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
