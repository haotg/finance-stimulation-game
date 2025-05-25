import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ActionButtons } from "./ActionButtons";

interface RatingGroupProps {
  label: string;
  onSubmit?: () => void;
  onTbd?: () => void;
}

export function RatingGroup({ label, onSubmit, onTbd }: RatingGroupProps) {
  return (
    <div className="flex gap-3 items-end">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="rating">{label}:</Label>
        <div className="pt-2">
          <Slider
            defaultValue={[2]}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className="text-sm text-gray-600 w-6 text-center"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ActionButtons onSubmit={onSubmit} onTbd={onTbd} />
    </div>
  );
}
