import React from 'react';
import {
  User, Bell, MessageCircle, ChevronDown, LogOut, Menu
} from 'lucide-react';

const Header = ({ setSidebarOpen, dropdownOpen, setDropdownOpen, handleLogout }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(dropdownOpen === 'profile' ? null : 'profile')}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <User className="w-5 h-5 text-gray-600" />
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
          {dropdownOpen === 'profile' && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Settings</a>
              <hr className="my-2" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Messages Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(dropdownOpen === 'messages' ? null : 'messages')}
            className="p-2 rounded-lg hover:bg-gray-100 relative"
          >
            <MessageCircle className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>
          {dropdownOpen === 'messages' && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Messages</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-900">Dr. Smith</p>
                  <p className="text-sm text-gray-600">Your test results are ready</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-900">Appointment Reminder</p>
                  <p className="text-sm text-gray-600">Tomorrow at 2:00 PM</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Alerts Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(dropdownOpen === 'alerts' ? null : 'alerts')}
            className="p-2 rounded-lg hover:bg-gray-100 relative"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
          </button>
          {dropdownOpen === 'alerts' && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Alerts</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-gray-50 border-l-4 border-red-400">
                  <p className="text-sm font-medium text-red-900">High Blood Pressure Alert</p>
                  <p className="text-sm text-gray-600">Reading: 160/95 mmHg</p>
                  <p className="text-xs text-gray-500 mt-1">30 minutes ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 border-l-4 border-yellow-400">
                  <p className="text-sm font-medium text-yellow-900">Medication Reminder</p>
                  <p className="text-sm text-gray-600">Take your evening medication</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
