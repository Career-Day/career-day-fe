import React, {useState} from 'react'
// import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';

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
  <>
    <Range onChange={setRange} min={0} max={400} defaultValue={sliderValues} tipFormatter={value => `${value}k`} tipProps={{ placement:'top' }} />
  </>
)
}

export default Selector