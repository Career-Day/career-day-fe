import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Search.css'

const Search = () => {

    return (
        <div className="Search-section">
            <input type="text" placeholder="Search"/>
            <button className="hamburger-menu"></button>
        </div>
    )
}

export default Search