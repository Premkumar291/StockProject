import React from "react";
import {BrowserRouter} from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import NewsLetter from "./Components/NewsLetter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;