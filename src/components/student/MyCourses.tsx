import { mockCourses } from '../../data/mockData';
import { CourseCard } from '../CourseCard';
import { BookOpen } from 'lucide-react';

interface MyCoursesProps {
  onSelectCourse: (courseId: string) => void;
}

export function MyCourses({ onSelectCourse }: MyCoursesProps) {
  const enrolledCourses = mockCourses.filter((course) => course.enrolled);

  if (enrolledCourses.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-gray-900 mb-2">No enrolled courses yet</h3>
        <p className="text-gray-600">
          Explore courses and start your learning journey
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">My Courses</h2>
        <p className="text-gray-600">
          {enrolledCourses.length} course{enrolledCourses.length !== 1 ? 's' : ''}{' '}
          in progress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={onSelectCourse}
            showProgress
          />
        ))}
      </div>
    </div>
  );
}
