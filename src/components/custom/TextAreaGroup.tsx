import { Textarea } from "@/components/ui/textarea";
import { ActionButtons } from "./ActionButtons";
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface TextAreaGroupProps {
  label: string;
  placeholder?: string;
  name: string;
  onSubmit?: () => void;
  onTbd?: () => void;
}

export function TextAreaGroup({
  label,
  placeholder,
  name,
  onSubmit,
  onTbd,
}: TextAreaGroupProps) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex gap-3 items-end">
          <div className="grid w-full items-center gap-1.5">
            <FormLabel className="cursor-pointer" htmlFor={name}>
              {label}:
            </FormLabel>
            <FormControl>
              <Textarea
                id={name}
                placeholder={placeholder || label}
                className="text-sm"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </div>
          <ActionButtons onSubmit={onSubmit} onTbd={onTbd} />
        </div>
      )}
    />
  );
}
