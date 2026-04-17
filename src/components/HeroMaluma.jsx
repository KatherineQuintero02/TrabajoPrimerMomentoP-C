import React, { useState, useEffect } from 'react'
import malumaImage from '../assets/maluma-placeholder.jpg'
import './HeroMaluma.css'

const HeroMaluma = () => {
  const malumaMoods = [
    "¡Hawái vacaciones! 🌺",
    "¡Feliz los 4! 🎉",
    "¡Salsa, champeta y rock! 🎸",
    "¡Pretty Boy, Dirty Boy! 😎",
    "¡Medellín, Colombia! 🇨🇴",
    "¡La Familia es primero! 👨‍👩‍👧‍👦",
    "¡11:11! Make a wish! ⭐",
    "¡Hasta que se seque el malecón! 🏖️",
    "¡No me digas que no! 💔",
    "¡Dile a él que me quiere! 😏"
  ]

  const [currentMood, setCurrentMood] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomMood = () => {
    const randomIndex = Math.floor(Math.random() * malumaMoods.length)
    return malumaMoods[randomIndex]
  }

  const changeMood = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentMood(getRandomMood())
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    setCurrentMood(getRandomMood())
  }, [])

  return (
    <section className="hero-maluma">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Estado de ánimo de Maluma hoy
          </h1>
          
          <div className={`mood-display ${isAnimating ? 'animating' : ''}`}>
            <p className="mood-text">
              {currentMood}
            </p>
          </div>
          
          <button 
            onClick={changeMood}
            className="mood-button"
            disabled={isAnimating}
          >
            🎲 Cambiar Estado de Ánimo
          </button>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Álbumes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50M+</span>
              <span className="stat-label">Fans</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Memes</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={malumaImage} 
            alt="Maluma" 
            className="maluma-photo"
          />
          <div className="image-overlay">
            <div className="overlay-text">
              <p>El Pretty Boy de los Memes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMaluma
