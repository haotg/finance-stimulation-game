"use client";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface MediaItem {
  id: string;
  title: string;
  content?: string;
  url?: string;
}

interface MediaDialogProps {
  items: MediaItem[];
  icon: LucideIcon;
  title: string;
  renderContent: (item: MediaItem) => React.ReactNode;
  triggerSize?: "icon" | "default";
  contentClassName?: string;
}

export default function MediaDialog({
  items,
  icon: Icon,
  title,
  renderContent,
  triggerSize = "icon",
  contentClassName = "!max-w-[85%]",
}: MediaDialogProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size={triggerSize}>
            <Icon className="size-5" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                  onClick={() => {
                    setSelectedItem(item);
                    setIsDetailDialogOpen(true);
                  }}
                >
                  <Icon className="size-8" />
                  <span className="text-sm text-center truncate w-full">
                    {item.title}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent
          className={contentClassName}
          aria-describedby="media-detail-dialog-description"
        >
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
          </DialogHeader>
          {selectedItem && renderContent(selectedItem)}
        </DialogContent>
      </Dialog>
    </>
  );
}
