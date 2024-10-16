// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
