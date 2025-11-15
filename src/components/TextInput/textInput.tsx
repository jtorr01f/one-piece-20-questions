'use client';

import React from 'react';

import { TextInputProps } from '@/types/components/textInput';

import './textInput.css';

const TextInput: React.FC<TextInputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className={`text-input-wrapper ${className}`}>
      {label && <label className='text-input-label'>{label}</label>}
      <input className='text-input' {...props} />
      {error && <span className='text-input-error'>{error}</span>}
    </div>
  );
};

export default TextInput;