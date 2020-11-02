import React, { useState, useEffect } from 'react'
import './HomePage.css'
import Header from '../Components/Header'
import Search from '../Components/Search'
import JobContainer from '../Components/JobContainer'
import { fetchAllJobs } from '../api/APICalls'

const HomePage = () => {
  const [allJobs, setAllJobs] = useState([])
  const [displayedData, setDisplayedData] = useState([])
  const [searching, setSearching] = useState(false)
  const [values, setValues] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')
  const [favoriteIds, setFavoriteIds] = useState([])

  useEffect(() => {
    gatherFavorites()
    async function getJobs() {
      try{
        let data = await fetchAllJobs()
        const newData = changeDataSetToNums(data.jobs)
        setAllJobs(newData);
        setDisplayedData(newData);
      } catch (error) {
        setError(error)
      }
    }
    getJobs()
  }, [])

  const gatherFavorites = async() => {
    let allEntries = []
    let keys = Object.keys(localStorage)
    keys.forEach(key => {
      let entry = localStorage.getItem(key)
      allEntries.push(JSON.parse(entry))
    })
    await setFavoriteIds([...favoriteIds, ...allEntries])
  }

  const displayFavorites = (e) => {
    let displayfavs = [];
    if(e.target.innerText === "My Favorites") {
      document.getElementById('allCareersButton').classList.remove('active')
      e.target.classList.add('active')
      allJobs.filter(job => {
        console.log(favoriteIds)
        if (favoriteIds.length === 0) {
          setDisplayedData(null)
        } else {
          favoriteIds.forEach(fav => {
            if(fav == job.id && !displayfavs.includes(job)) {
              displayfavs.push(job)
            }
          })
          setDisplayedData(displayfavs)
        }
      })
    } else if (e.target.innerText === "All Careers") {
      document.getElementById('favoriteButton').classList.remove('active')
      e.target.classList.add('active')
      setDisplayedData(allJobs)
    }
  }
  
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
    <div className="jobs-page">
      <Header />
      <Search
        searchJobsBySalaryRange={searchJobsBySalaryRange}
        searchJobsByInput={searchJobsByInput}
        allJobs={allJobs}
        displayFavorites={displayFavorites}
      />
      <div className="display-buttons">
        <h6 className="all-display active" id="allCareersButton" onClick={displayFavorites}>All Careers</h6>
        <h6 className="fav-display" id="favoriteButton" onClick={displayFavorites}>My Favorites</h6>
      </div>
      <JobContainer displayedJobs={displayedData} searching={searching} displayFavorites={displayFavorites}/>
    </div>
  );
}

export default HomePage
