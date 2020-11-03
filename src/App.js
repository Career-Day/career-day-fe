import React from 'react';
import './App.css';
import LandingPage from './PageViews/LandingPage'
import HomePage from './PageViews/HomePage'
import JobDetails from './PageViews/JobDetails'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
    <main>
      <Route
        exact path = "/"
        render={() => {
          return (
            <LandingPage/>
          )
        }}
      />
      <Route 
        exact path = "/home-page"
        render={(props) => {
          return (
            <HomePage {...props} />
          )
        }}
      />
      <Route 
      path="/details:id"
      render={(props) => {
        return (
          <JobDetails 
            jobId={props.match.params.id}
          />
        )
      }}
      />
    </main>
    </>
  );
}

export default App;
