import React from 'react'
import './JobContainer.css'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'

const JobContainer = ({displayedJobs, searching, displayFavorites}) => {
  if (displayedJobs === null) {
    return (
      <div className="job-container">
        <p className="no-results-text">You haven't saved any jobs yet</p>
      </div>
    )
  } else if (displayedJobs.length === 0 && searching === false) {
    return (
      <div className="job-container">
        <p className="no-results-text">Loading Jobs...</p>
      </div>
    )
  } else if (displayedJobs.length === 0 && searching === true) {
    return (
      <div className="job-container">
        <p className="no-results-text">No careers that match that search<span role="img" aria-label="sad face emoji">☹️</span></p>
      </div>
    )
  } else {
    const jobCards = displayedJobs.map(job => {
      return (
        <Link key={job.id} alt='single-job-card' data-testid='singular-job' style={{textDecoration: 'none'}} to={`/details${job.id}`}>
          <JobCard 
            {...job}
          />
        </Link>
      )
    })
    return (
        <div className="job-container">
          {jobCards}
        </div>
    )
  }
}

export default JobContainer