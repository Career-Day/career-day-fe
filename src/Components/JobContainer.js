import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './JobContainer.css'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'



const JobContainer = ({displayedJobs}) => {
  
  const jobCards = displayedJobs.map(job => {
    return (
      <Link key={job.id} style={{textDecoration: 'none'}} to={`/details${job.id - 1}`}>
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

export default JobContainer