import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const authenticateUser = () => {
          setAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login authenticateUser={authenticateUser} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
