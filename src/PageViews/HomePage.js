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

  const sliderResults = (values) => {
    setSearching(true)
    let results = allJobs.filter(job => (job.avg_salary >= values[0] && 
      job.avg_salary <= values[1]))
    setDisplayedData(results)
  }

  useEffect(() => {
    let data = null
    async function getJobs() {
      data = await fetchAllJobs()
      changeDataSetToNums(data.jobs)
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
    setAllJobs(numberResults)
    setDisplayedData(numberResults)
  }

  const filterSearch = (search) => {
    setSearching(true)
    search.toLowerCase()
    let results = allJobs.filter(job => job.title.toLowerCase().includes(search) || 
      job.short_description.toLowerCase().includes(search))
    setDisplayedData(results)
  }

  return (
    <div className='jobs-page' >
      <Header />
      <Search 
        sliderResults={sliderResults} 
        filterSearch={filterSearch} 
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
