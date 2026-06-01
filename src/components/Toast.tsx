import { useEffect, useRef } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-8 right-8 bg-slate-800 text-white px-5 py-3 rounded-lg text-sm shadow-lg z-50 transition-all duration-300"
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
}