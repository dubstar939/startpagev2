import { IconData } from '../types';

interface IconGridWidgetProps {
  icons: IconData[];
}

export function IconGridWidget({ icons }: IconGridWidgetProps) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:translate-y-[-1px] transition-transform">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-xs font-bold text-white tracking-wide">Shared Company Links</span>
        <button className="text-white/40 hover:text-white hover:bg-white/10 rounded px-1 transition-colors">
          ⋮
        </button>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-3">
        {icons.map((icon) => (
          <a
            key={icon.id}
            href={icon.url}
            className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={(e) => icon.url === '#' && e.preventDefault()}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${icon.bgColor}`}>
              <span className="text-lg font-bold">{icon.content}</span>
            </div>
            <span className="text-[10px] text-white/70 truncate max-w-full">{icon.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}