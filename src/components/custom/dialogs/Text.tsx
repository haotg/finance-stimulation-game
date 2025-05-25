"use client";
import { FileText } from "lucide-react";
import MediaDialog from "./MediaDialog";

interface TextItem {
  id: string;
  title: string;
  content: string;
}

interface TextDialogProps {
  texts: TextItem[];
}

export default function TextDialog({ texts }: TextDialogProps) {
  return (
    <MediaDialog
      items={texts}
      icon={FileText}
      title="Documents"
      contentClassName="!max-w-[90%] overflow-y-auto max-h-[80vh]"
      renderContent={(item) => (
        <div className="overflow-y-auto prose prose-sm max-w-none">
          {item.content}
        </div>
      )}
    />
  );
}
