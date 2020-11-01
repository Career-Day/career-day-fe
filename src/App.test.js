import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('./api/APICalls')

describe('App', () => {

  beforeEach( () => {
    render(
      <MemoryRouter>
        <App /> 
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('heading', { name: 'Welcome To Career Day!' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cartoon of student on laptop'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByText('A place to find opportunities, search careers and get inspiration')).toBeInTheDocument()
  })
})

