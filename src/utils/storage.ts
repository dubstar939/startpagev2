import { AppData, Widget, Link, IconData, QuicklinkData } from '../types';
import { generateId, getRandomColor } from './helpers';

const STORAGE_KEY = 'startpage_data';

// Default data structure
function getDefaultData(): AppData {
  return {
    widgets: [
      {
        id: 'directory',
        title: 'Shared Directory Widget',
        links: [
          { id: generateId(), name: 'Executive', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Onboarding', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'IT', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'Marketing', url: '#', bgColor: 'bg-orange' },
          { id: generateId(), name: 'Sales', url: '#', bgColor: 'bg-teal' },
          { id: generateId(), name: 'Customer Success', url: '#', bgColor: 'bg-pink' },
          { id: generateId(), name: 'HR', url: '#', bgColor: 'bg-indigo' },
          { id: generateId(), name: 'Finance', url: '#', bgColor: 'bg-cyan' },
          { id: generateId(), name: 'Ocean Workspace', url: '#', bgColor: 'bg-amber' },
          { id: generateId(), name: 'Book a 30-minute demo', url: '#', bgColor: 'bg-slate' },
        ],
      },
      {
        id: 'engagement',
        title: 'Employee Engagement Tools',
        links: [
          { id: generateId(), name: 'TinyPulse', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'Officevibe', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Culture Amp', url: '#', bgColor: 'bg-red' },
          { id: generateId(), name: 'Glint', url: '#', bgColor: 'bg-teal' },
          { id: generateId(), name: 'Peakon', url: '#', bgColor: 'bg-orange' },
          { id: generateId(), name: 'Kazoo', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'Qualtrics EmployeeXM', url: '#', bgColor: 'bg-indigo' },
          { id: generateId(), name: 'Engagedly', url: '#', bgColor: 'bg-pink' },
        ],
      },
      {
        id: 'events',
        title: 'Event Management',
        links: [
          { id: generateId(), name: 'Eventbrite', url: '#', bgColor: 'bg-orange' },
          { id: generateId(), name: 'Cvent', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Meetup', url: '#', bgColor: 'bg-red' },
          { id: generateId(), name: 'Splash', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'Whova', url: '#', bgColor: 'bg-teal' },
          { id: generateId(), name: 'Aventri', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'Bizzabo', url: '#', bgColor: 'bg-pink' },
          { id: generateId(), name: 'Ticket Tailor', url: '#', bgColor: 'bg-indigo' },
        ],
      },
      {
        id: 'company',
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
      },
      {
        id: 'collab',
        title: 'Collaboration and Communication Tools',
        links: [
          { id: generateId(), name: 'Workplace from Facebook', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Microsoft Teams', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'Zoom', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Google Meet', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'Asana', url: '#', bgColor: 'bg-orange' },
          { id: generateId(), name: 'Trello', url: '#', bgColor: 'bg-teal' },
          { id: generateId(), name: 'Skype', url: '#', bgColor: 'bg-cyan' },
        ],
      },
      {
        id: 'quicklinks',
        title: 'Quicklinks',
        quicklinks: [
          { id: generateId(), label: 'Indeed', content: 'i', bgColor: 'bg-blue-600', url: '#' },
          { id: generateId(), label: 'Recruiter', content: '👤', bgColor: 'bg-pink-600', url: '#' },
          { id: generateId(), label: 'BambooHR', content: 'b', bgColor: 'bg-green-600', url: '#' },
        ],
      },
      {
        id: 'feedback',
        title: 'Employee Feedback Tools',
        links: [
          { id: generateId(), name: 'SurveyMonkey', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'Typeform', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: '15Five', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'Lattice', url: '#', bgColor: 'bg-orange' },
        ],
      },
      {
        id: 'talent',
        title: 'Talent Acquisition Tools',
        links: [
          { id: generateId(), name: 'LinkedIn Talent Solutions', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Glassdoor for Employers', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'ZipRecruiter', url: '#', bgColor: 'bg-teal' },
          { id: generateId(), name: 'Monster', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'CareerBuilder for Employers', url: '#', bgColor: 'bg-amber' },
          { id: generateId(), name: 'Lever', url: '#', bgColor: 'bg-slate' },
        ],
      },
      {
        id: 'hrms',
        title: 'HR Management Systems',
        links: [
          { id: generateId(), name: 'Workday', url: '#', bgColor: 'bg-orange' },
          { id: generateId(), name: 'Gusto', url: '#', bgColor: 'bg-green' },
          { id: generateId(), name: 'Zenefits', url: '#', bgColor: 'bg-blue' },
          { id: generateId(), name: 'Zoho Survey', url: '#', bgColor: 'bg-red' },
          { id: generateId(), name: 'Namely', url: '#', bgColor: 'bg-purple' },
          { id: generateId(), name: 'ADP', url: '#', bgColor: 'bg-teal' },
          { id: generateId(), name: 'SAP SuccessFactors', url: '#', bgColor: 'bg-indigo' },
          { id: generateId(), name: 'Paychex', url: '#', bgColor: 'bg-amber' },
        ],
      },
    ],
  };
}

export function loadData(): AppData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validate that widgets exists and is an array
      if (parsed && Array.isArray(parsed.widgets)) {
        return parsed as AppData;
      }
    }
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
  }
  return getDefaultData();
}

export function saveData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}