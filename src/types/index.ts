// Widget type discrimination using explicit kind field
export type WidgetKind = 'list' | 'icons' | 'quicklinks';

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

export interface BaseWidget {
  id: string;
  title: string;
  kind: WidgetKind;
}

export interface ListWidget extends BaseWidget {
  kind: 'list';
  links: Link[];
}

export interface IconGridWidget extends BaseWidget {
  kind: 'icons';
  icons: IconData[];
}

export interface QuicklinksWidget extends BaseWidget {
  kind: 'quicklinks';
  quicklinks: QuicklinkData[];
}

export type Widget = ListWidget | IconGridWidget | QuicklinksWidget;

export interface AppData {
  widgets: Widget[];
}

// Type guards for widget discrimination
export function isListWidget(widget: Widget): widget is ListWidget {
  return widget.kind === 'list';
}

export function isIconGridWidget(widget: Widget): widget is IconGridWidget {
  return widget.kind === 'icons';
}

export function isQuicklinksWidget(widget: Widget): widget is QuicklinksWidget {
  return widget.kind === 'quicklinks';
}