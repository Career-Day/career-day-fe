import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Search.css'
import Slider from './Slider'

const Search = ({filterSearch, sliderResults}) => {

const [advancedOpen, setAdvancedOpen] = useState(false)
const [searchInput, setSearchInput] = useState('')

const hamToggle = ({allJobs}) => {
    !advancedOpen ? setAdvancedOpen(true) : setAdvancedOpen(false)
}

const changeHandler = (e) => {
setSearchInput(e.target.value)
filterSearch(searchInput)
}




    return (
        <>
            <div className="Search-section">
                <input onChange={changeHandler} type="text" placeholder="Search"/>
                <button onClick={hamToggle} className="hamburger-menu"></button>
            </div>
            <section style={{width:'100vw'}}>
                {advancedOpen && <Slider sliderResults={sliderResults} />}
            </section>
        </>
        
    )
}

export default Search