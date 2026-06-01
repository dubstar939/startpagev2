import { LinkItem as LinkItemType } from '../types';

interface LinkItemProps {
  link: LinkItemType;
  onRemove: (id: string) => void;
}

export function LinkItem({ link, onRemove }: LinkItemProps) {
  return (
    <a
      href={link.url || '#'}
      className="flex items-center px-3 py-1 gap-2 cursor-pointer hover:bg-white/10 transition-colors group"
      onClick={(e) => link.url === '#' && e.preventDefault()}
    >
      <div className={`w-4 h-4 rounded flex items-center justify-center text-white text-xs font-bold ${link.color}`}>
        {link.letter}
      </div>
      <span className="text-xs text-white/85 truncate flex-1">{link.name}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemove(link.id);
        }}
        className="hidden group-hover:block text-white/30 hover:text-red-400 transition-colors text-sm"
      >
        ×
      </button>
    </a>
  );
}