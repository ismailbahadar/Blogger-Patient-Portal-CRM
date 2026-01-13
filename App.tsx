
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { User } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import DeploymentGuide from './components/DeploymentGuide';

const App: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', isAuthenticated: false });

  const handleLogin = (email: string) => {
    setUser({ email, isAuthenticated: true });
  };

  const handleLogout = () => {
    setUser({ email: '', isAuthenticated: false });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header user={user} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home isAuthenticated={user.isAuthenticated} />} />
            <Route path="/login" element={
              user.isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/dashboard" element={
              user.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            } />
            <Route path="/patient-entry" element={
              user.isAuthenticated ? <PatientForm /> : <Navigate to="/login" />
            } />
            <Route path="/guide" element={<DeploymentGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
