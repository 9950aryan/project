import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { StudentDashboard } from './components/StudentDashboard';
import { TeacherDashboard } from './components/TeacherDashboard';
import { AdminDashboard } from './components/AdminDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40">
      {user.role === 'student' && (
        <StudentDashboard user={user} onLogout={handleLogout} />
      )}
      {user.role === 'teacher' && (
        <TeacherDashboard user={user} onLogout={handleLogout} />
      )}
      {user.role === 'admin' && (
        <AdminDashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
