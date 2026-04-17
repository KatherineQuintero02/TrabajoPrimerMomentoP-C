import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">🎵</span>
            <span className="logo-text">Maluma Memes</span>
          </div>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#memes" className="nav-link">Memes</a>
            </li>
            <li className="nav-item">
              <a href="#community" className="nav-link">Comunidad</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">Acerca de</a>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="btn-primary">Unirse</button>
        </div>
      </div>
    </header>
  )
}

export default Header
