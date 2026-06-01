import { useState, useEffect } from 'react';
import { loadData, saveData } from '../utils/storage';
import { Widget, AppData, Link, IconData, QuicklinkData } from '../types';
import { SearchBar } from '../components/SearchBar';
import { ListWidget } from '../components/ListWidget';
import { IconGridWidget } from '../components/IconGridWidget';
import { QuicklinksWidget } from '../components/QuicklinksWidget';
import { Toast } from '../components/Toast';

export default function App() {
  const [data, setData] = useState<AppData | null>(null);
  const [toast, setToast] = useState({ message: '', visible: false });

  useEffect(() => {
    const loadedData = loadData();
    setData(loadedData);
  }, []);

  useEffect(() => {
    if (data) {
      saveData(data);
    }
  }, [data]);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 2500);
  };

  const handleUpdateWidget = (widgetId: string, updatedWidget: Widget) => {
    if (!data) return;
    setData({
      ...data,
      widgets: data.widgets.map((w) =>
        w.id === widgetId ? updatedWidget : w
      ),
    });
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-6xl bg-slate-950 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser Toolbar */}
        <div className="flex items-center px-4 py-3 bg-slate-800 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 ml-4 bg-slate-900 rounded px-3 py-1.5 text-slate-500 text-sm text-center">
            startpage
          </div>
        </div>

        {/* Start Page Content */}
        <div className="bg-gradient-to-br from-amber-700 via-pink-700 to-teal-700 p-6 md:p-8">
          <SearchBar />

          {/* Widget Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.widgets.map((widget) => {
              // Render ListWidget (has links array)
              if (widget.links) {
                return (
                  <ListWidget
                    key={widget.id}
                    widget={widget as Widget & { links: Link[] }}
                    onUpdateWidget={handleUpdateWidget}
                    showToast={showToast}
                  />
                );
              }

              // Render IconGridWidget (has icons array)
              if (widget.icons) {
                return (
                  <IconGridWidget
                    key={widget.id}
                    data={widget.icons as IconData[]}
                  />
                );
              }

              // Render QuicklinksWidget (has quicklinks array)
              if (widget.quicklinks) {
                return (
                  <QuicklinksWidget
                    key={widget.id}
                    data={widget.quicklinks as QuicklinkData[]}
                  />
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}