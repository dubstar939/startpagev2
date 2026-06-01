import { memo } from 'react';
import { Link } from '../types';
import { getInitial } from '../utils/helpers';

interface LinkItemProps {
  link: Link;
  onRemove: (id: string) => void;
}

export const LinkItem = memo(function LinkItem({ link, onRemove }: LinkItemProps) {
  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove(link.id);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-3.5 py-1.5 gap-2.5 cursor-pointer hover:bg-white/5 transition-colors group"
    >
      <div
        className={`w-4 h-4 rounded flex items-center justify-center text-white text-xs font-bold ${link.bgColor}`}
      >
        {getInitial(link.name)}
      </div>
      <span className="text-xs text-white/85 truncate flex-1">{link.name}</span>
      <button
        onClick={handleRemove}
        className="opacity-0 group-hover:opacity-100 text-white/30 hover:text-red-400 transition-colors text-sm"
        aria-label={`Remove ${link.name}`}
      >
        ×
      </button>
    </a>
  );
});