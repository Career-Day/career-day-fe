import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ location }) => {
  let currentLocation = location.pathname
  return (
    <div className="header-bar">
      <div className="header-section">
        <Link alt='back-btn' data-testid='back-btn' className="back-button" to={currentLocation === '/home-page' ? '/' : '/home-page'}></Link>
        <Link className="header-text" to="/">Career Day</Link>
        <button alt='profile-image' data-testid='profile-image' className="profile-image" ></button>
      </div>
    </div>
  )
}

export default Header