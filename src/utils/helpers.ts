// Consistent color palette matching Tailwind v4
const COLORS = [
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
  'bg-slate-600',
  'bg-rose-500',
  'bg-emerald-500',
];

export function getRandomColor(): string {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`;
}

export function getInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

export function isValidUrl(url: string): boolean {
  if (!url || url === '#') return true; // Allow placeholder
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeUrl(url: string): string {
  if (!url || url === '#') return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
}