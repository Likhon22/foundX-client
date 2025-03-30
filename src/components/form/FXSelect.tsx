import { Select, SelectItem } from "@heroui/select";

interface IProps {
  label: string;
  placeholder: string;
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({ options, label, placeholder }: IProps) => {
  return (
    <Select
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
