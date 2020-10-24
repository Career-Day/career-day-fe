import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Search.css'
import Slider from './Slider'

const Search = () => {
const [advancedOpen, setAdvancedOpen] = useState(false)

const hamToggle = (e) => {
    !advancedOpen ? setAdvancedOpen(true) : setAdvancedOpen(false)

}
    return (
        <>
            <div className="Search-section">
                <input type="text" placeholder="Search"/>
                <button onClick={hamToggle} className="hamburger-menu"></button>
            </div>
            <section style={{width:'100vw'}}>
                {advancedOpen && <Slider />}
            </section>
        </>
        
    )
}

export default Search