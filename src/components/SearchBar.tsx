import { useState, useCallback } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    if (!query.trim()) {
      e.preventDefault();
    }
  }, [query]);

  return (
    <form
      action="https://www.google.com/search"
      method="GET"
      target="_blank"
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md shadow-lg gap-2"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <span className="text-blue-500 font-bold text-sm">G</span>
      </div>
      <input
        type="text"
        name="q"
        placeholder="Google"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        className="flex-1 border-none outline-none text-sm text-slate-700 bg-transparent placeholder-slate-400"
      />
      <button type="submit" className="text-slate-400 hover:text-blue-500 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </button>
    </form>
  );
}