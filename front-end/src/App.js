import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import LocationTracker from './components/LocationTracker';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track" element={<LocationTracker />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;