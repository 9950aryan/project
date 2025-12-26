import { useState } from 'react';
import { User } from '../App';
import { Header } from './Header';
import { MyCourses } from './student/MyCourses';
import { ExploreCourses } from './student/ExploreCourses';
import { MyAssignments } from './student/MyAssignments';
import { CourseDetails } from './student/CourseDetails';
import { BookOpen, Search, FileText, Award } from 'lucide-react';

interface StudentDashboardProps {
  user: User;
  onLogout: () => void;
}

type TabType = 'my-courses' | 'explore' | 'assignments' | 'certificates';

export function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('my-courses');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const tabs = [
    { id: 'my-courses' as const, label: 'My Courses', icon: BookOpen },
    { id: 'explore' as const, label: 'Explore', icon: Search },
    { id: 'assignments' as const, label: 'Assignments', icon: FileText },
    { id: 'certificates' as const, label: 'Certificates', icon: Award },
  ];

  if (selectedCourseId) {
    return (
      <CourseDetails
        courseId={selectedCourseId}
        onBack={() => setSelectedCourseId(null)}
        user={user}
        onLogout={onLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-gray-600">Continue your learning journey</p>
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
            <MyCourses onSelectCourse={setSelectedCourseId} />
          )}
          {activeTab === 'explore' && (
            <ExploreCourses onSelectCourse={setSelectedCourseId} />
          )}
          {activeTab === 'assignments' && <MyAssignments />}
          {activeTab === 'certificates' && (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-gray-900 mb-2">Your Certificates</h3>
              <p className="text-gray-600 mb-6">
                Complete courses to earn certificates
              </p>
              <div className="text-gray-500">No certificates earned yet</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
