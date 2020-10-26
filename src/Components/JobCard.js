import React from 'react'
import './JobCard.css'
import colorData from '../ColorsData'

const JobCard = ({title, averageSalary, description, iconURL, id}) => {
  const num = id - 1
  return (
    <div
      className="individual-job" 
      style={{backgroundColor: colorData[num].color, 
      borderLeft: `2em ${colorData[num].accentColor} solid` }}
    >
      <section className="title-and-icon">
        <img style={{height:'3em'}} src={iconURL} alt='profession-icon' />
        <h3 className="card-title">{title}</h3>
      </section>
      <p className="card-text-one"><b>Avg Salary:</b> {averageSalary}</p>
      <p className="card-text-two">{description}</p>
    </div>
  )
}

export default JobCard