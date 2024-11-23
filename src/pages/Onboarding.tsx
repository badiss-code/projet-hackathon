import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Dumbbell, Book, Coffee, Headphones, Camera } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Onboarding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    exerciseFrequency: '',
    musicPreference: '',
    readingHabits: '',
    socialActivities: '',
    stressLevel: '',
    sleepQuality: '',
    hobbies: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user preferences in localStorage or Firebase
    localStorage.setItem('userPreferences', JSON.stringify(formData));
    
    // Show personalized recommendation
    toast((t) => (
      <div className="p-4">
        <h3 className="font-bold">Personalized Recommendation</h3>
        <p className="mt-2">Based on your preferences, we recommend:</p>
        <ul className="mt-2 list-disc pl-4">
          {formData.exerciseFrequency === 'regular' && (
            <li>Morning yoga sessions for mental clarity</li>
          )}
          {formData.musicPreference === 'yes' && (
            <li>Daily music meditation sessions</li>
          )}
          {formData.stressLevel === 'high' && (
            <li>Guided breathing exercises</li>
          )}
        </ul>
        <button
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={() => {
            toast.dismiss(t.id);
            navigate('/dashboard');
          }}
        >
          Got it!
        </button>
      </div>
    ), { duration: 10000 });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Let's Personalize Your Experience</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Exercise Habits</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">How often do you exercise?</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                value={formData.exerciseFrequency}
                onChange={(e) => setFormData({...formData, exerciseFrequency: e.target.value})}
                required
              >
                <option value="">Select frequency</option>
                <option value="regular">Regularly (3+ times/week)</option>
                <option value="sometimes">Sometimes (1-2 times/week)</option>
                <option value="rarely">Rarely</option>
                <option value="never">Never</option>
              </select>
            </label>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Interests & Hobbies</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="music"
                checked={formData.hobbies.includes('music')}
                onChange={(e) => {
                  const newHobbies = e.target.checked 
                    ? [...formData.hobbies, 'music']
                    : formData.hobbies.filter(h => h !== 'music');
                  setFormData({...formData, hobbies: newHobbies});
                }}
                className="rounded text-indigo-600"
              />
              <label htmlFor="music" className="flex items-center space-x-2">
                <Music className="h-5 w-5 text-indigo-600" />
                <span>Music</span>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="reading"
                checked={formData.hobbies.includes('reading')}
                onChange={(e) => {
                  const newHobbies = e.target.checked 
                    ? [...formData.hobbies, 'reading']
                    : formData.hobbies.filter(h => h !== 'reading');
                  setFormData({...formData, hobbies: newHobbies});
                }}
                className="rounded text-indigo-600"
              />
              <label htmlFor="reading" className="flex items-center space-x-2">
                <Book className="h-5 w-5 text-indigo-600" />
                <span>Reading</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Stress & Sleep</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">How would you rate your current stress level?</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                value={formData.stressLevel}
                onChange={(e) => setFormData({...formData, stressLevel: e.target.value})}
                required
              >
                <option value="">Select stress level</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
                <option value="severe">Severe</option>
              </select>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
}