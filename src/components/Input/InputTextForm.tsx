"use client"

import { useField, useFormikContext } from "formik";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classname?: string;
  type: 'text';
  name: string;
  helptext?: string;
  error?: boolean;
}

export const InputText = ({
  name,
  label,
  classname,
  type,
  helptext,
  error,
  ...props
}: InputTextProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    return setFieldValue(name, value);
  };

  const configUserNameField = {
    ...field,
    onchange: handleChange
  };

  if (meta.error) {
    error = true;
    helptext = meta.error;
  }

  return (
    <label className="flex flex-col font-semiboold w-full px-4 font-semibold">
      <div className="flex justify-center m-2">
        {label}
      </div>
      <input type="text" className="px-2 py-2 rounded-xl" placeholder="Digite seu nome de usuário" {...configUserNameField} {...field} {...props} />
    </label>
  )
}