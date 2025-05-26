import React from 'react';
import {
  User, Heart, Eye, EyeOff, Phone
} from 'lucide-react';

const LoginPage = ({ 
  loginMethod, 
  setLoginMethod, 
  formData, 
  handleInputChange, 
  handleLogin, 
  showPassword, 
  setShowPassword, 
  setCurrentPage 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Patient Portal</h1>
        <p className="text-gray-600 mt-2">Sign in to access your health dashboard</p>
      </div>

      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setLoginMethod('username')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${loginMethod === 'username'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
            }`}
        >
          <User className="w-4 h-4 inline mr-2" />
          Username
        </button>
        <button
          onClick={() => setLoginMethod('mobile')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${loginMethod === 'mobile'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
            }`}
        >
          <Phone className="w-4 h-4 inline mr-2" />
          Mobile
        </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        {loginMethod === 'username' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your mobile number"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="text-center mt-6">
        <button
          onClick={() => setCurrentPage('forgot-password')}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Forgot your password?
        </button>
      </div>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <span className="text-gray-600 text-sm">Don't have an account? </span>
        <button
          onClick={() => setCurrentPage('register')}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
);

export default LoginPage;
