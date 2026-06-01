import { IconData } from '../types';

interface IconGridWidgetProps {
  data: IconData[];
}

export function IconGridWidget({ data }: IconGridWidgetProps) {
  return (
    <div className="grid grid-cols-4 gap-1.5 p-2.5">
      {data.map((icon) => (
        <a
          key={icon.id}
          href={icon.url || '#'}
          className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg cursor-pointer no-underline transition-colors duration-150 hover:bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white ${icon.bgColor}`}
          >
            {icon.content}
          </div>
          <span className="text-xs text-white/70 text-center truncate max-w-full">
            {icon.label}
          </span>
        </a>
      ))}
    </div>
  );
}