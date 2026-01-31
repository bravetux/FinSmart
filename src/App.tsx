"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BuildWealthPage from './pages/BuildWealthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/build-wealth" element={<BuildWealthPage />} />
      </Routes>
    </Router>
  );
}

export default App;