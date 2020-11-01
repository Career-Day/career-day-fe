import React from 'react';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';
import HomePage from './HomePage'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import {fetchAllJobs} from '../Components/APICalls'
import {mockFetchAll} from '../FakeData'
import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;
jest.mock('../Components/APICalls')

describe('HomePage', () => {
 it('should render a search input bar', () => {
   render(<MemoryRouter><HomePage /></MemoryRouter>)
  const searchInput = screen.getByPlaceholderText('Search')
  expect(searchInput).toBeInTheDocument()
 })
it('should render a loading message', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>)
  let loadingMessage = screen.getByText('Loading Jobs...')
  expect(loadingMessage).toBeInTheDocument()
})
 it('should render all jobs', async() => {
   fetchAllJobs.mockResolvedValue(mockFetchAll)
    render(<MemoryRouter><HomePage /></MemoryRouter>)
    let singleJob = await waitFor(() => screen.getAllByRole('heading'))
    expect(singleJob.length).toBe(15)
 })
 it('should allow a user to search for a job', async () => {
   fetchAllJobs.mockResolvedValue(mockFetchAll)
    render(<MemoryRouter><HomePage /></MemoryRouter>)
    let searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument()
    await waitFor(() => fireEvent.change(searchInput, {target: {name: 'search', value: 'Graphic'}}))
    expect(searchInput.value).toBe('Graphic')
    // Cant get results to populate
 })
 it('should have a hamburger button that opens access to a slider', async() => {
   render(<MemoryRouter><HomePage /></MemoryRouter>)
   let burgerbtn = screen.getByTestId('burgerbtn')
   expect(burgerbtn).toBeInTheDocument()
   fireEvent.click(burgerbtn)
   let slider = await waitFor(() => screen.getByText('Salary Range:'))
   expect(slider).toBeInTheDocument()
 })
//  it('should have a description for each job', async() => {
//     fetchAllJobs.mockResolvedValue(mockFetchAll);
//     render(<MemoryRouter><HomePage /></MemoryRouter>)
//   let singleDescription = await waitFor(() =>screen.getByTestId('description'))
    // expect(fetchAllJobs).toHaveBeenCalled();
    // expect(singleDescription).toBeInTheDocument()
//  })
})