import { Widget, IconData, QuicklinkData } from '../types';

const STORAGE_KEY = 'startpage_data';

export interface StorageData {
  widgets: Record<string, Widget>;
  iconGrid: IconData[];
  quicklinks: QuicklinkData[];
}

export const defaultWidgets: Record<string, Widget> = {
  directory: {
    id: 'directory',
    title: 'Shared Directory Widget',
    type: 'list',
    links: [
      { id: '1', name: 'Executive', url: '#', color: 'bg-blue-500', letter: 'E' },
      { id: '2', name: 'Onboarding', url: '#', color: 'bg-green-500', letter: 'O' },
      { id: '3', name: 'IT', url: '#', color: 'bg-purple-500', letter: 'I' },
      { id: '4', name: 'Marketing', url: '#', color: 'bg-orange-500', letter: 'M' },
      { id: '5', name: 'Sales', url: '#', color: 'bg-teal-500', letter: 'S' },
      { id: '6', name: 'Customer Success', url: '#', color: 'bg-pink-500', letter: 'C' },
      { id: '7', name: 'HR', url: '#', color: 'bg-indigo-500', letter: 'H' },
      { id: '8', name: 'Finance', url: '#', color: 'bg-cyan-500', letter: 'F' },
      { id: '9', name: 'Ocean Workspace', url: '#', color: 'bg-amber-500', letter: 'O' },
      { id: '10', name: 'Book a 30-minute demo', url: '#', color: 'bg-slate-700', letter: 'B' },
    ],
  },
  engagement: {
    id: 'engagement',
    title: 'Employee Engagement Tools',
    type: 'list',
    links: [
      { id: '1', name: 'TinyPulse', url: '#', color: 'bg-green-500', letter: 'T' },
      { id: '2', name: 'Officevibe', url: '#', color: 'bg-blue-500', letter: 'O' },
      { id: '3', name: 'Culture Amp', url: '#', color: 'bg-red-500', letter: 'C' },
      { id: '4', name: 'Glint', url: '#', color: 'bg-teal-500', letter: 'G' },
      { id: '5', name: 'Peakon', url: '#', color: 'bg-orange-500', letter: 'P' },
      { id: '6', name: 'Kazoo', url: '#', color: 'bg-purple-500', letter: 'K' },
      { id: '7', name: 'Qualtrics EmployeeXM', url: '#', color: 'bg-indigo-500', letter: 'Q' },
      { id: '8', name: 'Engagedly', url: '#', color: 'bg-pink-500', letter: 'E' },
    ],
  },
  events: {
    id: 'events',
    title: 'Event Management',
    type: 'list',
    links: [
      { id: '1', name: 'Eventbrite', url: '#', color: 'bg-orange-500', letter: 'E' },
      { id: '2', name: 'Cvent', url: '#', color: 'bg-blue-500', letter: 'C' },
      { id: '3', name: 'Meetup', url: '#', color: 'bg-red-500', letter: 'M' },
      { id: '4', name: 'Splash', url: '#', color: 'bg-purple-500', letter: 'S' },
      { id: '5', name: 'Whova', url: '#', color: 'bg-teal-500', letter: 'W' },
      { id: '6', name: 'Aventri', url: '#', color: 'bg-green-500', letter: 'A' },
      { id: '7', name: 'Bizzabo', url: '#', color: 'bg-pink-500', letter: 'B' },
      { id: '8', name: 'Ticket Tailor', url: '#', color: 'bg-indigo-500', letter: 'T' },
    ],
  },
  collab: {
    id: 'collab',
    title: 'Collaboration and Communication Tools',
    type: 'list',
    links: [
      { id: '1', name: 'Workplace from Facebook', url: '#', color: 'bg-blue-500', letter: 'W' },
      { id: '2', name: 'Microsoft Teams', url: '#', color: 'bg-purple-500', letter: 'M' },
      { id: '3', name: 'Zoom', url: '#', color: 'bg-blue-500', letter: 'Z' },
      { id: '4', name: 'Google Meet', url: '#', color: 'bg-green-500', letter: 'G' },
      { id: '5', name: 'Asana', url: '#', color: 'bg-orange-500', letter: 'A' },
      { id: '6', name: 'Trello', url: '#', color: 'bg-teal-500', letter: 'T' },
      { id: '7', name: 'Skype', url: '#', color: 'bg-cyan-500', letter: 'S' },
    ],
  },
  feedback: {
    id: 'feedback',
    title: 'Employee Feedback Tools',
    type: 'list',
    links: [
      { id: '1', name: 'SurveyMonkey', url: '#', color: 'bg-green-500', letter: 'S' },
      { id: '2', name: 'Typeform', url: '#', color: 'bg-blue-500', letter: 'T' },
      { id: '3', name: '15Five', url: '#', color: 'bg-purple-500', letter: '15' },
      { id: '4', name: 'Lattice', url: '#', color: 'bg-orange-500', letter: 'L' },
    ],
  },
  talent: {
    id: 'talent',
    title: 'Talent Acquisition Tools',
    type: 'list',
    links: [
      { id: '1', name: 'LinkedIn Talent Solutions', url: '#', color: 'bg-blue-500', letter: 'L' },
      { id: '2', name: 'Glassdoor for Employers', url: '#', color: 'bg-green-500', letter: 'G' },
      { id: '3', name: 'ZipRecruiter', url: '#', color: 'bg-teal-500', letter: 'Z' },
      { id: '4', name: 'Monster', url: '#', color: 'bg-purple-500', letter: 'M' },
      { id: '5', name: 'CareerBuilder for Employers', url: '#', color: 'bg-amber-500', letter: 'C' },
      { id: '6', name: 'Lever', url: '#', color: 'bg-slate-700', letter: 'L' },
    ],
  },
  hrms: {
    id: 'hrms',
    title: 'HR Management Systems',
    type: 'list',
    links: [
      { id: '1', name: 'Workday', url: '#', color: 'bg-orange-500', letter: 'W' },
      { id: '2', name: 'Gusto', url: '#', color: 'bg-green-500', letter: 'G' },
      { id: '3', name: 'Zenefits', url: '#', color: 'bg-blue-500', letter: 'Z' },
      { id: '4', name: 'Zoho Survey', url: '#', color: 'bg-red-500', letter: 'Z' },
      { id: '5', name: 'Namely', url: '#', color: 'bg-purple-500', letter: 'N' },
      { id: '6', name: 'ADP', url: '#', color: 'bg-teal-500', letter: 'A' },
      { id: '7', name: 'SAP SuccessFactors', url: '#', color: 'bg-indigo-500', letter: 'S' },
      { id: '8', name: 'Paychex', url: '#', color: 'bg-amber-500', letter: 'P' },
    ],
  },
};

export const defaultIconGrid: IconData[] = [
  { id: '1', label: 'Slack', bgColor: 'bg-slate-700', content: 'S', url: '#' },
  { id: '2', label: 'Asana', bgColor: 'bg-slate-700', content: 'A', url: '#' },
  { id: '3', label: 'Gmail', bgColor: 'bg-slate-700', content: '✉', url: '#' },
  { id: '4', label: 'Drive', bgColor: 'bg-slate-700', content: '▲', url: '#' },
  { id: '5', label: 'ChatGPT', bgColor: 'bg-slate-700', content: 'AI', url: '#' },
  { id: '6', label: 'GitHub', bgColor: 'bg-slate-700', content: '⬡', url: '#' },
  { id: '7', label: 'Discord', bgColor: 'bg-indigo-500', content: '🎮', url: '#' },
  { id: '8', label: 'Google Cal...', bgColor: 'bg-blue-500', content: '31', url: '#' },
];

export const defaultQuicklinks: QuicklinkData[] = [
  { id: '1', label: 'Indeed', bgColor: 'bg-blue-500', content: 'i', url: '#' },
  { id: '2', label: 'Recruiter', bgColor: 'bg-pink-500', content: '👤', url: '#' },
  { id: '3', label: 'BambooHR', bgColor: 'bg-green-500', content: 'b', url: '#' },
];

export const defaultData: StorageData = {
  widgets: defaultWidgets,
  iconGrid: defaultIconGrid,
  quicklinks: defaultQuicklinks,
};

export function loadData(): StorageData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load data from localStorage:', e);
  }
  return defaultData;
}

export function saveData(data: StorageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save data to localStorage:', e);
  }
}