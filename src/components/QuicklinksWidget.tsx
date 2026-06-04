import { useState, useCallback } from 'react';
import { QuicklinksWidget as QuicklinksWidgetType } from '../types';

interface QuicklinksWidgetProps {
  widget: QuicklinksWidgetType;
  onUpdate: (widget: QuicklinksWidgetType) => void;
}

export const QuicklinksWidget = function QuicklinksWidget({ widget, onUpdate }: QuicklinksWidgetProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(widget.title);

  const handleTitleSave = useCallback(() => {
    if (editTitle.trim()) {
      onUpdate({
        ...widget,
        title: editTitle.trim(),
      });
    } else {
      setEditTitle(widget.title);
    }
    setIsEditingTitle(false);
  }, [editTitle, widget, onUpdate]);

  const handleTitleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTitleSave();
    } else if (e.key === 'Escape') {
      setEditTitle(widget.title);
      setIsEditingTitle(false);
    }
  }, [handleTitleSave, widget.title]);

  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:-translate-y-0.5 transition-transform">
      <div className="flex items-center justify-between px-3.5 py-3 border-b border-white/10">
        {isEditingTitle ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleTitleSave}
            onKeyDown={handleTitleKeyDown}
            autoFocus
            className="bg-white/10 border border-white/20 rounded px-2 py-1 text-xs font-bold text-white tracking-wide focus:outline-none focus:border-white/40"
          />
        ) : (
          <h3 className="text-xs font-bold text-white tracking-wide">{widget.title}</h3>
        )}
        <button
          onClick={() => setIsEditingTitle(!isEditingTitle)}
          className="text-white/40 hover:text-white hover:bg-white/10 px-1 rounded text-base"
          aria-label="Edit title"
        >
          ✎
        </button>
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
};