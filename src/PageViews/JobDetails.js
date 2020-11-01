import React, { useEffect, useState } from 'react'
import './JobDetails.css'
import Header from '../Components/Header'
import ReactPlayer from "react-player/youtube";
import fetchSingleJob from '../Components/APICalls'

const JobDetails = (props) => {
  const [currentDetails, setCurrentDetails] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const getSingleJob = async() => {
    const data = await fetchSingleJob(props.match.params.id)
   await setCurrentDetails(data.job)
   checkFav(data.job)
  }
  getSingleJob()
  
  }, [])

 const addToFavorites = (e) => {
   let keyVal = currentDetails.id 
   let storageKeys = Object.keys(localStorage)
  if(storageKeys.includes(`Favorites${keyVal}`)) {
    localStorage.removeItem(`Favorites${keyVal}`)
    setIsFavorite(false)
  } else {
    localStorage.setItem(`Favorites${keyVal}`, JSON.stringify(currentDetails.id))
    setIsFavorite(true)
  }
}

const checkFav = async(data) => {
    let keyVal = data.id 
     let storageKeys = Object.keys(localStorage)
   if(storageKeys.includes(`Favorites${keyVal}`)) {
     setIsFavorite(true)
   }
  }


  return (
    <div className='job-details-page'>
    <Header />
      <div className="job-details-section">
        <img className="details-image" src={currentDetails.image_url} alt='Details' />
        <div className="details-text-holder">
          <h2 className="side-color">{currentDetails.title}</h2>
          <p className="side-color"><b>Salary Range: </b>${currentDetails.min_salary} -  ${currentDetails.max_salary}</p>
          <div style={{display:'flex'}}>
          <p>Add to Favorites</p><img onClick={addToFavorites} style={{height:'3em'}} src={isFavorite ? '/favoritefull.png' : '/favoriteempty.png'} alt='favoriteStar' />
          </div>
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
