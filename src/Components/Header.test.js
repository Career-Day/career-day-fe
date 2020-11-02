import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

describe('Header', () => {
  it('should render the title as a clickable link', () => {
    render (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    let title = screen.getByRole('link', { name: /career day/i })
  })

  it('should render a back button as a clickable link', () => {
    render (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    let backbtn = screen.getByTestId('back-btn')
    expect(backbtn).toBeInTheDocument()
  })

  it('should have a default profile image icon', () => {
    render (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    
    let icon = screen.getByTestId('profile-image')
    expect(icon).toBeInTheDocument()
  })
})