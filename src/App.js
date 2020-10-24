import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './PageViews/LandingPage'
import HomePage from './PageViews/HomePage'
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
        render={() => {
          return (
            <HomePage />
          )
        }}
      />
    </main>
    </>
  );
}

export default App;
