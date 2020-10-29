import React, {useState, useEffect} from 'react'
// import PropTypes from 'prop-types'
import './HomePage.css'
import Header from '../Components/Header'
import Search from '../Components/Search'
import JobContainer from '../Components/JobContainer'
// import colorData from '../ColorsData'
import { fetchAllJobs } from '../Components/APICalls'

const HomePage = () => {
  const [allJobs, setAllJobs] = useState([])
  const [displayedData, setDisplayedData] = useState([])
  const [searching, setSearching] = useState(false)
  const [values, setValues] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const searchJobsBySalaryRange = (values) => {
    setValues(values)
    setSearching(true)
    if(searchInput.length > 0) {
      let results = allJobs.filter(job => ((job.avg_salary >= values[0] && 
        job.avg_salary <= values[1]) && (job.title.toLowerCase().includes(searchInput) || 
      job.short_description.toLowerCase().includes(searchInput))))
      setDisplayedData(results)
    } else {
      let results = allJobs.filter(job => (job.avg_salary >= values[0] && job.avg_salary <= values[1]))
      setDisplayedData(results)
    }
  }

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
    if(values.length > 0) {
      let smallSearch = search.toLowerCase()
      setSearchInput(smallSearch)
      let results = allJobs.filter(job => (job.title.toLowerCase().includes(smallSearch) || 
        job.short_description.toLowerCase().includes(smallSearch)) && (job.avg_salary >= values[0] && 
        job.avg_salary <= values[1]))
      setDisplayedData(results)
    } else {
      let smallSearch = search.toLowerCase()
      setSearchInput(smallSearch)
      let results = allJobs.filter(job => job.title.toLowerCase().includes(smallSearch) ||
        job.short_description.toLowerCase().includes(smallSearch))
      setDisplayedData(results)
    }

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
