
import React from 'react';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';

interface HomeProps {
  isAuthenticated: boolean;
}

const Home: React.FC<HomeProps> = ({ isAuthenticated }) => {
  const publicPosts = MOCK_POSTS.filter(p => !p.isPrivate);
  const privateCount = MOCK_POSTS.filter(p => p.isPrivate).length;

  return (
    <div className="space-y-12">
      <section className="text-center max-w-3xl mx-auto py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to the <span className="text-indigo-600">Healthcare Management</span> Portal
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A centralized platform for Zakat registry management, patient data entry, and secure internal documentation for DHQ, THQ, and BHU facilities.
        </p>
        {!isAuthenticated && (
          <Link 
            to="/login" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Access Private Content
          </Link>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Latest Updates</h2>
          {!isAuthenticated && (
            <div className="text-sm font-medium text-amber-600 flex items-center bg-amber-50 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              {privateCount} Protected Posts Hidden
            </div>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publicPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition">
              <div className="text-sm text-indigo-500 font-semibold mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                <button className="text-indigo-600 font-bold hover:text-indigo-800 transition">Read More →</button>
              </div>
            </div>
          ))}
          
          {!isAuthenticated && (
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                 <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-700">Protected Content</h3>
              <p className="text-sm text-gray-500">Log in to view internal guidelines and financial reports.</p>
              <Link to="/login" className="text-indigo-600 text-sm font-bold hover:underline">Sign In Now</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
