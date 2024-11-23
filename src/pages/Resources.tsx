import React from 'react';
import { Book, Video, FileText, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: "Understanding Anxiety",
    type: "article",
    description: "Learn about different types of anxiety and effective coping mechanisms",
    icon: FileText,
    link: "#",
    category: "Mental Health",
    readTime: "5 min read"
  },
  {
    title: "Guided Meditation Series",
    type: "video",
    description: "A collection of guided meditations for stress relief and mindfulness",
    icon: Video,
    link: "#",
    category: "Wellness",
    duration: "10-15 min each"
  },
  {
    title: "Effective Study Techniques",
    type: "guide",
    description: "Research-backed methods to improve your study habits and reduce academic stress",
    icon: Book,
    link: "#",
    category: "Academic",
    readTime: "8 min read"
  },
  {
    title: "Sleep Hygiene Guide",
    type: "download",
    description: "Comprehensive guide to improving your sleep quality",
    icon: Download,
    link: "#",
    category: "Health",
    format: "PDF Guide"
  }
];

const emergencyContacts = [
  {
    name: "National Crisis Hotline",
    number: "1-800-273-8255",
    available: "24/7"
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    available: "24/7"
  },
  {
    name: "Emergency Services",
    number: "911",
    available: "24/7"
  }
];

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mental Health Resources</h1>
        <p className="mt-2 text-gray-600">
          Access our curated collection of mental health and wellness resources
        </p>
      </div>

      {/* Featured Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-indigo-100 rounded-lg p-2">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {resource.readTime || resource.duration || resource.format}
                  </span>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    Access Resource
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency Support Section */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Need Immediate Support?</h2>
        <p className="text-red-700 mb-4">
          If you're experiencing a mental health emergency, please reach out to these resources:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-red-800">{contact.name}</h3>
              <p className="text-lg font-bold text-red-700">{contact.number}</p>
              <p className="text-sm text-red-600">Available {contact.available}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
        <p>
          <strong>Disclaimer:</strong> The resources provided are for informational purposes only and 
          should not be considered a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
}