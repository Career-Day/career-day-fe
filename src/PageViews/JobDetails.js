import React, { useEffect, useState } from 'react'
import FakeData from '../FakeData'
import './JobDetails.css'
import Header from '../Components/Header'
import colorData from '../ColorsData'


function JobDetails(props) {
  console.log(props,'iamprops')
  const [currentDetails, setCurrentDetails] = useState([])
  let random = Math.floor(Math.random() * (colorData.length))

  useEffect(() => {
  setCurrentDetails(FakeData.fakeDetails[props.match.params.id])
  }, [])

  return (
    <div className='job-details-page' style={{background: colorData[random].color}}>
    <Header />
    <div className="jobDetails-page">
      <img className="details-image" src={currentDetails.imgURL} alt='Details' />
      <div className="details-text-holder">
      <h2>{currentDetails.title}</h2>
      <p><b>Salary Range:</b>{currentDetails.minSalary} -  {currentDetails.maxSalary}</p>
      <p><b>Description:</b> {currentDetails.description}</p>
      </div>
    </div>
    </div>
  )
}

export default JobDetails
