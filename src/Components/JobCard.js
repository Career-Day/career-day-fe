import React from 'react'
import './JobCard.css'
import colorData from '../ColorsData'

const JobCard = ({title, avg_salary, short_description, icon_url, id}) => {
  const num = id - 1
  return (
    <div
      className="individual-job" 
      style={{backgroundColor: colorData[num].color, 
      borderLeft: `2em ${colorData[num].accentColor} solid` }}
    >
      <section className="title-and-icon">
        <img style={{height:'3em'}} src={icon_url} alt='profession-icon' />
        <h3 className="card-title">{title}</h3>
      </section>
      <p className="card-text-one"><b>Avg Salary:</b> {avg_salary}</p>
      <p className="card-text-two">{short_description}</p>
    </div>
  )
}

export default JobCard