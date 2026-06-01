export interface LinkItem {
  id: string;
  name: string;
  url: string;
  color: string;
  letter: string;
}

export interface Widget {
  id: string;
  title: string;
  type: 'list' | 'icon-grid' | 'quicklinks';
  links: LinkItem[];
}

export interface IconData {
  id: string;
  label: string;
  bgColor: string;
  content: string;
  url: string;
}

export interface QuicklinkData {
  id: string;
  label: string;
  bgColor: string;
  content: string;
  url: string;
}