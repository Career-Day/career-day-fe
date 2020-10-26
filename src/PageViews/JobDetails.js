import React, { useEffect, useState } from 'react'
import FakeData from '../FakeData'
import './JobDetails.css'
import Header from '../Components/Header'
import ReactPlayer from "react-player/youtube";

const JobDetails = (props) => {
  const [currentDetails, setCurrentDetails] = useState([])

  useEffect(() => {
    setCurrentDetails(FakeData.fakeDetails[props.match.params.id])
  }, [])

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
        <div className="player-wrapper">
          <ReactPlayer 
            url={currentDetails.video_url}
            width='100%'
            height='100%'
            alt="Video detailing the job"
            className="react-player"
          />
        </div>
      </div>
    </>
  )
}

export default JobDetails
