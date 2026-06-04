import { useState, useCallback } from 'react';
import { ListWidget as ListWidgetType, Link } from '../types';
import { LinkItem } from './LinkItem';
import { AddLinkForm } from './AddLinkForm';
import { generateId, getRandomColor, sanitizeUrl } from '../utils/helpers';

interface ListWidgetProps {
  widget: ListWidgetType;
  onUpdate: (widget: ListWidgetType) => void;
}

export function ListWidget({ widget, onUpdate }: ListWidgetProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(widget.title);

  const handleAddLink = useCallback((name: string, url: string) => {
    const newLink: Link = {
      id: generateId(),
      name,
      url: sanitizeUrl(url),
      bgColor: getRandomColor(),
    };

    onUpdate({
      ...widget,
      links: [...widget.links, newLink],
    });
    setShowAddForm(false);
  }, [widget, onUpdate]);

  const handleRemoveLink = useCallback((linkId: string) => {
    onUpdate({
      ...widget,
      links: widget.links.filter(link => link.id !== linkId),
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
      <div className="max-h-64 overflow-y-auto">
        {widget.links.map(link => (
          <LinkItem key={link.id} link={link} onRemove={handleRemoveLink} />
        ))}
      </div>
      {showAddForm && (
        <AddLinkForm onAdd={handleAddLink} onCancel={() => setShowAddForm(false)} />
      )}
    </div>
  );
}