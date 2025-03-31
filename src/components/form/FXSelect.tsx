import { Select, SelectItem } from "@heroui/select";
import { useFormContext } from "react-hook-form";

interface IProps {
  label: string;
  placeholder: string;
  name: string;
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({ options, label, placeholder, name }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Select
      {...register(name)}
      className="max-w-xs"
      label={label}
      placeholder={placeholder}
      selectionMode="multiple"
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
