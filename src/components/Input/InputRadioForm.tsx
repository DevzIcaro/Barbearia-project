"use client"

import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";



interface RadioOptions {
  label: string;
  value: string;
}

interface RadioSelectProps {
  options: RadioOptions[],
  defaultValue?: string,
  checkbox?: boolean,
  className?: string,
  setValues?: (value: string) => void;
}

export const RadioSelect = ({
  options,
  className,
  checkbox,
  defaultValue,
  setValues,
}: RadioSelectProps) => {
  const handleValueChange = (ev: string) => {
    setValues ? setValues(ev) : '';
  };

  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={(ev) => handleValueChange(ev)}
    >
      <div className={twMerge("flex flex-col flex-row gap-5", className)}>
        {options.map((option) => (
          <label key={option.value} className="flex flex-row">
            <RadioGroupItem value={option.value} id={option.value} className="flex flex-col" />
            {checkbox && (
              <input type="checkbox" name="checkbox" className="p-1 focus:border-2 focus:bg-gray-600" />
            )}
            <span className="pl-1 text-base font-medium leading-none cursor-pointer">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </RadioGroup>
  );
}