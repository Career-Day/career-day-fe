import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './JobCard.css'

const JobCard = ({title, imgURL, averageSalary, description, icon}) => {
    return (
        <div className="individual-job"
         >
             <section className="title-and-icon">
            <img style={{height:'4em'}} src={icon} alt='profession-icon' />
            <h3>{title}</h3>
            <p>{averageSalary}</p>
             </section>
            <p style={{margin: '.5em 0 1em .5em'}}>{description}</p>
        </div>
    )
}

export default JobCard