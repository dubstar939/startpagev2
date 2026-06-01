import { useState } from 'react';
import { Widget, Link as LinkType } from '../types';
import { LinkItem } from './LinkItem';
import { AddLinkForm } from './AddLinkForm';

interface ListWidgetProps {
  widget: Widget;
  onUpdateWidget: (widgetId: string, updatedWidget: Widget) => void;
  showToast: (message: string) => void;
}

export function ListWidget({ widget, onUpdateWidget, showToast }: ListWidgetProps) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleRemoveLink = (linkId: string) => {
    const updatedLinks = widget.links.filter((link) => link.id !== linkId);
    onUpdateWidget(widget.id, { ...widget, links: updatedLinks });
    showToast('Link removed');
  };

  const handleAddLink = (newLink: LinkType) => {
    onUpdateWidget(widget.id, { ...widget, links: [...widget.links, newLink] });
    setShowAddForm(false);
    showToast(`"${newLink.name}" added successfully`);
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="flex items-center justify-between px-3.5 py-3 border-b border-white/5">
        <span className="text-sm font-bold text-white tracking-wide">
          {widget.title}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-none border-none text-white/40 cursor-pointer text-base px-1 py-0.5 rounded transition-all hover:text-white hover:bg-white/10"
            title="Add link"
          >
            +
          </button>
          <button
            className="bg-none border-none text-white/40 cursor-pointer text-base px-1 py-0.5 rounded transition-all hover:text-white hover:bg-white/10"
            title="More options"
          >
            ⋮
          </button>
        </div>
      </div>
      <div className="py-2 max-h-60 overflow-y-auto">
        {widget.links.map((link) => (
          <LinkItem
            key={link.id}
            link={link}
            onRemove={() => handleRemoveLink(link.id)}
          />
        ))}
      </div>
      {showAddForm && (
        <AddLinkForm
          onAdd={handleAddLink}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}