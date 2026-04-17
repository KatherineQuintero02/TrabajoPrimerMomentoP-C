import React from 'react'
import Header from './components/Header'
import HeroMaluma from './components/HeroMaluma'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroMaluma />
      </main>
      <Footer />
    </div>
  )
}

export default App
