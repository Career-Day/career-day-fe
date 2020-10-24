import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './JobContainer.css'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'

import fakeData from '../FakeData'

const JobContainer = () => {
    const [allJobs, setAllJobs] = useState(fakeData.fakeJobs)

    const jobCards = allJobs.map(job => {
        return (
            <Link style={{textDecoration: 'none'}} to={`/details${job.id}`}>
                <JobCard 
                    {...job}
                    key={job.id}
                />
            </Link>
        )
    })
    return (
        <div>
            {jobCards}
        </div>
    )
}

export default JobContainer