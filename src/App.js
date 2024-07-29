import React, { useState, useRef, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Task from './Task';
import './App.css'
import MainPage from './MainPage';
import ShowList from './ShowList';

function App() {

  return (
    <div className="App">

      <Router>
      <Routes>

      <Route exact path="/Task" element={<Task />} />
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/ShowList" element={<ShowList />} />
      
      </Routes>
  </Router>
    </div>
  );
}

export default App;