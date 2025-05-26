import React, { useState, useEffect, useCallback } from 'react';

// Import components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Import pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './pages/Dashboard';
import HealthTracking from './pages/HealthTracking';
import Appointments from './pages/Appointments';
import MedicalRecords from './pages/MedicalRecords';
import Settings from './pages/Settings';

const PatientPortal = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('username');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    username: '',
    mobile: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setCurrentPage('login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
    setDropdownOpen(null);
  };

  // Main render function
  const renderCurrentPage = () => {
    if (!isLoggedIn) {
      switch (currentPage) {
        case 'register':
          return (
            <RegisterPage
              formData={formData}
              handleInputChange={handleInputChange}
              handleRegister={handleRegister}
              setCurrentPage={setCurrentPage}
            />
          );
        case 'forgot-password':
          return <ForgotPasswordPage setCurrentPage={setCurrentPage} />;
        default:
          return (
            <LoginPage
              loginMethod={loginMethod}
              setLoginMethod={setLoginMethod}
              formData={formData}
              handleInputChange={handleInputChange}
              handleLogin={handleLogin}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setCurrentPage={setCurrentPage}
            />
          );
      }
    }

    return (
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="flex-1 lg:ml-0">
          <Header
            setSidebarOpen={setSidebarOpen}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            handleLogout={handleLogout}
          />
          <main className="flex-1">
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'health' && <HealthTracking />}
            {currentPage === 'appointments' && <Appointments />}
            {currentPage === 'records' && <MedicalRecords />}
            {currentPage === 'settings' && <Settings />}
          </main>
        </div>
      </div>
    );
  };

  return renderCurrentPage();
};

export default PatientPortal;
