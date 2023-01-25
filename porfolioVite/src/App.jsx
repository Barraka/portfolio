import { useState } from 'react'
import './assets/styles.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Main from './Components/Main';

function App() {

  return (
    <div className="app">
        <Hero />
        <Main />
        <Footer />
    </div>
  )
}

export default App
