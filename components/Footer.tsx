
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Healthcare Portal</span>
            </div>
            <p className="text-sm leading-relaxed">
              Official data entry and management system for the Zakat Management Information System. Ensuring transparency and efficiency in healthcare fund distribution.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">User Manual</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Technical Docs</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Contact Admin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <p className="text-sm mb-4">Department of Health & Zakat Office</p>
            <p className="text-sm">Regional Office: Dir Lower, KP</p>
            <p className="text-sm mt-4">Support: 0800-HEALTH-ZP</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2025 Healthcare Zakat Management System. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Powered by Gemini & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
