import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage'
import { MemoryRouter } from 'react-router-dom'

describe('LandingPage', () => {
  it('should render a welcome message', () => {
    render (
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
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
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )

    let homeImage = screen.getByRole('img')
    expect(homeImage).toBeInTheDocument()
  })
})