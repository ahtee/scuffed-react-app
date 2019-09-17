import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
export default App;
