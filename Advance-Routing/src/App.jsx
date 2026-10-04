import { useState } from 'react'
import {Routes, Route} from "react-router-dom";

import './App.css'
import Home from "./components/Home/Home";
import About from './components/About/About';
import Contact from "./components/Contact/Contact";
import Navbar from './components/Navbar/Navbar';
import movieData from './data/data.json';
import MovieDetails from './components/MovieDetails/MovieDetail';
import Details from './components/DetailVersion/Details';

function App() {
  return (
    <div>
    <Navbar />

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/details" element={<MovieDetails />}/>
    <Route path="/details/:id" element={<Details />}/>
    
   </Routes>
   </div>
  );
}

export default App;
