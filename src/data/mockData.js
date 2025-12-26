export const mockCourses = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    subject: 'Mathematics',
    class: '12th',
    instructor: 'Dr. Rajesh Kumar',
    description: 'Complete preparation for Class 12 Mathematics covering Calculus, Algebra, and more',
    totalVideos: 45,
    totalNotes: 30,
    duration: '60 hours',
    progress: 65,
    enrolled: true,
    thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=250&fit=crop',
  },
  {
    id: '2',
    title: 'Physics Fundamentals',
    subject: 'Physics',
    class: '11th',
    instructor: 'Prof. Anita Sharma',
    description: 'Master Physics concepts with in-depth explanations and practical examples',
    totalVideos: 38,
    totalNotes: 25,
    duration: '48 hours',
    progress: 40,
    enrolled: true,
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop',
  },
  {
    id: '3',
    title: 'English Literature',
    subject: 'English',
    class: '10th',
    instructor: 'Mrs. Priya Singh',
    description: 'Comprehensive study of prose, poetry, and grammar for Class 10 boards',
    totalVideos: 30,
    totalNotes: 20,
    duration: '35 hours',
    enrolled: false,
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop',
  },
  {
    id: '4',
    title: 'Chemistry Complete',
    subject: 'Chemistry',
    class: '12th',
    instructor: 'Dr. Vikram Patel',
    description: 'Organic, Inorganic, and Physical Chemistry for board exams',
    totalVideos: 50,
    totalNotes: 35,
    duration: '70 hours',
    enrolled: true,
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=250&fit=crop',
  },
  {
    id: '5',
    title: 'Computer Science Basics',
    subject: 'Computer Science',
    class: '9th',
    instructor: 'Mr. Arjun Mehta',
    description: 'Introduction to programming, algorithms, and computer fundamentals',
    totalVideos: 28,
    totalNotes: 18,
    duration: '32 hours',
    enrolled: false,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
  },
  {
    id: '6',
    title: 'Data Structures & Algorithms',
    subject: 'Computer Science',
    class: 'College',
    instructor: 'Prof. Amit Desai',
    description: 'Advanced DSA concepts for competitive programming and interviews',
    totalVideos: 65,
    totalNotes: 40,
    duration: '90 hours',
    enrolled: true,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
  },
];

export const mockVideos = [
  {
    id: 'v1',
    courseId: '1',
    title: 'Introduction to Limits',
    chapter: 'Chapter 1: Limits and Continuity',
    duration: '45:30',
    type: 'recorded',
    url: '#',
    watched: true,
  },
  {
    id: 'v2',
    courseId: '1',
    title: 'Differentiation Basics',
    chapter: 'Chapter 2: Differentiation',
    duration: '52:15',
    type: 'recorded',
    url: '#',
    watched: true,
  },
  {
    id: 'v3',
    courseId: '1',
    title: 'Integration Techniques',
    chapter: 'Chapter 3: Integration',
    duration: '60:00',
    type: 'recorded',
    url: '#',
    watched: false,
  },
];

export const mockNotes = [
  {
    id: 'n1',
    courseId: '1',
    title: 'Limits - Important Formulas',
    chapter: 'Chapter 1',
    type: 'pdf',
    downloadUrl: '#',
  },
  {
    id: 'n2',
    courseId: '1',
    title: 'Differentiation Rules',
    chapter: 'Chapter 2',
    type: 'text',
    content: 'Key differentiation rules and examples...',
  },
];

export const mockAssignments = [
  {
    id: 'a1',
    courseId: '1',
    title: 'Limits Practice Problems',
    dueDate: '2024-12-20',
    status: 'submitted',
    grade: 85,
  },
  {
    id: 'a2',
    courseId: '1',
    title: 'Differentiation Quiz',
    dueDate: '2024-12-25',
    status: 'pending',
  },
  {
    id: 'a3',
    courseId: '2',
    title: "Newton's Laws Application",
    dueDate: '2024-12-18',
    status: 'graded',
    grade: 92,
  },
];

export const classes = ['9th', '10th', '11th', '12th', 'College'];
export const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Computer Science',
  'History',
  'Geography',
];

// Mock notifications for different user roles
export const mockNotifications = {
  student: [
    {
      id: 'n1',
      type: 'assignment',
      title: 'New Assignment Posted',
      message: 'Dr. Rajesh Kumar posted a new assignment for Advanced Mathematics',
      timestamp: new Date(Date.now() - 30 * 60000).toISOString(), // 30 mins ago
      read: false,
    },
    {
      id: 'n2',
      type: 'certificate',
      title: 'Certificate Available',
      message: 'Your certificate for Physics Fundamentals is now ready to download',
      timestamp: new Date(Date.now() - 2 * 3600000).toISOString(), // 2 hours ago
      read: false,
    },
    {
      id: 'n3',
      type: 'enrollment',
      title: 'Course Enrollment Confirmed',
      message: 'You have successfully enrolled in Chemistry Complete',
      timestamp: new Date(Date.now() - 5 * 3600000).toISOString(), // 5 hours ago
      read: true,
    },
    {
      id: 'n4',
      type: 'general',
      title: 'Live Class Reminder',
      message: 'Live class for Advanced Mathematics starts in 1 hour',
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      read: true,
    },
  ],
  teacher: [
    {
      id: 't1',
      type: 'signup',
      title: 'New Student Signup',
      message: 'Priya Sharma signed up and enrolled in your Physics course',
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(), // 15 mins ago
      read: false,
    },
    {
      id: 't2',
      type: 'assignment',
      title: 'Assignment Submitted',
      message: '5 students submitted the Differentiation Quiz assignment',
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(), // 45 mins ago
      read: false,
    },
    {
      id: 't3',
      type: 'enrollment',
      title: 'Course Enrollment',
      message: '3 new students enrolled in Advanced Mathematics today',
      timestamp: new Date(Date.now() - 3 * 3600000).toISOString(), // 3 hours ago
      read: false,
    },
    {
      id: 't4',
      type: 'general',
      title: 'Course Milestone',
      message: 'Your Chemistry course reached 100 enrollments!',
      timestamp: new Date(Date.now() - 2 * 86400000).toISOString(), // 2 days ago
      read: true,
    },
  ],
  admin: [
    {
      id: 'a1',
      type: 'signup',
      title: 'New Student Registration',
      message: 'Rahul Verma (Class 12th) created a new student account',
      timestamp: new Date(Date.now() - 10 * 60000).toISOString(), // 10 mins ago
      read: false,
    },
    {
      id: 'a2',
      type: 'signup',
      title: 'New Teacher Registration',
      message: 'Dr. Neha Kapoor registered as a teacher for Biology',
      timestamp: new Date(Date.now() - 25 * 60000).toISOString(), // 25 mins ago
      read: false,
    },
    {
      id: 'a3',
      type: 'login',
      title: 'Multiple Failed Login Attempts',
      message: 'User account admin@test.com had 3 failed login attempts',
      timestamp: new Date(Date.now() - 60 * 60000).toISOString(), // 1 hour ago
      read: false,
    },
    {
      id: 'a4',
      type: 'enrollment',
      title: 'High Enrollment Activity',
      message: '25 new course enrollments in the last 24 hours',
      timestamp: new Date(Date.now() - 2 * 3600000).toISOString(), // 2 hours ago
      read: false,
    },
    {
      id: 'a5',
      type: 'login',
      title: 'Daily Login Report',
      message: '150 students and 15 teachers logged in today',
      timestamp: new Date(Date.now() - 4 * 3600000).toISOString(), // 4 hours ago
      read: true,
    },
    {
      id: 'a6',
      type: 'general',
      title: 'System Update',
      message: 'Platform maintenance scheduled for this weekend',
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      read: true,
    },
    {
      id: 'a7',
      type: 'signup',
      title: 'Weekly Signup Summary',
      message: '45 new users registered this week (32 students, 13 teachers)',
      timestamp: new Date(Date.now() - 2 * 86400000).toISOString(), // 2 days ago
      read: true,
    },
  ],
};
