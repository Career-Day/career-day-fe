import React, {useState} from 'react'
import './HomePage.css'
import Header from '../Components/Header'
import Search from '../Components/Search'
import JobContainer from '../Components/JobContainer'
import colorData from '../ColorsData'
import fakeData from '../FakeData'

const HomePage = () => {
  const [allJobs] = useState(fakeData.fakeJobs)
  const [filteredResults, setFilteredResults] = useState(allJobs)
  let random = Math.floor(Math.random() * (colorData.length))

  const sliderResults = (values) => {
    console.log('Values of the slider', values)
  }

const filterSearch = (search) => {
  if(search === '') {
     setFilteredResults(allJobs)
    } else {
      search.toLowerCase()
      let results = allJobs.filter(job => job.title.toLowerCase().includes(search) || job.short_description.toLowerCase().includes(search))
      setFilteredResults(results)
    }
  }

  return (
    <div className='jobs-page' style={{border:'2px solid green', background: colorData[random].color }}>
      <Header />
      <Search sliderResults={sliderResults} filterSearch={filterSearch} allJobs={allJobs}  />
      <JobContainer displayedJobs={filteredResults} />
    </div>
  )
}

export default HomePage
