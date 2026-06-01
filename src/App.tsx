import { useState, useCallback } from 'react';
import { SearchBar } from './components/SearchBar';
import { ListWidget } from './components/ListWidget';
import { IconGridWidget } from './components/IconGridWidget';
import { QuicklinksWidget } from './components/QuicklinksWidget';
import { Toast } from './components/Toast';
import { loadData, saveData, StorageData } from './utils/storage';
import { LinkItem } from './types';

export default function App() {
  const [data, setData] = useState<StorageData>(() => loadData());
  const [toast, setToast] = useState({ message: '', visible: false });

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 100);
  }, []);

  const updateWidget = useCallback(
    (widgetId: string, links: LinkItem[]) => {
      const newData = {
        ...data,
        widgets: {
          ...data.widgets,
          [widgetId]: {
            ...data.widgets[widgetId],
            links,
          },
        },
      };
      setData(newData);
      saveData(newData);
    },
    [data]
  );

  const listWidgets = ['directory', 'engagement', 'events', 'collab', 'feedback', 'talent', 'hrms'];

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-8 px-4">
      <div className="w-full max-w-5xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser Toolbar */}
        <div className="flex items-center px-4 py-3 bg-slate-800 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 ml-4 bg-slate-900 rounded-md px-3 py-1.5 text-slate-500 text-xs text-center">
            startpage
          </div>
        </div>

        {/* Start Page Content */}
        <div className="bg-gradient-to-br from-amber-200 via-pink-200 to-violet-300 min-h-[700px] p-6 relative">
          <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>
          <div className="relative z-10">
            <SearchBar />

            {/* Widget Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {listWidgets.slice(0, 3).map((id) => (
                <ListWidget
                  key={id}
                  widget={data.widgets[id]}
                  onUpdate={(links) => updateWidget(id, links)}
                  showToast={showToast}
                />
              ))}

              <IconGridWidget icons={data.iconGrid} />

              {listWidgets.slice(3).map((id) => (
                <ListWidget
                  key={id}
                  widget={data.widgets[id]}
                  onUpdate={(links) => updateWidget(id, links)}
                  showToast={showToast}
                />
              ))}

              <QuicklinksWidget quicklinks={data.quicklinks} />
            </div>
          </div>
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}