import React, {useState} from 'react'
import 'rc-slider/assets/index.css';
import './Search.css'
import PropTypes from 'prop-types'

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
let displayValues = ['10', '300']
 
const Selector = ({searchJobsBySalaryRange}) => {
  const [sliderValues, setSliderValues] = useState([10000,300000])

  const setRange = (value) => {
    setSliderValues(value)
    searchJobsBySalaryRange(sliderValues)
    displayValues = [convertDisplayValues(sliderValues[0]), convertDisplayValues(sliderValues[1])]
  }

  const convertDisplayValues = (value) => {
    let result = value.toString().split('')
    result.splice(-3)
    return result.join('')
  }
  
  return(
    <div className="slider-sec">
      <p><b>Salary Range:</b> ${displayValues[0]}k - ${displayValues[1]}k</p>
      <Range 
        onChange={setRange} 
        min={10000} 
        max={300000} 
        defaultValue={sliderValues} 
        tipFormatter={value => `${value}`} 
        tipProps={{ placement:'top', delayHide: '10000'}} 
      />
    </div>
  )
}

Slider.propTypes = {
  searchJobsBySalaryRange: PropTypes.func
}

export default Selector