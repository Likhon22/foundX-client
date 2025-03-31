import { DatePicker } from "@heroui/date-picker";
import { Controller } from "react-hook-form";

const FXDatePicker = ({ label, name }: { label: string; name: string }) => {
  

  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker label={label} {...fields} />
      )}
    />
  );
};

export default FXDatePicker;
