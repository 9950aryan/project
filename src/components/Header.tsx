import { User } from '../App';
import { GraduationCap, LogOut } from 'lucide-react';
import { useState } from 'react';
import { NotificationDropdown, Notification } from './NotificationDropdown';
import { mockNotifications } from '../data/mockData';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const [notifications, setNotifications] = useState<Notification[]>(
    mockNotifications[user.role]
  );

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-gray-900">Student Teach</h2>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <NotificationDropdown
              userRole={user.role}
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
              onClearAll={handleClearAll}
            />

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}