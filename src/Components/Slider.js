import React, {useState} from 'react'
import 'rc-slider/assets/index.css';
import './Search.css'

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
 
const Selector = ({sliderResults}) => {
  const [sliderValues, setSliderValues] = useState([0,400])

  const setRange = (value) => {
    setSliderValues(value)
    sliderResults(sliderValues)
  }
  
  return(
    <div className="slider-sec">
      <p><b>Salary Range:</b> {sliderValues[0]}k - {sliderValues[1]}k</p>
      <Range 
        onChange={setRange} 
        min={0} 
        max={400} 
        defaultValue={sliderValues} 
        tipFormatter={value => `${value}k`} 
        tipProps={{ placement:'top', delayHide: '10000'}} 
      />
    </div>
  )
}

export default Selector