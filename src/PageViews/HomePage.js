import React, {useState, useEffect} from 'react'
// import PropTypes from 'prop-types'
import './HomePage.css'
import Header from '../Components/Header'
import Search from '../Components/Search'
import JobContainer from '../Components/JobContainer'
import colorData from '../ColorsData'
import fakeData from '../FakeData'
import { fetchAllJobs } from '../Components/APICalls'


const HomePage = () => {
  
  const [allJobs, setAllJobs] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  let random = Math.floor(Math.random() * (colorData.length))

const sliderResults = (values) => {
//   console.log(values)
//  let numberResults =  filteredResults.map(job => {
//   let stringNum = job.avg_salary
//   console.log(job.avg_salary)
//     // let noCommaNum = stringNum.split(',')


//     let salaryNum =  Number(job.avg_salary)
//     job.avg_salary = salaryNum
//    return job
//   })
// console.log(numberResults, 'iamnumberresults')
}

   useEffect(() => {
     let data = null
     async function getJobs() {
       data = await fetchAllJobs()
       console.log(data)
       await setAllJobs(data.jobs)
       setFilteredResults(data.jobs)
     }
     getJobs()
   }, [])
  


const filterSearch = (search) => {
  if(search === '') {
     setFilteredResults(allJobs)
    } else {
      search.toLowerCase()
      let results = allJobs.filter(job => job.title.toLowerCase().includes(search) || job.description.toLowerCase().includes(search))
      setFilteredResults(results)
    }
}


  return (
    <div className='jobs-page' style={{border:'2px solid green', background: colorData[random].color }}>
    {console.log(allJobs, 'iamalljobs')}
    {console.log(filteredResults, 'iamfilteredresults')}
      <Header />
      <Search 
      sliderResults={sliderResults} 
      filterSearch={filterSearch} 
      allJobs={allJobs}  />
      <JobContainer displayedJobs={filteredResults} />
    </div>
  )
}

export default HomePage
