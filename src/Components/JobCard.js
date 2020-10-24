import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './JobCard.css'

const JobCard = ({title, imgURL, averageSalary, description, iconURL}) => {
    return (
        <div className="individual-job"
         >
             <section className="title-and-icon">
            <img style={{height:'4em'}} src={iconURL} alt='profession-icon' />
            <h3>{title}</h3>
            <p style={{textAlign:'center'}}><div style={{display:'flex', flexFlow:'column'}}>Avg Salary:</div>{averageSalary}</p>
             </section>
            <p style={{margin: '.5em 0 1em .5em'}}>{description}</p>
        </div>
    )
}

export default JobCard