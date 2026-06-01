import { QuicklinkData } from '../types';

interface QuicklinksWidgetProps {
  quicklinks: QuicklinkData[];
}

export function QuicklinksWidget({ quicklinks }: QuicklinksWidgetProps) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:translate-y-[-1px] transition-transform">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-xs font-bold text-white tracking-wide">Quicklinks</span>
        <button className="text-white/40 hover:text-white hover:bg-white/10 rounded px-1 transition-colors">
          ⋮
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {quicklinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={(e) => link.url === '#' && e.preventDefault()}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${link.bgColor}`}>
              <span className="text-xl font-extrabold">{link.content}</span>
            </div>
            <span className="text-[11px] text-white/70">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}