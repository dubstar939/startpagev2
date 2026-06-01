import { Search } from 'lucide-react';

export function SearchBar() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const input = (e.currentTarget.elements.namedItem('q') as HTMLInputElement);
    if (!input?.value.trim()) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex justify-center mb-7">
      <form
        className="flex items-center bg-white rounded-3xl px-4 py-2 w-full max-w-md shadow-lg gap-2"
        action="https://www.google.com/search"
        method="GET"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <span className="text-blue-500 font-bold text-lg">G</span>
        </div>
        <input
          type="text"
          name="q"
          placeholder="Google"
          autoComplete="off"
          className="flex-1 border-none outline-none text-sm text-slate-700 bg-transparent placeholder-slate-400"
        />
        <button type="submit" className="text-slate-400 hover:text-blue-500 transition-colors">
          <Search size={16} />
        </button>
      </form>
    </div>
  );
}