import StageInfo from "@/components/custom/StageInfo";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-between items-start">
      <StageInfo />
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Hao Truong</span>
        <Button>Logout</Button>
      </div>
    </div>
  );
}
