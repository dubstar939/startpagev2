import { useState, useCallback, useEffect } from 'react';
import { loadData, saveData } from './utils/storage';
import { Widget, isListWidget, isIconGridWidget, isQuicklinksWidget, ListWidget as ListWidgetType } from './types';
import { SearchBar } from './components/SearchBar';
import { ListWidget } from './components/ListWidget';
import { IconGridWidget } from './components/IconGridWidget';
import { QuicklinksWidget } from './components/QuicklinksWidget';
import { Toast } from './components/Toast';

export default function App() {
  const [data, setData] = useState(() => loadData());
  const [toast, setToast] = useState({ message: '', visible: false });

  // Persist to localStorage whenever data changes
  useEffect(() => {
    saveData(data);
  }, [data]);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 2500);
  }, []);

  const handleWidgetUpdate = useCallback((updatedWidget: Widget) => {
    setData(prev => ({
      ...prev,
      widgets: prev.widgets.map(w => w.id === updatedWidget.id ? updatedWidget : w),
    }));
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start p-8">
      <div className="w-full max-w-6xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser Toolbar */}
        <div className="flex items-center px-4 py-3 bg-slate-800 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 ml-4 bg-slate-900 rounded px-3.5 py-1.5 text-slate-500 text-xs text-center">
            startpage
          </div>
        </div>

        {/* Start Page Content */}
        <div className="bg-gradient-to-br from-amber-200 via-pink-200 to-violet-300 min-h-[700px] p-8 relative">
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>

          {/* Widget Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.widgets.map(widget => {
              if (isListWidget(widget)) {
                return (
                  <ListWidget
                    key={widget.id}
                    widget={widget}
                    onUpdate={handleWidgetUpdate}
                  />
                );
              }
              if (isIconGridWidget(widget)) {
                return (
                  <IconGridWidget
                    key={widget.id}
                    widget={widget}
                    onUpdate={handleWidgetUpdate}
                  />
                );
              }
              if (isQuicklinksWidget(widget)) {
                return (
                  <QuicklinksWidget
                    key={widget.id}
                    widget={widget}
                    onUpdate={handleWidgetUpdate}
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