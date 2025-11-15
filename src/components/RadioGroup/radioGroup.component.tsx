import { FC } from "react";

import { RadioOptions } from "@/src/types/components/radioGroup";

import './radioGroup.styles.css';

export const RadioGroupComponent: FC<RadioOptions> = ({ options, selectedValue, setSelectedValue }) => {
  return (
    <div className="tabs">
      {options.map((option) => (
        <div key={option.id} className="tab-group" >
          <input checked={selectedValue === option.value} onChange={() => setSelectedValue(option.value)} id={option.id} name="tab" value={option.value} type="radio" />
          <label htmlFor={option.id}>
            <span>{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}