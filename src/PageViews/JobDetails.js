import React, { useEffect, useState } from 'react'
import FakeData from '../FakeData'
import './JobDetails.css'
import Header from '../Components/Header'
import colorData from '../ColorsData'
import ReactPlayer from "react-player/youtube";
import fetchSingleJob from '../Components/APICalls'

const JobDetails = (props) => {
  const [currentDetails, setCurrentDetails] = useState([])
  let random = Math.floor(Math.random() * (colorData.length))

  useEffect(() => {
    const getSingleJob = async() => {
      console.log(props.match.params.id, 'iamtheid')
    const data = await fetchSingleJob(props.match.params.id)
   setCurrentDetails(data.job)
  }
  getSingleJob()

  }, [])

  return (
    <div className='job-details-page' style={{background: colorData[random].color}}>
    <Header />
      <div className="job-details-section">
        <img className="details-image" src={currentDetails.image_url} alt='Details' />
        <div className="details-text-holder">
          <h2>{currentDetails.title}</h2>
          <p><b>Salary Range: </b>${currentDetails.min_salary} -  ${currentDetails.max_salary}</p>
          <p><b>Description:</b> {currentDetails.long_description}</p>
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
