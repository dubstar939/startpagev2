import { AppData, Widget, ListWidget, IconGridWidget, QuicklinksWidget } from '../types';
import { generateId } from './helpers';

const STORAGE_KEY = 'startpage_widgets_v1';

function createDefaultWidgets(): Widget[] {
  return [
    {
      id: 'directory',
      kind: 'list',
      title: 'Shared Directory Widget',
      links: [
        { id: generateId(), name: 'Executive', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Onboarding', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'IT', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'Marketing', url: '#', bgColor: 'bg-orange-500' },
        { id: generateId(), name: 'Sales', url: '#', bgColor: 'bg-teal-500' },
        { id: generateId(), name: 'Customer Success', url: '#', bgColor: 'bg-pink-500' },
        { id: generateId(), name: 'HR', url: '#', bgColor: 'bg-indigo-500' },
        { id: generateId(), name: 'Finance', url: '#', bgColor: 'bg-cyan-500' },
        { id: generateId(), name: 'Ocean Workspace', url: '#', bgColor: 'bg-amber-500' },
        { id: generateId(), name: 'Book a 30-minute demo', url: '#', bgColor: 'bg-slate-600' },
      ],
    } as ListWidget,
    {
      id: 'engagement',
      kind: 'list',
      title: 'Employee Engagement Tools',
      links: [
        { id: generateId(), name: 'TinyPulse', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'Officevibe', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Culture Amp', url: '#', bgColor: 'bg-red-500' },
        { id: generateId(), name: 'Glint', url: '#', bgColor: 'bg-teal-500' },
        { id: generateId(), name: 'Peakon', url: '#', bgColor: 'bg-orange-500' },
        { id: generateId(), name: 'Kazoo', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'Qualtrics EmployeeXM', url: '#', bgColor: 'bg-indigo-500' },
        { id: generateId(), name: 'Engagedly', url: '#', bgColor: 'bg-pink-500' },
      ],
    } as ListWidget,
    {
      id: 'events',
      kind: 'list',
      title: 'Event Management',
      links: [
        { id: generateId(), name: 'Eventbrite', url: '#', bgColor: 'bg-orange-500' },
        { id: generateId(), name: 'Cvent', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Meetup', url: '#', bgColor: 'bg-red-500' },
        { id: generateId(), name: 'Splash', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'Whova', url: '#', bgColor: 'bg-teal-500' },
        { id: generateId(), name: 'Aventri', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'Bizzabo', url: '#', bgColor: 'bg-pink-500' },
        { id: generateId(), name: 'Ticket Tailor', url: '#', bgColor: 'bg-indigo-500' },
      ],
    } as ListWidget,
    {
      id: 'company',
      kind: 'icons',
      title: 'Shared Company Links',
      icons: [
        { id: generateId(), label: 'Slack', content: 'S', bgColor: 'bg-slate-700', url: '#' },
        { id: generateId(), label: 'Asana', content: 'A', bgColor: 'bg-slate-700', url: '#' },
        { id: generateId(), label: 'Gmail', content: '✉', bgColor: 'bg-slate-700', url: '#' },
        { id: generateId(), label: 'Drive', content: '▲', bgColor: 'bg-slate-700', url: '#' },
        { id: generateId(), label: 'ChatGPT', content: 'AI', bgColor: 'bg-slate-700', url: '#' },
        { id: generateId(), label: 'GitHub', content: '⬡', bgColor: 'bg-slate-700', url: '#' },
        { id: generateId(), label: 'Discord', content: '🎮', bgColor: 'bg-indigo-600', url: '#' },
        { id: generateId(), label: 'Google Cal...', content: '31', bgColor: 'bg-blue-600', url: '#' },
      ],
    } as IconGridWidget,
    {
      id: 'collab',
      kind: 'list',
      title: 'Collaboration and Communication Tools',
      links: [
        { id: generateId(), name: 'Workplace from Facebook', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Microsoft Teams', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'Zoom', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Google Meet', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'Asana', url: '#', bgColor: 'bg-orange-500' },
        { id: generateId(), name: 'Trello', url: '#', bgColor: 'bg-teal-500' },
        { id: generateId(), name: 'Skype', url: '#', bgColor: 'bg-cyan-500' },
      ],
    } as ListWidget,
    {
      id: 'quicklinks',
      kind: 'quicklinks',
      title: 'Quicklinks',
      quicklinks: [
        { id: generateId(), label: 'Indeed', content: 'i', bgColor: 'bg-blue-600', url: '#' },
        { id: generateId(), label: 'Recruiter', content: '👤', bgColor: 'bg-pink-600', url: '#' },
        { id: generateId(), label: 'BambooHR', content: 'b', bgColor: 'bg-green-600', url: '#' },
      ],
    } as QuicklinksWidget,
    {
      id: 'feedback',
      kind: 'list',
      title: 'Employee Feedback Tools',
      links: [
        { id: generateId(), name: 'SurveyMonkey', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'Typeform', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: '15Five', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'Lattice', url: '#', bgColor: 'bg-orange-500' },
      ],
    } as ListWidget,
    {
      id: 'talent',
      kind: 'list',
      title: 'Talent Acquisition Tools',
      links: [
        { id: generateId(), name: 'LinkedIn Talent Solutions', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Glassdoor for Employers', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'ZipRecruiter', url: '#', bgColor: 'bg-teal-500' },
        { id: generateId(), name: 'Monster', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'CareerBuilder for Employers', url: '#', bgColor: 'bg-amber-500' },
        { id: generateId(), name: 'Lever', url: '#', bgColor: 'bg-slate-600' },
      ],
    } as ListWidget,
    {
      id: 'hrms',
      kind: 'list',
      title: 'HR Management Systems',
      links: [
        { id: generateId(), name: 'Workday', url: '#', bgColor: 'bg-orange-500' },
        { id: generateId(), name: 'Gusto', url: '#', bgColor: 'bg-green-500' },
        { id: generateId(), name: 'Zenefits', url: '#', bgColor: 'bg-blue-500' },
        { id: generateId(), name: 'Zoho Survey', url: '#', bgColor: 'bg-red-500' },
        { id: generateId(), name: 'Namely', url: '#', bgColor: 'bg-purple-500' },
        { id: generateId(), name: 'ADP', url: '#', bgColor: 'bg-teal-500' },
        { id: generateId(), name: 'SAP SuccessFactors', url: '#', bgColor: 'bg-indigo-500' },
        { id: generateId(), name: 'Paychex', url: '#', bgColor: 'bg-amber-500' },
      ],
    } as ListWidget,
  ];
}

export function loadData(): AppData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validate structure
      if (parsed && Array.isArray(parsed.widgets)) {
        // Validate each widget has required fields
        const validWidgets = parsed.widgets.filter((w: Widget) => 
          w && typeof w.id === 'string' && typeof w.title === 'string' && typeof w.kind === 'string'
        );
        if (validWidgets.length === parsed.widgets.length) {
          return { widgets: validWidgets };
        }
      }
    }
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
  }
  return { widgets: createDefaultWidgets() };
}

export function saveData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save data to localStorage:', error);
  }
}

export function clearData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear localStorage:', error);
  }
}