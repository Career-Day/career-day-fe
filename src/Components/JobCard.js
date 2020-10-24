import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './JobCard.css'

const JobCard = ({title, imgURL, averageSalary, description}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{averageSalary}</p>
            <p>{description}</p>
        </div>
    )
}

export default JobCard