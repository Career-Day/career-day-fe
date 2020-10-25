import React from 'react'
// import PropTypes from 'prop-types'
import './HomePage.css'
import Header from '../Components/Header'
import Search from '../Components/Search'
import JobContainer from '../Components/JobContainer'

const HomePage = () => {
  return (
    <>
      <Header />
      <Search />
      <JobContainer />
    </>
  )
}

export default HomePage
