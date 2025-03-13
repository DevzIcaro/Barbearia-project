"use client"

export interface ItemProps {
  id: number;
  description: string;
}

interface InputSelectFormProps {
  name: string;
  type: 'text';
  error?: boolean;
  helptext?: string;
  classname?: string;
  label?: string;
  items: ItemProps[];
  defaultValue?: string;
  onchange?: (value: ItemProps) => void;
  setFieldValue?: (field: string, value: ItemProps, shouldValidate?: boolean | undefined) => void
}


export const InputSelectForm = ({
  name,
  type,
  classname,
  error,
  helptext,
  label,
  items,
  defaultValue,
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
    <div className="">

    </div>
  );
}