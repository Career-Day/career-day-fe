import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import {mockFetchAll, fakeData} from './FakeData'
import {fetchAllJobs, fetchSingleJob} from './api/APICalls'
import MutationObserver from '@sheerun/mutationobserver-shim'
jest.mock('./api/APICalls')
window.MutationObserver = MutationObserver

describe('App', () => {

  beforeEach( () => {
    fetchAllJobs.mockResolvedValue([{
            id: 1,
            title: 'Graphic Designer',
            icon_url: 'https://www.flaticon.com/premium-icon/icons/svg/3270/3270930.svg',
            avg_salary: '$47k',
            short_description: 'Graphic designers develop graphics and layouts for product illustrations, company logos, websites and more.'
          },
          {
            id: 2,
            title: 'Software Developer',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/2463/2463510.svg',
            avg_salary: '$90k',
            short_description: 'Researching, designing, implementing and managing software programs.'
          },
          {
            id: 3,
            title: 'Dentist',
            icon_url: 'https://www.flaticon.com/svg/static/icons/svg/994/994888.svg',
            avg_salary: '$170k',
            short_description: 'Promote and assist in disease prevention and oral health.'
          }] )
  //   // fetchSingleJob.mockResolvedValue(mockFetchAll[0])
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
  it('Should be able to navigate to the home page see all of the jobs and then navigate to graphic designer', async() => {
    // fetchAllJobs.mockResolvedValue(fakeData.fakeJobs)
    expect(screen.getByRole('heading', { name: 'Welcome To Career Day!' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cartoon of student on laptop'})).toBeInTheDocument()
    let explorebtn = (screen.getByRole('link', { name: 'Explore' }))
    expect(explorebtn).toBeInTheDocument()
    fireEvent.click(explorebtn)
    // let eachJob = await waitFor( () => screen.getAllByRole('heading'))
    let designer = await waitFor(() => screen.getByRole('heading', {name: 'Graphic Designer'}))
    expect(designer).toBeInTheDocument()
    // expect(eachJob.length).toBe(15)
  })
})

