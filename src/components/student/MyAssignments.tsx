import { mockAssignments, mockCourses } from '../../data/mockData';
import { Calendar, CheckCircle, Clock, Award } from 'lucide-react';

export function MyAssignments() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-blue-100 text-blue-700';
      case 'graded':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <CheckCircle className="w-4 h-4" />;
      case 'graded':
        return <Award className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">My Assignments</h2>
        <p className="text-gray-600">
          Track your assignments and submissions
        </p>
      </div>

      <div className="space-y-4">
        {mockAssignments.map((assignment) => {
          const course = mockCourses.find((c) => c.id === assignment.courseId);
          return (
            <div
              key={assignment.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{assignment.title}</h3>
                  <p className="text-gray-600">{course?.title}</p>
                </div>
                <span
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${getStatusColor(
                    assignment.status
                  )}`}
                >
                  {getStatusIcon(assignment.status)}
                  {assignment.status}
                </span>
              </div>

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
                {assignment.grade !== undefined && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span>Grade: {assignment.grade}%</span>
                  </div>
                )}
              </div>

              {assignment.status === 'pending' && (
                <div className="mt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Assignment
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {mockAssignments.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <p className="text-gray-600">No assignments yet</p>
        </div>
      )}
    </div>
  );
}
