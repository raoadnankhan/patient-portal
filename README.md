# Patient Portal - Modular React Application

A comprehensive patient portal application built with React, featuring health tracking, appointments, medical records, and more.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Main navigation header with dropdowns
│   └── Sidebar.js      # Navigation sidebar with menu items
├── pages/              # Page components for different sections
│   ├── LoginPage.js    # User authentication (login)
│   ├── RegisterPage.js # User registration
│   ├── ForgotPasswordPage.js # Password reset
│   ├── Dashboard.js    # Main dashboard with health overview
│   ├── HealthTracking.js # Comprehensive health metrics tracking
│   ├── Appointments.js # Appointment management
│   ├── MedicalRecords.js # Medical records viewer
│   └── Settings.js     # User settings and preferences
├── App.js              # Main application component
└── index.js            # Application entry point
```

## Features

### Authentication
- **Login Page**: Username/mobile login with password visibility toggle
- **Registration**: Complete user registration form
- **Password Reset**: Forgot password functionality

### Dashboard
- Health metrics overview cards
- Recent lab results
- Heart rate trend charts
- Quick access to key information

### Health Tracking
- **Interactive Charts**: Switch between Heart Rate, Blood Pressure, and Weight metrics
- **Data Entry Form**: Add new health readings with date/time
- **Current Readings**: Display latest vital signs
- **Reading History**: View recent measurements with status indicators
- **Health Goals**: Visual progress tracking with target ranges

### Layout Components
- **Header**: Navigation with profile, messages, and alerts dropdowns
- **Sidebar**: Collapsible navigation menu with hover effects

## Key Technologies

- **React**: Component-based UI framework
- **Recharts**: Interactive chart library for health data visualization
- **Lucide React**: Modern icon library
- **Tailwind CSS**: Utility-first CSS framework for styling

## Component Architecture

### Modular Design
The application follows a modular architecture with clear separation of concerns:

- **Components**: Reusable UI elements (Header, Sidebar)
- **Pages**: Feature-specific components for different sections
- **State Management**: Centralized in App.js with prop drilling for simplicity

### Props Flow
- Authentication state and handlers passed to auth pages
- Navigation state managed in App.js and passed to layout components
- Each page component is self-contained with its own state management

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application

## Health Tracking Features

### Metrics Supported
- **Heart Rate**: BPM tracking with trend analysis
- **Blood Pressure**: Systolic/Diastolic measurements
- **Weight**: Weight tracking with goal progress

### Data Visualization
- Interactive line charts for each metric
- Responsive design that adapts to different screen sizes
- Tooltip information for detailed data points

### Goals Tracking
- Visual progress bars for each health metric
- Target ranges with percentage completion
- Color-coded indicators (green for on-track, yellow for attention needed)

## Future Enhancements

- Backend API integration for data persistence
- Real-time notifications for health alerts
- Advanced reporting and analytics
- Mobile app companion
- Integration with wearable devices
