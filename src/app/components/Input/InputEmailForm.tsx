"use client";

import { useField, useFormikContext } from "formik";
import { ChangeEvent, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge"

interface InputEmailFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  helpText?: string;
  error?: boolean;
  label?: string;
  disabled?: boolean;
}

export const InputEmailForm = ({
  name,
  helpText,
  error,
  label,
  disabled,
  ...props
}: InputEmailFormProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    return setFieldValue(name, value);
  };

  const configEmailField = {
    ...field,
    onChange: handleChange
  };

  if (meta.error) {
    error = true;
    helpText = meta.error;
  }

  return (
    <label className={twMerge("")}>
      <input type="text" className="" placeholder="Digite seu E-mail" {...configEmailField}>
        email
      </input>
    </label>
  );
};

