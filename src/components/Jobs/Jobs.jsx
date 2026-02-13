import React, { useState } from 'react'
import jobData from '../../data';
import JobCard from '../JobCard/JobCard';
import './Jobs.css'

const Jobs = () => {
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectJobType, setselectJobType] = useState("All")
  const [searchText, setSearchText] = useState("")
  const [sortingOrder, setSortingOrder] = useState("asc")

  const locations = ["All", ...new Set(jobData.map((job) => job.location))]
  const jobTypes = ["All", ...new Set(jobData.map((job) => job.type))]


  const filteredJobs = jobData.filter((job) => {
    const locationMatch = selectedLocation === "All" || job.location === selectedLocation
    const jobTypeMatch = selectJobType === "All" || job.type === selectJobType;
    const searchTitle = job.title.toLowerCase().includes(searchText)
    return locationMatch && jobTypeMatch && searchTitle
  })
  
  const sortedJobs = filteredJobs.slice().sort((a, b) => {
    const titleA = (a.title || "").toLowerCase()
    const titleB = (b.title || "").toLowerCase()

    return sortingOrder === "asc" 
      ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
     
  })

  return (
   <>
    <div className='filters'>
      <input className = "select-location"  type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search Job title'/>
    <select className = "select-location" value = {sortingOrder} onChange={(e) => setSortingOrder(e.target.value)}>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
   </select>
   <select className= "select-location" value = {selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}>
    {
      locations.map((loc, index) => (
        <option key = {index} value = {loc}>{loc}</option>
      ))
    }
   </select>
   <select className='select-location' value={selectJobType}
   onChange={(e) => setselectJobType(e.target.value)}
   >
    {
      jobTypes.map((job, index) => (
        <option key = {index} value = {job}>{job}</option>
      ))
    }
   </select>
    </div>
    <div className="job-cards">
        {
          sortedJobs.length === 0 ? (
            <p>Not Found</p>
          ):(
            sortedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )
        }
      </div>
    </>
  )
}

export default Jobs
