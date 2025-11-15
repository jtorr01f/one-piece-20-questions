import React from "react";

import { CheckboxProps } from "@/src/types/components/checkbox";

import './checkbox.styles.css';

export const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, disabled }) => {
  return (
    <label className="container">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled} />
      <span className={`checkmark ${disabled ? 'disabled' : ''}`}></span>
    </label>
  );
}