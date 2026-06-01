import { useEffect } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  useEffect(() => {
    // Toast visibility is handled by parent
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 bg-slate-800 text-white px-5 py-3 rounded-lg text-sm shadow-lg z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      {message}
    </div>
  );
}