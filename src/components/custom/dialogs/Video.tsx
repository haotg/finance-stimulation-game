"use client";
import { FileVideo } from "lucide-react";
import MediaDialog from "./MediaDialog";
import ReactPlayer from "react-player";

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

interface VideoDialogProps {
  videos: VideoItem[];
}

export default function VideoDialog({ videos }: VideoDialogProps) {
  return (
    <MediaDialog
      items={videos}
      icon={FileVideo}
      title="Videos"
      renderContent={(item) => (
        <div className="aspect-video w-full relative">
          <ReactPlayer
            url={item.url}
            controls={true}
            width="100%"
            height="100%"
            playbackRate={2.0}
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            }
          />
        </div>
      )}
    />
  );
}
