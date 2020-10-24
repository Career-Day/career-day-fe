import React, { useEffect, useState } from 'react'
import FakeData from '../FakeData'
import './JobDetails.css'
import Header from '../Components/Header'


function JobDetails(props) {
  const [currentDetails, setCurrentDetails] = useState([])

useEffect(() => {
setCurrentDetails(FakeData.fakeDetails[props.match.params.id])
  }
)
  return (
    <>
    <Header />
    <div className="jobDetails-page">
      <img className="details-image" src={currentDetails.imgURL} alt='Details' />
      <div className="details-text-holder">
      <h2>{currentDetails.title}</h2>
      <p><b>Salary Range:</b>{currentDetails.minSalary} -  {currentDetails.maxSalary}</p>
      <p><b>Description:</b> {currentDetails.description}</p>
      </div>
    </div>
    </>
  )
}

export default JobDetails
