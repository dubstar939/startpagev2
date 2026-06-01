export interface Link {
  id: string;
  name: string;
  url: string;
  bgColor: string;
}

export interface IconData {
  id: string;
  label: string;
  content: string;
  bgColor: string;
  url: string;
}

export interface QuicklinkData {
  id: string;
  label: string;
  content: string;
  bgColor: string;
  url: string;
}

export interface Widget {
  id: string;
  title: string;
  links?: Link[];
  icons?: IconData[];
  quicklinks?: QuicklinkData[];
}

export interface AppData {
  widgets: Widget[];
}