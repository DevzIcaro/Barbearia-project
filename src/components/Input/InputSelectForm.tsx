"use client"

import React from "react";
import { Value } from "@radix-ui/react-select";
import { Label } from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { cn } from "@/app/lib/utils";

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
  valeu?: string;
  disabled: boolean;
  items: ItemProps[];
  defaultValue?: string;
  helperText?: string;
  onChange?: (value: ItemProps) => void;
  setFieldValue?: (field: string, value: ItemProps, shouldValidate?: boolean | undefined) => void
}


export const InputSelectForm = ({
  name,
  type,
  className,
  error = false,
  helptext,
  label = "Selecione o Tipo de Trabalho",
  valeu,
  items,
  defaultValue,
  helperText = "",
  disabled = false,
  onChange,
  setFieldValue,
  ...props
}: InputSelectFormProps) => {
  const selectReturn = (data: number) => {
    const item = items.find((i) => i.id === Number(data));

    const value: ItemProps = {
      id: item?.id ?? 0,
      description: item?.description ?? "",
    };

    setFieldValue && setFieldValue(name, value);

    onChange && onChange(value);
  };

  return (
    <div className="flex flex-col">
      <Select
        value={valeu}
        onValueChange={(value) => selectReturn(value)}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          className={cn("w-full text-sm hover:border-black focus:border-2 ")}
          disabled={disabled}
        >
          <SelectValue className="px-3" placeholder={label}></SelectValue>
        </SelectTrigger>
        <SelectContent side="bottom">
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
