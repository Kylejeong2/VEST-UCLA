import { UploadButton as UTUploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";

interface UploadButtonProps {
  endpoint?: "imageUploader" | "resumeUploader";
  onUploadComplete: (url: string) => void;
  onUploadError: (error: Error) => void;
}

export function UploadButton({ endpoint = "imageUploader", onUploadComplete, onUploadError }: UploadButtonProps) {
  return (
    <UTUploadButton<OurFileRouter, typeof endpoint>
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) {
          onUploadComplete(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        onUploadError(error);
      }}
      appearance={{
        button: "bg-zinc-800 text-white hover:bg-zinc-700 transition-colors",
        allowedContent: "text-zinc-400 text-sm",
      }}
    />
  );
} 