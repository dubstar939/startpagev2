import { useState } from 'react';
import { Button } from './ui/button';

interface AddLinkFormProps {
  visible: boolean;
  onAdd: (name: string, url: string) => void;
  onCancel: () => void;
}

export function AddLinkForm({ visible, onAdd, onCancel }: AddLinkFormProps) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(name.trim(), url.trim());
      setName('');
      setUrl('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
    if (e.key === 'Escape') onCancel();
  };

  if (!visible) return null;

  return (
    <div className="flex flex-col gap-1.5 p-2.5">
      <input
        type="text"
        placeholder="Link name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-white/10 border border-white/15 rounded-md px-2 py-1.5 text-white text-xs outline-none focus:border-white/30 placeholder-white/35"
      />
      <input
        type="text"
        placeholder="URL (e.g. https://...)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-white/10 border border-white/15 rounded-md px-2 py-1.5 text-white text-xs outline-none focus:border-white/30 placeholder-white/35"
      />
      <div className="flex gap-1.5 justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={onCancel}
          className="h-6 px-3 text-xs text-white/70 hover:text-white hover:bg-white/10"
        >
          Cancel
        </Button>
        <Button
          size="sm"
          onClick={handleAdd}
          className="h-6 px-3 text-xs bg-blue-500 hover:bg-blue-600"
        >
          Add
        </Button>
      </div>
    </div>
  );
}