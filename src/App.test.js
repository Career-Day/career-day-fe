import React from 'react'
import { render, screen, fireEvent, waitFor, cleanup, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import {mockFetchAll, fakeData} from './FakeData'
import {fetchAllJobs, fetchSingleJob} from './api/APICalls'
import MutationObserver from '@sheerun/mutationobserver-shim'
jest.mock('./api/APICalls')
window.MutationObserver = MutationObserver

describe('App', () => {

  beforeEach( () => {
    jest.clearAllMocks()
    fetchAllJobs.mockResolvedValue(mockFetchAll)
    fetchSingleJob.mockResolvedValue({
      job: {
        id: 1,
        title: 'Graphic Designer',
        image_url: 'https://www.freepik.com',
        video_url: 'https://www.youtube.com/watch?v=kqwgs7vBMkU',
        min_salary: '$35k',
        max_salary: '$60k',
        long_description: 'Graphic designers are visual communicators.'
      }
    })
    render(<MemoryRouter><App /></MemoryRouter>)
  })
  afterEach(cleanup)

  it('Should render the correct content', () => {
    expect(screen.getByRole('heading', { name: 'Welcome To Career Day!' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cartoon of student on laptop'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByText('A place to find opportunities, search careers and get inspiration')).toBeInTheDocument()
  })
  it('Should be able to navigate to the home page see all of the jobs and then navigate to graphic designer', async() => {
    expect(screen.getByRole('heading', { name: 'Welcome To Career Day!' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cartoon of student on laptop'})).toBeInTheDocument()
    let explorebtn = (screen.getByRole('link', { name: 'Explore' }))
    expect(explorebtn).toBeInTheDocument()
    fireEvent.click(explorebtn)

    let eachJob = await waitFor( () => screen.getAllByTestId('singular-job'))
    let designer = await waitFor(() => screen.getByRole('heading', {name: 'Graphic Designer'}))
    expect(designer).toBeInTheDocument()
    expect(eachJob.length).toBe(15)
    fireEvent.click(designer)
    let detailstext = await waitFor(() => screen.getByText('Description:'))
    let detailstext2 =  screen.getByText('Graphic designers are visual communicators', {exact: false})
    expect(detailstext).toBeInTheDocument()
    expect(detailstext2).toBeInTheDocument()
    
    
  })
  it('Should allow a user to search a profession and filter the results down and access the graphic designer details page', async() => {
    expect(screen.getByRole('heading', { name: 'Welcome To Career Day!' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cartoon of student on laptop'})).toBeInTheDocument()
    let explorebtn = (screen.getByRole('link', { name: 'Explore' }))
    expect(explorebtn).toBeInTheDocument()

    fireEvent.click(explorebtn)
    let searchInput = screen.getByPlaceholderText('Search')
    expect(searchInput).toBeInTheDocument()
    
    await waitFor(() => expect(screen.getAllByTestId('singular-job').length).toBe(15))
    
    fireEvent.change(searchInput, {target: {name: 'Search', value: 'Graphic'}})

    expect(searchInput.value).toBe('Graphic')
    let designer = screen.getByText('Graphic Designer')
    expect(designer).toBeInTheDocument()
    fireEvent.click(designer)

    let detailsText = await waitFor(() => screen.getByText('Graphic designers are visual communicators', {exact:false}))
    expect(detailsText).toBeInTheDocument()
  })
})

