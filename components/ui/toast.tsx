import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const ToastComponent = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ toast, onClose }, ref) => {
    const variants = {
      success:
        "bg-green-600/10 text-green-600 dark:text-green-400 border-green-600/20",
      error: "bg-red-600/10 text-red-600 dark:text-red-400 border-red-600/20",
      info: "bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-600/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 rounded-lg border p-4 shadow-lg animate-slide-up",
          variants[toast.type]
        )}>
        <p className="flex-1 text-sm font-medium">{toast.message}</p>
        <button
          onClick={() => onClose(toast.id)}
          className="rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
);
ToastComponent.displayName = "Toast";

export { ToastComponent };
