import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import './JobContainer.css'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'

import fakeData from '../FakeData'

const JobContainer = () => {
  const [allJobs] = useState(fakeData.fakeJobs)
  
  const jobCards = allJobs.map(job => {
    return (
      <Link key={job.id} style={{textDecoration: 'none'}} to={`/details${job.id}`}>
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