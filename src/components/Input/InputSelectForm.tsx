"use client"

import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from "../ui/select"
import { Value } from "@radix-ui/react-select";
import { Label } from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";

export interface ItemProps {
  id: number;
  description: string;
}

interface InputSelectFormProps {
  name: string;
  type: 'text';
  error?: boolean;
  helptext?: string;
  className?: string;
  label?: string;
  items: ItemProps[];
  defaultValue?: string;
  helperText?: string;
  onchange?: (value: ItemProps) => void;
  setFieldValue?: (field: string, value: ItemProps, shouldValidate?: boolean | undefined) => void
}


export const InputSelectForm = ({
  name,
  type,
  className,
  error,
  helptext,
  label,
  items,
  defaultValue,
  helperText,
  onchange,
  setFieldValue,
  ...props
}: InputSelectFormProps) => {
  const selectReturn = (data: number) => {
    const item = items.find((i) => i.id === Number(data));

    const value = {
      id: item?.id ?? 0,
      description: item?.description ?? "",
    };

    setFieldValue && setFieldValue(name, value);

    onchange && onchange(value);
  };

  return (
    <div className="flex flex-col">
      <span
        className={twMerge("bg-[#FFF] ml-2 mb-2",)}
      >
        {label}
      </span>


      <Select
        defaultValue={defaultValue}
      >
        <SelectTrigger>
          <SelectValue placeholder={label}></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.id} value={item.id.toString()}>
                <>
                  {item.id} - {item.description}
                </>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && helperText ? (
        <span className="ml-2 text-sm bg-red-400">{helperText}</span>
      ) : null}
    </div>
  );
};