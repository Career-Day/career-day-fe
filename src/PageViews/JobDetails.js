import React, { useEffect, useState } from 'react'
import './JobDetails.css'
import Header from '../Components/Header'
import ReactPlayer from "react-player/youtube";
import fetchSingleJob from '../api/APICalls'

const JobDetails = (props) => {
  const [currentDetails, setCurrentDetails] = useState(null)
  const [error, setError] = useState('')
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getSingleJob = async () => {
      try {
      const data = await fetchSingleJob(props.match.params.id)
      setCurrentDetails(data.job)
      checkFav(data.job)
      } catch (error) {
        setError(error)
      }
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
        {!currentDetails &&
          <>
            <h3>Loading Details...</h3>
            <p>If content doesn't load, try refreshing the page</p>
          </>
        }
        {currentDetails &&
          <>
            <img className="details-image" src={currentDetails.image_url} alt='Details' />
            <div className="details-text-holder">
              <h2 className="side-color">{currentDetails.title}</h2>
              <p className="side-color"><b>Salary Range: </b>${currentDetails.min_salary} -  ${currentDetails.max_salary}</p>
              <div style={{display:'flex'}}>
                <p className="side-color"><b>Add to Favorites</b></p><img onClick={addToFavorites} style={{height:'3em'}} src={isFavorite ? 'images/favoritefull.png' : 'images/favoriteempty.png'} alt='favoriteStar' />
              </div>
              <p className="side-color"><b>Description:</b> {currentDetails.long_description}</p>
            </div>
            <div className="player-wrapper">
              <ReactPlayer 
                role="video"
                url={currentDetails.video_url}
                width='100%'
                height='100%'
                alt="Video detailing the job"
                className="react-player"
              />
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default JobDetails
