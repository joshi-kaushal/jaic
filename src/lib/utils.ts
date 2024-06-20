import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(bytes: number): string {
  const KB = 1024;
  const MB = KB * 1024;

  if (bytes < MB) {
    const kbSize = bytes / KB;
    return kbSize % 1 === 0 ? `${kbSize}KB` : `${kbSize.toFixed(2)}KB`;
  } else {
    const mbSize = bytes / MB;
    return mbSize % 1 === 0 ? `${mbSize}MB` : `${mbSize.toFixed(2)}MB`;
  }
}
