import { useState } from 'react';
import { User } from '../App';
import { Header } from './Header';
import {
  Users,
  BookOpen,
  BarChart3,
  Settings,
  UserPlus,
  TrendingUp,
} from 'lucide-react';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

type TabType = 'overview' | 'users' | 'courses' | 'settings';

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
    { id: 'users' as const, label: 'Users', icon: Users },
    { id: 'courses' as const, label: 'Courses', icon: BookOpen },
    { id: 'settings' as const, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Admin Dashboard 🎯</h1>
          <p className="text-gray-600">
            Manage platform users, courses, and content
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8 p-2">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-gray-900 mb-1">1,234</h3>
                  <p className="text-gray-600">Total Students</p>
                  <p className="text-sm text-green-600 mt-2">+12% this month</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-gray-900 mb-1">45</h3>
                  <p className="text-gray-600">Total Teachers</p>
                  <p className="text-sm text-green-600 mt-2">+3 new this month</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-gray-900 mb-1">156</h3>
                  <p className="text-gray-600">Total Courses</p>
                  <p className="text-sm text-green-600 mt-2">+8 new courses</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-gray-900 mb-1">89%</h3>
                  <p className="text-gray-600">Avg. Completion</p>
                  <p className="text-sm text-green-600 mt-2">+5% improvement</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    {
                      action: 'New user registration',
                      user: 'Student John Doe',
                      time: '5 minutes ago',
                    },
                    {
                      action: 'Course published',
                      user: 'Teacher Dr. Kumar',
                      time: '1 hour ago',
                    },
                    {
                      action: 'Assignment submitted',
                      user: 'Student Jane Smith',
                      time: '2 hours ago',
                    },
                    {
                      action: 'New teacher joined',
                      user: 'Prof. Anita Sharma',
                      time: '3 hours ago',
                    },
                  ].map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                    >
                      <div>
                        <p className="text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.user}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-gray-900 mb-1">User Management</h2>
                  <p className="text-gray-600">Manage students, teachers, and admins</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <UserPlus className="w-5 h-5" />
                  Add User
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-700">User</th>
                      <th className="px-6 py-4 text-left text-gray-700">Role</th>
                      <th className="px-6 py-4 text-left text-gray-700">Status</th>
                      <th className="px-6 py-4 text-left text-gray-700">Joined</th>
                      <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { name: 'John Doe', role: 'student', status: 'active', date: '2024-01-15' },
                      { name: 'Dr. Kumar', role: 'teacher', status: 'active', date: '2024-01-10' },
                      { name: 'Jane Smith', role: 'student', status: 'active', date: '2024-01-12' },
                      { name: 'Prof. Sharma', role: 'teacher', status: 'active', date: '2024-01-08' },
                    ].map((userItem, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                              {userItem.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-gray-900">{userItem.name}</p>
                              <p className="text-sm text-gray-600">
                                {userItem.name.toLowerCase().replace(' ', '')}@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs capitalize ${
                            userItem.role === 'teacher'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {userItem.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs capitalize">
                            {userItem.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {new Date(userItem.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-700 text-sm">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-gray-900 mb-1">Course Management</h2>
                  <p className="text-gray-600">Manage all courses and content</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <BookOpen className="w-5 h-5" />
                  Approve Courses
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Pending Approval', 'Active', 'Draft'].map((status, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-900">{status}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        status === 'Pending Approval'
                          ? 'bg-yellow-100 text-yellow-700'
                          : status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {i === 0 ? '12' : i === 1 ? '128' : '16'} courses
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {status === 'Pending Approval'
                        ? 'Review and approve new courses'
                        : status === 'Active'
                        ? 'Currently available to students'
                        : 'Courses in draft mode'}
                    </p>
                    <button className="text-blue-600 hover:text-blue-700">
                      View All →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Platform Settings</h2>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-gray-700 mb-2">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="Student Teach"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Support Email</label>
                  <input
                    type="email"
                    defaultValue="support@studentteach.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">
                      Allow new user registrations
                    </span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">
                      Require email verification
                    </span>
                  </label>
                </div>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
