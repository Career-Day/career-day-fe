import React, { useEffect, useState } from 'react'
import './JobDetails.css'
import Header from '../Components/Header'
import ReactPlayer from "react-player/youtube";
import fetchSingleJob from '../Components/APICalls'

const JobDetails = (props) => {
  const [currentDetails, setCurrentDetails] = useState([])

  useEffect(() => {
    const getSingleJob = async() => {
    const data = await fetchSingleJob(props.match.params.id)
    setCurrentDetails(data.job)
  }
  getSingleJob()
  }, [])

  return (
    <div className='job-details-page'>
    <Header />
      <div className="job-details-section">
        <img className="details-image" src={currentDetails.image_url} alt='Details' />
        <div className="details-text-holder">
          <h2 className="side-color">{currentDetails.title}</h2>
          <p className="side-color"><b>Salary Range: </b>${currentDetails.min_salary} -  ${currentDetails.max_salary}</p>
          <p className="side-color"><b>Description:</b> {currentDetails.long_description}</p>
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
    </div>
  )
}

export default JobDetails
