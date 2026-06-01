import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!show) return null;

  return (
    <div className="fixed bottom-8 right-8 bg-slate-800 text-white px-5 py-3 rounded-lg text-sm shadow-lg z-50 transition-all duration-300">
      {message}
    </div>
  );
}