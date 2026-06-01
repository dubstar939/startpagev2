import { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { Widget, LinkItem as LinkItemType } from '../types';
import { LinkItem } from './LinkItem';
import { AddLinkForm } from './AddLinkForm';
import { generateId, getRandomColor } from '../utils/helpers';

interface ListWidgetProps {
  widget: Widget;
  onUpdate: (links: LinkItemType[]) => void;
  showToast: (msg: string) => void;
}

export function ListWidget({ widget, onUpdate, showToast }: ListWidgetProps) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleRemove = (id: string) => {
    const link = widget.links.find((l) => l.id === id);
    const newLinks = widget.links.filter((l) => l.id !== id);
    onUpdate(newLinks);
    showToast(`"${link?.name}" removed`);
  };

  const handleAdd = (name: string, url: string) => {
    const newLink: LinkItemType = {
      id: generateId(),
      name,
      url: url || '#',
      color: getRandomColor(),
      letter: name.charAt(0).toUpperCase(),
    };
    onUpdate([...widget.links, newLink]);
    setShowAddForm(false);
    showToast(`"${name}" added successfully`);
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:translate-y-[-1px] transition-transform">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-xs font-bold text-white tracking-wide">{widget.title}</span>
        <div className="flex gap-1">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="text-white/40 hover:text-white hover:bg-white/10 rounded px-1 transition-colors"
            title="Add link"
          >
            <Plus size={16} />
          </button>
          <button className="text-white/40 hover:text-white hover:bg-white/10 rounded px-1 transition-colors">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {widget.links.map((link) => (
          <LinkItem key={link.id} link={link} onRemove={handleRemove} />
        ))}
      </div>
      <AddLinkForm
        visible={showAddForm}
        onAdd={handleAdd}
        onCancel={() => setShowAddForm(false)}
      />
    </div>
  );
}