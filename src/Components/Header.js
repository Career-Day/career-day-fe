import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  let currentLocation = props.location.pathname
  return (
    <div className="header-bar">
      <div className="header-section">
      {console.log(currentLocation)}
        <Link alt='back-btn' data-testid='back-btn' className="back-button" to={currentLocation == '/home-page' ? '/' : '/home-page'}></Link>
        <Link className="header-text" to="/">Career Day</Link>
        <button alt='profile-image' data-testid='profile-image' className="profile-image" ></button>
      </div>
    </div>
  )
}

export default Header