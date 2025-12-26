import { useState } from 'react';
import { User } from '../App';
import { Header } from './Header';
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Upload,
  Plus,
} from 'lucide-react';

interface TeacherDashboardProps {
  user: User;
  onLogout: () => void;
}

type TabType = 'my-courses' | 'upload-video' | 'upload-notes' | 'students';

export function TeacherDashboard({ user, onLogout }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('my-courses');

  const tabs = [
    { id: 'my-courses' as const, label: 'My Courses', icon: BookOpen },
    { id: 'upload-video' as const, label: 'Upload Video', icon: Video },
    { id: 'upload-notes' as const, label: 'Upload Notes', icon: FileText },
    { id: 'students' as const, label: 'Students', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Welcome, {user.name}! 👨‍🏫</h1>
          <p className="text-gray-600">Manage your courses and students</p>
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
          {activeTab === 'my-courses' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-gray-900 mb-1">My Courses</h2>
                  <p className="text-gray-600">Courses you're teaching</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  Create Course
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock courses taught by teacher */}
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-gray-900 mb-1">
                          {i === 1 ? 'Advanced Mathematics' : 'Physics Fundamentals'}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Class {i === 1 ? '12th' : '11th'}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{i === 1 ? '45' : '38'} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        <span>{i === 1 ? '45' : '38'} videos</span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Manage Course
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'upload-video' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <Video className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-gray-900 mb-2">Upload Video Lecture</h2>
                  <p className="text-gray-600">
                    Upload recorded videos or schedule live classes
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Course</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Advanced Mathematics - Class 12th</option>
                      <option>Physics Fundamentals - Class 11th</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Chapter</label>
                    <input
                      type="text"
                      placeholder="e.g., Chapter 1: Limits and Continuity"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Video Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Introduction to Limits"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Video Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="px-4 py-3 border-2 border-blue-600 bg-blue-50 text-blue-700 rounded-lg"
                      >
                        Recorded
                      </button>
                      <button
                        type="button"
                        className="px-4 py-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-gray-400"
                      >
                        Live
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Upload Video</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-gray-500 text-sm">MP4, AVI, MOV (max 500MB)</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Upload Video
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'upload-notes' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <FileText className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h2 className="text-gray-900 mb-2">Upload Study Notes</h2>
                  <p className="text-gray-600">
                    Share chapter-wise notes and study materials
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Course</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Advanced Mathematics - Class 12th</option>
                      <option>Physics Fundamentals - Class 11th</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Chapter</label>
                    <input
                      type="text"
                      placeholder="e.g., Chapter 1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Notes Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Important Formulas and Concepts"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Upload File</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-gray-500 text-sm">PDF, DOC, DOCX (max 10MB)</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Upload Notes
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div>
              <div className="mb-6">
                <h2 className="text-gray-900 mb-1">Enrolled Students</h2>
                <p className="text-gray-600">Students enrolled in your courses</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-700">Student</th>
                      <th className="px-6 py-4 text-left text-gray-700">Course</th>
                      <th className="px-6 py-4 text-left text-gray-700">Progress</th>
                      <th className="px-6 py-4 text-left text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                              S{i}
                            </div>
                            <div>
                              <p className="text-gray-900">Student {i}</p>
                              <p className="text-sm text-gray-600">
                                student{i}@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          Advanced Mathematics
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${(i * 20) % 100}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">
                              {(i * 20) % 100}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
