import { useState, useCallback } from 'react';
import { IconGridWidget as IconGridWidgetType, IconData } from '../types';
import { AddLinkForm } from './AddLinkForm';
import { generateId, getRandomColor, sanitizeUrl } from '../utils/helpers';

interface IconGridWidgetProps {
  widget: IconGridWidgetType;
  onUpdate: (widget: IconGridWidgetType) => void;
}

export const IconGridWidget = function IconGridWidget({ widget, onUpdate }: IconGridWidgetProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(widget.title);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddLink = useCallback((name: string, url: string) => {
    const newIcon: IconData = {
      id: generateId(),
      label: name,
      content: name.charAt(0).toUpperCase(),
      url: sanitizeUrl(url),
      bgColor: getRandomColor(),
    };

    onUpdate({
      ...widget,
      icons: [...widget.icons, newIcon],
    });
    setShowAddForm(false);
  }, [widget, onUpdate]);

  const handleRemoveLink = useCallback((linkId: string) => {
    onUpdate({
      ...widget,
      icons: widget.icons.filter(icon => icon.id !== linkId),
    });
  }, [widget, onUpdate]);

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
        <div className="flex gap-1">
          <button
            onClick={() => setIsEditingTitle(!isEditingTitle)}
            className="text-white/40 hover:text-white hover:bg-white/10 px-1 rounded text-base"
            aria-label="Edit title"
          >
            ✎
          </button>
          <button
            onClick={() => setShowAddForm(true)}
            className="text-white/40 hover:text-white hover:bg-white/10 px-1 rounded text-base"
            aria-label="Add link"
          >
            +
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-3.5">
        {widget.icons.map(icon => (
          <div
            key={icon.id}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg hover:bg-white/5 transition-colors group relative"
          >
            <a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${icon.bgColor}`}>
                <span className="text-lg font-bold">{icon.content}</span>
              </div>
              <span className="text-xs text-white/70 text-center truncate w-full">{icon.label}</span>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveLink(icon.id);
              }}
              className="opacity-0 group-hover:opacity-100 absolute top-1 right-1 text-white/30 hover:text-red-400 transition-opacity text-lg"
              aria-label={`Remove ${icon.label}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {showAddForm && (
        <AddLinkForm onAdd={handleAddLink} onCancel={() => setShowAddForm(false)} />
      )}
    </div>
  );
};