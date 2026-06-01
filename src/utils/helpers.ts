export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function getRandomColor(): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-purple-500',
    'bg-teal-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-cyan-500',
    'bg-amber-500',
    'bg-violet-500',
    'bg-lime-500',
    'bg-slate-700',
    'bg-rose-500',
    'bg-sky-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}