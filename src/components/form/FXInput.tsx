"use client";
import { Input } from "@heroui/input";

import { useFormContext } from "react-hook-form";

type Props = {
  placeholder: string;
  type: string;
  id: string;
  name: string;
  required: boolean;
};

const FXInput = ({ placeholder, type, id, name, required = true }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      variant="bordered"
      size="md"
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      required={required}
    />
  );
};

export default FXInput;
