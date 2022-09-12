import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-background">
          <Header />
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
