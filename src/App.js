import './App.css';

import Main from './Pages/Main';
import Photos from './Pages/Photos';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about-us" element={<Main/>} />
        <Route path="/fishing" element={<Photos section="Fishing"/>} />
        <Route path="/off-roading" element={<Photos section="Off Roading"/>} />
        <Route path="/camping" element={<Photos section="Camping"/>} />
        <Route path="/projects" element={<Photos section="Projects"/>} />
      </Routes>
    </div>
  );
}

export default App;
