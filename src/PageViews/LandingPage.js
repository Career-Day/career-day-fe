import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <h1>Welcome To<br />Career Day!</h1>
          <img 
          alt="Cartoon of student on laptop"
          src="https://cdn.dribbble.com/users/15687/screenshots/11402762/media/b8eaf17dcdc71b1da589c3b737185da0.png" 
          className="landing-page-cartoon"
          />
        <div className="landing-page-text-and-button">
          <p>A place to find opportunities, search careers and get inspiration</p>
          <Link to="/home-page" className="explore-button">Explore</Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage