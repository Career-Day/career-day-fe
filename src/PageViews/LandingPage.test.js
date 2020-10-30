import React from 'react';
import {render, screen} from '@testing-library/react';
import LandingPage from './LandingPage'
import {BrowserRouter} from 'react-router-dom'

describe('LandingPage', () => {
  it('should render a welcome message', () => {
    render (
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )

    let welcomeMessage = screen.getByText('Career Day!', {exact: false})
    let secondHalf = screen.getByText('Welcome To', {exact: false})
    let welcomemsg = screen.getByText('A place to find opportunities, search careers and get inspiration')
    expect(welcomeMessage).toBeInTheDocument()
    expect(secondHalf).toBeInTheDocument()
    expect(welcomemsg).toBeInTheDocument()
  })

  it('should render an image', () => {
    render (
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )

    let homeImage = screen.getByRole('img')
    expect(homeImage).toBeInTheDocument()
  })
})