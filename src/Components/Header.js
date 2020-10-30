import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header-section">
        <Link alt='back-btn' data-testId='back-btn' className="back-button" to="/home-page"></Link>
        <Link className="header-text" to="/">Career Day</Link>
        {/* <h2>Career Day</h2> */}
        <button alt='profile-image' data-testId='profile-image' className="profile-image" ></button>
    </div>
  )
}

export default Header