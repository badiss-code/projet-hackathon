import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Calendar, MessageCircle, Book, Activity } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const resources = [
    {
      title: "Guided Meditation",
      description: "10-minute mindfulness session",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      category: "Wellness"
    },
    {
      title: "Stress Management",
      description: "Tips for exam season",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      category: "Academic"
    },
    {
      title: "Sleep Hygiene",
      description: "Improve your sleep quality",
      image: "https://images.unsplash.com/photo-1511295742362-92c96b5adb36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      category: "Health"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.email}</h1>
        <p className="text-gray-600">Your mental wellness journey continues here.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-indigo-600" />
          <span>Book Session</span>
        </button>
        <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-indigo-600" />
          <span>Chat Support</span>
        </button>
        <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2">
          <Book className="h-5 w-5 text-indigo-600" />
          <span>Resources</span>
        </button>
        <button className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2">
          <Activity className="h-5 w-5 text-indigo-600" />
          <span>Mood Tracker</span>
        </button>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                {resource.category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{resource.title}</h3>
              <p className="mt-1 text-gray-600">{resource.description}</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}