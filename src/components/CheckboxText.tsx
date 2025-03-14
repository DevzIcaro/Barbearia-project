"use client"

import { Checkbox } from "@radix-ui/react-checkbox"
import { twMerge } from "tailwind-merge"
import { boolean } from "yup"

interface CheckboxTextProps {
  checked: boolean,
  label: string,
  onClick?: () => string,
  disabled?: boolean
}

export const CheckboxText = ({ checked, label, disabled = false, onClick }: CheckboxTextProps) => {
  return (
    <div className="">
      <Checkbox
        checked={checked}
        onClick={() => onClick && onClick()}
        disabled={disabled}
      />
      <div className="">
        <label
          htmlFor="check1"
          className={twMerge("", className)}
          disabled={disabled}
        >

        </label>
      </div>
    </div>
  )
}