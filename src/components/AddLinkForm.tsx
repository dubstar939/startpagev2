import { useState, useCallback } from 'react';

interface AddLinkFormProps {
  onAdd: (name: string, url: string) => void;
  onCancel: () => void;
}

export function AddLinkForm({ onAdd, onCancel }: AddLinkFormProps) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !name.trim()) return;

    setIsSubmitting(true);
    onAdd(name.trim(), url.trim() || '#');
    
    // Reset after short delay to prevent double-submit
    setTimeout(() => {
      setName('');
      setUrl('');
      setIsSubmitting(false);
    }, 100);
  }, [name, url, isSubmitting, onAdd]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  }, [onCancel]);

  return (
    <form onSubmit={handleSubmit} className="p-3.5 flex flex-col gap-1.5">
      <input
        type="text"
        placeholder="Link name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
        className="w-full bg-white/10 border border-white/15 rounded-md px-2.5 py-1.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/30 disabled:opacity-50"
        autoFocus
      />
      <input
        type="text"
        placeholder="URL (e.g. https://...)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
        className="w-full bg-white/10 border border-white/15 rounded-md px-2.5 py-1.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/30 disabled:opacity-50"
      />
      <div className="flex gap-1.5 justify-end pt-1">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="bg-white/10 text-white/80 px-3.5 py-1.5 rounded-md text-xs font-medium hover:bg-white/15 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !name.trim()}
          className="bg-blue-500 text-white px-3.5 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </form>
  );
}