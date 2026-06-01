import { memo } from 'react';
import { QuicklinksWidget as QuicklinksWidgetType } from '../types';

interface QuicklinksWidgetProps {
  widget: QuicklinksWidgetType;
}

export const QuicklinksWidget = memo(function QuicklinksWidget({ widget }: QuicklinksWidgetProps) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:-translate-y-0.5 transition-transform">
      <div className="flex items-center justify-between px-3.5 py-3 border-b border-white/10">
        <h3 className="text-xs font-bold text-white tracking-wide">{widget.title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-3.5">
        {widget.quicklinks.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${link.bgColor}`}>
              <span className="text-xl font-extrabold">{link.content}</span>
            </div>
            <span className="text-xs text-white/70 text-center">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
});