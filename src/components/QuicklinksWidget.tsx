import { QuicklinkData } from '../types';

interface QuicklinksWidgetProps {
  data: QuicklinkData[];
}

export function QuicklinksWidget({ data }: QuicklinksWidgetProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5 p-3">
      {data.map((link) => (
        <a
          key={link.id}
          href={link.url || '#'}
          className="flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer no-underline transition-colors duration-150 hover:bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`w-12 h-12 rounded-md flex items-center justify-center text-xl font-bold text-white ${link.bgColor}`}
          >
            {link.content}
          </div>
          <span className="text-xs text-white/70 text-center">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}