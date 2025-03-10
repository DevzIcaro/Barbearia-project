"use client"

import { useField, useFormikContext } from "formik";
import { ChangeEvent, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputPasswordFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  helpText?: String;
  error?: boolean;
  label?: string;
  disabled?: boolean;
}

export const InputPasswordForm = ({
  name,
  helpText,
  error,
  label,
  disabled,
  ...props
}: InputPasswordFormProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    return setFieldValue(name, value);
  };

  const configPasswordField = {
    ...field,
    onchange: handleChange
  };

  if (meta.error) {
    error = true;
    helpText = meta.error;
  }

  return (
    <label className={twMerge("flex flex-col w-full px-4 font-semibold")}>
      Senha:
      <input type="password" {...configPasswordField} className="px-4 py-2 rounded-xl" />
    </label>
  )
}