import React from 'react'
import './JobCard.css'

const JobCard = ({job}) => {
  return (
    <div className='job-card'>
        <h1 className='job-title'>{job.title}</h1>
        <p className='job-company'>{job.company}</p>
        <div className='job-details'>
            <p className='job-location'>{job.location}</p>
            <p className='job-type'>{job.type}</p>
        </div>
    </div>
  )
}

export default JobCard