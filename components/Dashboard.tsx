
import React from 'react';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const allPosts = MOCK_POSTS;

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Internal Dashboard</h1>
          <p className="text-gray-600">Accessing secure documents and patient management tools.</p>
        </div>
        <div className="flex gap-3">
          <Link 
            to="/patient-entry" 
            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Patient Entry
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 uppercase text-xs tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/patient-entry" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Add New Mustahiq</Link></li>
              <li><button className="text-gray-600 hover:text-indigo-600 text-sm font-medium">Monthly Budget Report</button></li>
              <li><button className="text-gray-600 hover:text-indigo-600 text-sm font-medium">District Wise Statistics</button></li>
              <li><button className="text-gray-600 hover:text-indigo-600 text-sm font-medium">Verification Logs</button></li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">Help Desk</h3>
            <p className="text-xs text-indigo-700 mb-4">Need assistance with the new entry system? Contact technical support.</p>
            <a href="mailto:support@healthcare-portal.pk" className="bg-indigo-600 text-white text-xs px-3 py-2 rounded font-bold inline-block">Email Support</a>
          </div>
        </aside>

        <section className="lg:col-span-3 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            Internal Announcements & Private Posts
          </h2>
          
          <div className="space-y-4">
            {allPosts.map(post => (
              <div key={post.id} className={`bg-white rounded-xl p-6 border transition ${post.isPrivate ? 'border-amber-100 bg-amber-50/30' : 'border-gray-100'}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {post.isPrivate && (
                      <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tight">Private</span>
                    )}
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600">By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.content}</p>
                <div className="flex justify-end">
                  <button className="text-indigo-600 text-xs font-bold uppercase hover:text-indigo-800">Archive Discussion</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
