import React from 'react';
import {
  Home, Calendar, FileText, Heart, Settings, X
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, currentPage, setCurrentPage }) => {
  const navigationItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', subItems: [] },
    {
      id: 'appointments',
      icon: Calendar,
      label: 'Appointments',
      subItems: ['Schedule', 'History', 'Upcoming']
    },
    {
      id: 'records',
      icon: FileText,
      label: 'Medical Records',
      subItems: ['Lab Results', 'Prescriptions', 'Reports']
    },
    {
      id: 'health',
      icon: Heart,
      label: 'Health Tracking',
      subItems: ['Heart Rate', 'Blood Pressure', 'Weight']
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings',
      subItems: ['Profile', 'Privacy', 'Notifications']
    }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:shadow-none`}>
        <div className="p-6 border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.id} className="group">
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 group ${currentPage === item.id
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>

                {/* Submenu */}
                {item.subItems.length > 0 && (
                  <div className="ml-8 mt-2 space-y-1 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300">
                    {item.subItems.map((subItem, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
