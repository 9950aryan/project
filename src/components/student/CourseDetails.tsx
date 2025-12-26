import { useState } from 'react';
import { User } from '../../App';
import { Header } from '../Header';
import { mockCourses, mockVideos, mockNotes } from '../../data/mockData';
import {
  ArrowLeft,
  PlayCircle,
  FileText,
  Download,
  CheckCircle,
  Clock,
} from 'lucide-react';

interface CourseDetailsProps {
  courseId: string;
  onBack: () => void;
  user: User;
  onLogout: () => void;
}

type TabType = 'videos' | 'notes';

export function CourseDetails({
  courseId,
  onBack,
  user,
  onLogout,
}: CourseDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('videos');
  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  const courseVideos = mockVideos.filter((v) => v.courseId === courseId);
  const courseNotes = mockNotes.filter((n) => n.courseId === courseId);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Courses
        </button>

        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-br from-blue-500 to-indigo-600">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3">
                {course.subject} • Class {course.class}
              </span>
              <h1 className="text-white mb-2">{course.title}</h1>
              <p className="text-white/90 mb-4">{course.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {course.instructor.charAt(0)}
                </div>
                <div>
                  <p className="text-sm">{course.instructor}</p>
                  <p className="text-xs text-white/70">Instructor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {course.progress !== undefined && (
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Course Progress</span>
                <span className="text-blue-600">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 p-6">
            <div className="text-center">
              <PlayCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">Videos</p>
              <p className="text-gray-900">{course.totalVideos}</p>
            </div>
            <div className="text-center">
              <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-gray-600">Notes</p>
              <p className="text-gray-900">{course.totalNotes}</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-gray-600">Duration</p>
              <p className="text-gray-900">{course.duration}</p>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex gap-1 p-2">
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'videos'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <PlayCircle className="w-5 h-5" />
                Videos ({courseVideos.length})
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'notes'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText className="w-5 h-5" />
                Notes ({courseNotes.length})
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'videos' && (
              <div className="space-y-4">
                {courseVideos.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer group"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        video.watched
                          ? 'bg-green-100 text-green-600'
                          : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                      }`}
                    >
                      {video.watched ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <PlayCircle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{video.title}</h4>
                      <p className="text-gray-600 text-sm">{video.chapter}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {video.type === 'live' && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                          LIVE
                        </span>
                      )}
                      <span className="text-gray-600 text-sm">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                ))}
                {courseVideos.length === 0 && (
                  <p className="text-center text-gray-600 py-8">
                    No videos available yet
                  </p>
                )}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                {courseNotes.map((note) => (
                  <div
                    key={note.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-200">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{note.title}</h4>
                      <p className="text-gray-600 text-sm">{note.chapter}</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm uppercase">
                        {note.type}
                      </span>
                    </button>
                  </div>
                ))}
                {courseNotes.length === 0 && (
                  <p className="text-center text-gray-600 py-8">
                    No notes available yet
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
