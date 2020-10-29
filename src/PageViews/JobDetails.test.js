import React from 'react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { fetchSingleJob } from '../Components/APICalls'
import { render, screen, waitFor, waitForElement} from '@testing-library/react'
import JobDetails from './JobDetails'
import fakeData from '../FakeData'
jest.mock('../Components/APICalls')

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
    expect(screen.getByRole('img', { name: 'Details' })).toBeInTheDocument()
    expect(screen.getByRole('generic', { name: 'Video detailing the job' })).toBeInTheDocument()
  })

  it('Should get the job details on load', async () => {
    let match = {params: {id: '2'}}
    // let data = {
    //   job: {
    //     id: 1,
    //         title: 'Graphic Designer',
    //         image_url: 'https://www.freepik.com/blog/app/uploads/2018/07/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg',
    //         video_url: 'https://www.youtube.com/watch?v=kqwgs7vBMkU',
    //         min_salary: '$35k',
    //         max_salary: '$60k',
    //         long_description: 'Graphic designers are visual communicators.'
    //   }}

    const data = await fetchSingleJob.mockReturnValue(
      {
      job: {
        id: 1,
            title: 'Graphic Designer',
            image_url: 'https://www.freepik.com/blog/app/uploads/2018/07/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg',
            video_url: 'https://www.youtube.com/watch?v=kqwgs7vBMkU',
            min_salary: '$35k',
            max_salary: '$60k',
            long_description: 'Graphic designers are visual communicators.'
      }
    })
    
    render(
      <MemoryRouter>
        <JobDetails
          match={match}
          // data={data}
        />
      </MemoryRouter>
    )

    const jobName = await waitForElement( () => screen.getByRole('heading', { name: 'Graphic Designer' }))
    expect(jobName).toBeInTheDocument()


  })
})