import React, { useState, useEffect } from 'react'
import './HomePage.css'
import Header from '../Components/Header'
import Search from '../Components/Search'
import JobContainer from '../Components/JobContainer'
import { fetchAllJobs } from '../Components/APICalls'

const HomePage = () => {
  const [allJobs, setAllJobs] = useState([])
  const [displayedData, setDisplayedData] = useState([])
  const [searching, setSearching] = useState(false)
  const [values, setValues] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let data = null
    async function getJobs() {
      data = await fetchAllJobs()
      const newData = changeDataSetToNums(data.jobs)
      setAllJobs(newData)
      setDisplayedData(newData)
    }
    getJobs()
  }, [])
  
  const changeDataSetToNums = (data) => {
    let numberResults =  data.map(job => {
      let noCommaNum = job.avg_salary.split(',').join('')
      let num = parseInt(noCommaNum)
      job.avg_salary = num
      return job
    })
    return numberResults
  }

  const searchJobsByInput = (search) => {
    setSearching(true)
    let lowerCaseInput = search.toLowerCase()
    setSearchInput(lowerCaseInput)
    if(values.length > 0) {
      searchBothSalaryAndInput()
    } else {
      let results = allJobs.filter(job => 
        job.title.toLowerCase().includes(lowerCaseInput) 
        || job.short_description.toLowerCase().includes(lowerCaseInput)
      )
      setDisplayedData(results)
    }
  }

  const searchJobsBySalaryRange = (values) => {
    setSearching(true)
    setValues(values)
    if(searchInput.length > 0) {
      searchBothSalaryAndInput()
    } else {
      let results = allJobs.filter(job => 
        job.avg_salary >= values[0] && job.avg_salary <= values[1]
      )
      setDisplayedData(results)
    }
  }

  const searchBothSalaryAndInput = () => {
    let results = allJobs.filter(job => 
      (job.title.toLowerCase().includes(searchInput) 
        || job.short_description.toLowerCase().includes(searchInput)) 
        && (job.avg_salary >= values[0] && job.avg_salary <= values[1])
    )
    setDisplayedData(results)
  }

  return (
    <div className='jobs-page' >
      <Header />
      <Search 
        searchJobsBySalaryRange={searchJobsBySalaryRange} 
        searchJobsByInput={searchJobsByInput} 
        allJobs={allJobs} 
      />
      <JobContainer 
        displayedJobs={displayedData} 
        searching={searching}
      />
    </div>
  )
}

export default HomePage
