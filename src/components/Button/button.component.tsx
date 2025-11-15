'use client';
import { FC } from "react";

import { ButtonProps } from "@/src/types/components/button";

import './button.styles.css';

export const Button: FC<ButtonProps> = ({ className, label, buttonType = 'primary', disabled, ...props }) => {
  return (
    <button 
      className={`button ${className} ${buttonType} ${disabled ? 'disabled' : ''}`} 
      disabled={disabled} 
      {...props}>
      {label}
    </button>
  );
}; 
