
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 hidden sm:inline-block">Healthcare Portal</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition">Home</Link>
          <Link to="/guide" className="text-gray-600 hover:text-indigo-600 font-medium transition">Setup Guide</Link>
          
          {user.isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600 font-medium transition">Dashboard</Link>
              <Link to="/patient-entry" className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Entry Form</Link>
              <button 
                onClick={onLogout}
                className="text-red-500 font-medium hover:text-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition shadow-sm"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
