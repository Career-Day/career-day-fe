import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import './Header.css'

const Header = () => {
    return (
      <div className="header-section">
        <Link className="back-button" to="/home-page" />
        <h2 className="header-text" >Career Day</h2>
        <button className="profile-image" ></button>
      </div>
    )
}

export default Header