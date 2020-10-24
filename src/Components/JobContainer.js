import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './JobContainer.css'
import JobCard from './JobCard'

import fakeData from '../FakeData'

const JobContainer = () => {
    const [allJobs, setAllJobs] = useState(fakeData)

    const jobCards = allJobs.map(job => {
        return (
            <JobCard 
                {...job}
                key={job.id}
            />
        )
    })
    return (
        <div>
            {jobCards}
        </div>
    )
}

export default JobContainer