import React, { useState } from 'react';
import {
  Heart, TrendingUp, BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HealthTracking = () => {
  const [selectedMetric, setSelectedMetric] = useState('heartRate');
  const [newReading, setNewReading] = useState({
    heartRate: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    weight: '',
    temperature: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5)
  });

  // Sample data for different metrics
  const heartRateData = [
    { date: '01/01', bpm: 72, time: '08:00' },
    { date: '01/02', bpm: 68, time: '08:15' },
    { date: '01/03', bpm: 75, time: '07:45' },
    { date: '01/04', bpm: 70, time: '08:30' },
    { date: '01/05', bpm: 73, time: '08:00' },
    { date: '01/06', bpm: 69, time: '08:20' },
    { date: '01/07', bpm: 71, time: '07:55' }
  ];

  const bloodPressureData = [
    { date: '01/01', systolic: 120, diastolic: 80 },
    { date: '01/02', systolic: 118, diastolic: 78 },
    { date: '01/03', systolic: 122, diastolic: 82 },
    { date: '01/04', systolic: 119, diastolic: 79 },
    { date: '01/05', systolic: 121, diastolic: 81 },
    { date: '01/06', systolic: 117, diastolic: 77 },
    { date: '01/07', systolic: 120, diastolic: 80 }
  ];

  const weightData = [
    { date: '01/01', weight: 175 },
    { date: '01/02', weight: 174.5 },
    { date: '01/03', weight: 174.8 },
    { date: '01/04', weight: 174.2 },
    { date: '01/05', weight: 174.0 },
    { date: '01/06', weight: 173.8 },
    { date: '01/07', weight: 173.5 }
  ];

  const handleInputChange = (e) => {
    setNewReading({ ...newReading, [e.target.name]: e.target.value });
  };

  const handleSubmitReading = (e) => {
    e.preventDefault();
    // Here you would typically save the reading to a database
    alert('Reading saved successfully!');
    setNewReading({
      heartRate: '',
      bloodPressureSystolic: '',
      bloodPressureDiastolic: '',
      weight: '',
      temperature: '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5)
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Health Tracking</h1>
          <p className="text-gray-600 mt-1">Monitor your vital signs and health metrics</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Export Data
        </button>
      </div>

      {/* Metric Selection Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setSelectedMetric('heartRate')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedMetric === 'heartRate'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Heart className="w-4 h-4 inline mr-2" />
            Heart Rate
          </button>
          <button
            onClick={() => setSelectedMetric('bloodPressure')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedMetric === 'bloodPressure'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Blood Pressure
          </button>
          <button
            onClick={() => setSelectedMetric('weight')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedMetric === 'weight'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <BarChart3 className="w-4 h-4 inline mr-2" />
            Weight
          </button>
        </div>

        {/* Chart Display */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {selectedMetric === 'heartRate' && (
              <LineChart data={heartRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} BPM`, 'Heart Rate']} />
                <Line type="monotone" dataKey="bpm" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            )}
            {selectedMetric === 'bloodPressure' && (
              <LineChart data={bloodPressureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#3B82F6" strokeWidth={2} name="Systolic" />
                <Line type="monotone" dataKey="diastolic" stroke="#10B981" strokeWidth={2} name="Diastolic" />
              </LineChart>
            )}
            {selectedMetric === 'weight' && (
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} lbs`, 'Weight']} />
                <Line type="monotone" dataKey="weight" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Stats Cards */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Current Readings</h3>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Heart Rate</span>
              <span className="font-bold text-gray-900">71 BPM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Blood Pressure</span>
              <span className="font-bold text-gray-900">120/80</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Weight</span>
              <span className="font-bold text-gray-900">173.5 lbs</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Updated</span>
              <span className="text-sm text-gray-500">Today, 7:55 AM</span>
            </div>
          </div>
        </div>

        {/* Add New Reading Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Reading</h3>
          <form onSubmit={handleSubmitReading} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newReading.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  value={newReading.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Heart Rate (BPM)</label>
              <input
                type="number"
                name="heartRate"
                value={newReading.heartRate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="72"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Systolic BP</label>
                <input
                  type="number"
                  name="bloodPressureSystolic"
                  value={newReading.bloodPressureSystolic}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="120"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Diastolic BP</label>
                <input
                  type="number"
                  name="bloodPressureDiastolic"
                  value={newReading.bloodPressureDiastolic}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="80"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs)</label>
              <input
                type="number"
                step="0.1"
                name="weight"
                value={newReading.weight}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="175.0"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Reading
            </button>
          </form>
        </div>

        {/* Recent Readings History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Readings</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">01/07 - 7:55 AM</p>
                <p className="text-sm text-gray-600">Heart Rate: 71 BPM</p>
              </div>
              <span className="text-green-600 text-sm">Normal</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">01/06 - 8:20 AM</p>
                <p className="text-sm text-gray-600">BP: 117/77 mmHg</p>
              </div>
              <span className="text-green-600 text-sm">Normal</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">01/05 - 8:00 AM</p>
                <p className="text-sm text-gray-600">Weight: 174.0 lbs</p>
              </div>
              <span className="text-blue-600 text-sm">-1.5 lbs</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">01/04 - 8:30 AM</p>
                <p className="text-sm text-gray-600">Heart Rate: 70 BPM</p>
              </div>
              <span className="text-green-600 text-sm">Normal</span>
            </div>
          </div>
          <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All History
          </button>
        </div>
      </div>

      {/* Health Goals Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Goals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-medium text-gray-900">Heart Rate</h4>
            <p className="text-sm text-gray-600 mt-1">Target: 60-100 BPM</p>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">85% within target</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900">Blood Pressure</h4>
            <p className="text-sm text-gray-600 mt-1">Target: &lt;120/80 mmHg</p>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">92% within target</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900">Weight</h4>
            <p className="text-sm text-gray-600 mt-1">Goal: 170 lbs</p>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">3.5 lbs to goal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTracking;
