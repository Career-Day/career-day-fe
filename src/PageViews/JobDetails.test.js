import React from 'react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { fetchSingleJob } from '../api/APICalls'
import { render, screen, waitFor } from '@testing-library/react'
import JobDetails from './JobDetails'
import { act } from 'react-dom/test-utils'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../api/APICalls')

describe('JobDetails', () => {

  it('Should render the correct content on page load', () => {
    let match = {params: {id: '1'}}

    render(
      <MemoryRouter>
        <JobDetails
          match={match}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Career Day' })).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })

  it('Should get the job details on load', async () => {
    let match = {params: {id: '2'}}

    fetchSingleJob.mockResolvedValue(
      {
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
    
    await act( async () => {
      render(
        <MemoryRouter>
          <JobDetails
            match={match}
          />
        </MemoryRouter>
      )
    })

    const jobName = await waitFor( () => screen.getByRole('heading', { name: 'Graphic Designer' }))
    const image = await waitFor( () => screen.getByRole('img', { name: 'Details' }))
    const video = await waitFor( () => screen.getByRole('video'))
    expect(fetchSingleJob).toHaveBeenCalled()
    expect(jobName).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(video).toBeInTheDocument()
  })
})