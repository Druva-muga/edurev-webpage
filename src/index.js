import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

