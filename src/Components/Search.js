import React, {useState} from 'react'
import './Search.css'
import Slider from './Slider'
import PropTypes from 'prop-types'

const Search = ({ searchJobsByInput, searchJobsBySalaryRange, displayFavorites }) => {
  const [advancedOpen, setAdvancedOpen] = useState(false)
  
  const hamToggle = () => {
    !advancedOpen ? setAdvancedOpen(true) : setAdvancedOpen(false)
  }
  
  return (
    <>
      <div className="Search-section">
        <div className="search-box-button-sec">
          <input onChange={(e) => searchJobsByInput(e.target.value)} type="text" placeholder="Search" className="search-box"/>
          <button data-testid='burgerbtn' alt='burgerbtn' onClick={hamToggle} className="hamburger-menu"></button>
        </div>
      {!advancedOpen && 
        <section>
          <Slider searchJobsBySalaryRange={searchJobsBySalaryRange} />
        </section>
      }
      </div>
    </>  
  )
}

Search.propTypes = {
  searchJobsByInput: PropTypes.func,
  searchJobsBySalaryRange: PropTypes.func
}

export default Search