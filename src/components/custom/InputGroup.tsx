import { Input } from "@/components/ui/input";
import { ActionButtons } from "./ActionButtons";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface InputGroupProps {
  label: string;
  name: string;
  placeholder?: string;
  onSubmit?: () => void;
  onTbd?: () => void;
}

export function InputGroup({
  label,
  name,
  placeholder,
  onSubmit,
  onTbd,
}: InputGroupProps) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex gap-3 items-end">
          <FormItem className="grid w-full items-center gap-1.5">
            <FormLabel className="cursor-pointer" htmlFor={name}>
              {label}:
            </FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder={placeholder || label}
                className="text-sm"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <ActionButtons onSubmit={onSubmit} onTbd={onTbd} />
        </div>
      )}
    />
  );
}
