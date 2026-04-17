import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Maluma Memes</h3>
            <p className="footer-description">
              La plataforma número uno para memes y entretenimiento de la familia Maluma.
              ¡Únete a la comunidad más pretty del mundo!
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#memes">Memes</a></li>
              <li><a href="#community">Comunidad</a></li>
              <li><a href="#about">Acerca de</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Síguenos</h4>
            <div className="social-links">
              <a href="https://instagram.com/maluma" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com/maluma" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
              <a href="https://youtube.com/maluma" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📺</span>
                <span>YouTube</span>
              </a>
              <a href="https://tiktok.com/@maluma" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">🎵</span>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} Maluma Memes - Todos los derechos reservados
            </p>
            <p className="author-credit">
              Creado con ❤️ por <strong>Katherine Daniela Quintero Paez</strong>
            </p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Política de Privacidad</a>
            <a href="#terms">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
