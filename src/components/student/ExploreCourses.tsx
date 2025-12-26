import { useState } from 'react';
import { mockCourses, classes, subjects } from '../../data/mockData';
import { CourseCard } from '../CourseCard';
import { Search, Filter } from 'lucide-react';

interface ExploreCoursesProps {
  onSelectCourse: (courseId: string) => void;
}

export function ExploreCourses({ onSelectCourse }: ExploreCoursesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === 'all' || course.class === selectedClass;
    const matchesSubject =
      selectedSubject === 'all' || course.subject === selectedSubject;
    return matchesSearch && matchesClass && matchesSubject;
  });

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">Explore Courses</h2>
        <p className="text-gray-600">
          Discover courses across different subjects and classes
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses, subjects, or instructors..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Class Filter */}
          <div>
            <label className="block text-gray-700 mb-2">
              <Filter className="inline w-4 h-4 mr-2" />
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Classes</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-gray-700 mb-2">
              <Filter className="inline w-4 h-4 mr-2" />
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedClass('all');
                setSelectedSubject('all');
              }}
              className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}{' '}
          found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={onSelectCourse}
            showProgress={false}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <p className="text-gray-600">
            No courses found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}
