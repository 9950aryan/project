import { useState } from 'react';
import { GraduationCap, Mail, Lock, UserCircle } from 'lucide-react';

export function LoginPage({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate role-specific demo names
    const demoNames = {
      student: 'Rahul Sharma',
      teacher: 'Dr. Priya Patel',
      admin: 'Admin Kumar'
    };
    
    // Mock login - in production, this would validate against backend
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: isSignup ? name : demoNames[role],
      email,
      role: role || 'student',
    };
    
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white p-3 rounded-xl">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-white text-4xl">Student Teach</h1>
          </div>
          <p className="text-blue-100">
            {isSignup ? 'Create your account' : 'Welcome back! Please login to continue'}
          </p>
        </div>

        {/* Login/Signup Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignup && (
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required={isSignup}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {isSignup && (
              <div>
                <label className="block text-gray-700 mb-2">I am a...</label>
                <div className="grid grid-cols-3 gap-3">
                  {['student', 'teacher', 'admin'].map((roleOption) => (
                    <button
                      key={roleOption}
                      type="button"
                      onClick={() => setRole(roleOption)}
                      className={`py-2 px-4 rounded-lg border-2 transition-all capitalize ${
                        role === roleOption
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {roleOption}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isSignup ? 'Create Account' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 hover:text-blue-700"
            >
              {isSignup
                ? 'Already have an account? Login'
                : "Don't have an account? Sign up"}
            </button>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Quick Demo Access:</p>
            <div className="space-y-1 text-xs text-gray-500">
              <p>• Any email/password works for demo</p>
              <p>• Select your role during signup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
