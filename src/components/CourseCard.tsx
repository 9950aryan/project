import { Course } from '../data/mockData';
import { PlayCircle, FileText, Clock, User, Calculator, Atom, Beaker, Microscope, BookOpen, Code, Globe, Landmark } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
  showProgress?: boolean;
}

// Function to get subject icon and color
const getSubjectIcon = (subject: string) => {
  switch (subject.toLowerCase()) {
    case 'mathematics':
      return { icon: Calculator, color: 'from-purple-500 to-pink-600' };
    case 'physics':
      return { icon: Atom, color: 'from-blue-500 to-cyan-600' };
    case 'chemistry':
      return { icon: Beaker, color: 'from-green-500 to-emerald-600' };
    case 'biology':
      return { icon: Microscope, color: 'from-teal-500 to-green-600' };
    case 'english':
      return { icon: BookOpen, color: 'from-orange-500 to-red-600' };
    case 'computer science':
      return { icon: Code, color: 'from-indigo-500 to-purple-600' };
    case 'geography':
      return { icon: Globe, color: 'from-blue-500 to-green-500' };
    case 'history':
      return { icon: Landmark, color: 'from-yellow-500 to-orange-600' };
    default:
      return { icon: BookOpen, color: 'from-gray-500 to-gray-600' };
  }
};

export function CourseCard({ course, onSelect, showProgress }: CourseCardProps) {
  const { icon: SubjectIcon, color: gradientColor } = getSubjectIcon(course.subject);

  return (
    <div
      onClick={() => onSelect(course.id)}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
    >
      {/* Thumbnail with Dynamic Icon */}
      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradientColor}`}>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Subject Icon */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
          <SubjectIcon className="w-5 h-5 text-gray-800" />
        </div>
        
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs text-gray-700">
          Class {course.class}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mb-2">
            {course.subject}
          </span>
          <h3 className="text-gray-900 mb-1 line-clamp-1">{course.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
          <User className="w-4 h-4" />
          <span>{course.instructor}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <PlayCircle className="w-4 h-4" />
            <span>{course.totalVideos} videos</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{course.totalNotes} notes</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Progress or Enroll */}
        {showProgress && course.progress !== undefined ? (
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="text-blue-600">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(course.id);
            }}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
          </button>
        )}
      </div>
    </div>
  );
}