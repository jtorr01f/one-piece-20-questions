'use client';
import { FC } from "react";


import './button.styles.css';
import { ButtonProps } from "@/types/components/button";

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
