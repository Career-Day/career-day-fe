import React from 'react'
// import PropTypes from 'prop-types'
import './Search.css'

const Search = () => {
    return (
        <div className="Search-section">
            <input className="search-box" type="text" placeholder="Search"/>
            <button className="hamburger-menu"></button>
        </div>
    )
}

export default Search