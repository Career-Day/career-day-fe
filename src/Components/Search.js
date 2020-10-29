import React, {useState} from 'react'
import './Search.css'
import Slider from './Slider'
import PropTypes from 'prop-types'

const Search = ({searchJobsByInput, searchJobsBySalaryRange}) => {
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  
  const hamToggle = () => {
    !advancedOpen ? setAdvancedOpen(true) : setAdvancedOpen(false)
  }
  
  const changeHandler = (e) => {
    setSearchInput(e.target.value)
    searchJobsByInput(searchInput)
  }
  
  return (
    <>
      <div className="Search-section">
        <div className="search-box-button-sec">
          <input onChange={changeHandler} type="text" placeholder="Search" className="search-box"/>
          <button onClick={hamToggle} className="hamburger-menu"></button>
        </div>
      {advancedOpen && 
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