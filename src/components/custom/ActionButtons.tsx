import { Button } from "@/components/ui/button";

export interface ActionButtonsProps {
  onSubmit?: () => void;
  onTbd?: () => void;
}

export function ActionButtons({ onSubmit, onTbd }: ActionButtonsProps) {
  return (
    <div className="flex gap-2 shrink-0">
      <Button variant="outline" onClick={onTbd}>
        TBD
      </Button>
      <Button onClick={onSubmit}>OK</Button>
    </div>
  );
}
