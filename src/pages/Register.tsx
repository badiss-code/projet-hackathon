import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Brain } from 'lucide-react';
import toast from 'react-hot-toast';

interface UserData {
  email: string;
  password: string;
  exerciseFrequency: string;
  sleepSchedule: string;
  stressLevel: string;
  interests: string[];
  socialPreference: string;
  meditationFrequency: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
    exerciseFrequency: '',
    sleepSchedule: '',
    stressLevel: '',
    interests: [],
    socialPreference: '',
    meditationFrequency: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      localStorage.setItem('userPreferences', JSON.stringify(userData));

      toast((t) => (
        <div className="p-4">
          <h3 className="font-bold">Welcome to MindBridge! 🎉</h3>
          <p className="mt-2">Based on your profile, we recommend:</p>
          <ul className="mt-2 list-disc pl-4">
            {userData.exerciseFrequency === 'frequent' && (
              <li>Morning exercise routines for mental clarity</li>
            )}
            {userData.stressLevel === 'high' && (
              <li>Daily meditation sessions</li>
            )}
            {userData.interests.includes('reading') && (
              <li>Therapeutic reading sessions</li>
            )}
            {userData.sleepSchedule === 'irregular' && (
              <li>Sleep hygiene workshop</li>
            )}
          </ul>
          <button
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
            onClick={() => {
              toast.dismiss(t.id);
              navigate('/dashboard');
            }}
          >
            Get Started
          </button>
        </div>
      ), { duration: 10000 });
    } catch (error) {
      toast.error('Failed to create account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <Brain className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join MindBridge and start your wellness journey
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Account Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={userData.password}
                    onChange={(e) => setUserData({...userData, password: e.target.value})}
                  />
                </div>
              </div>

              {/* Health & Wellness */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Health & Wellness</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How often do you exercise?
                  </label>
                  <select
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={userData.exerciseFrequency}
                    onChange={(e) => setUserData({...userData, exerciseFrequency: e.target.value})}
                  >
                    <option value="">Select frequency</option>
                    <option value="frequent">4+ times a week</option>
                    <option value="moderate">2-3 times a week</option>
                    <option value="rare">Once a week or less</option>
                    <option value="never">Never</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Sleep Schedule
                  </label>
                  <select
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={userData.sleepSchedule}
                    onChange={(e) => setUserData({...userData, sleepSchedule: e.target.value})}
                  >
                    <option value="">Select schedule</option>
                    <option value="regular">Regular (7-9 hours)</option>
                    <option value="irregular">Irregular</option>
                    <option value="insufficient">Less than 6 hours</option>
                    <option value="excessive">More than 9 hours</option>
                  </select>
                </div>
              </div>

              {/* Mental Wellness */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Mental Wellness</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current Stress Level
                  </label>
                  <select
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={userData.stressLevel}
                    onChange={(e) => setUserData({...userData, stressLevel: e.target.value})}
                  >
                    <option value="">Select level</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                    <option value="severe">Severe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How often do you meditate?
                  </label>
                  <select
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={userData.meditationFrequency}
                    onChange={(e) => setUserData({...userData, meditationFrequency: e.target.value})}
                  >
                    <option value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="rarely">Rarely</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Interests</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select your interests (multiple)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['reading', 'music', 'art', 'sports', 'meditation', 'yoga'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={userData.interests.includes(interest)}
                          onChange={(e) => {
                            const newInterests = e.target.checked
                              ? [...userData.interests, interest]
                              : userData.interests.filter(i => i !== interest);
                            setUserData({...userData, interests: newInterests});
                          }}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700 capitalize">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}