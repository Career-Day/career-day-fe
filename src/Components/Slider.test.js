import React from 'react'
import '@testing-library/jest-dom'
// import { MemoryRouter } from 'react-router-dom'
// import { fetchSingleJob } from '../Components/APICalls'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Slider from './Slider'
// import fakeData from '../FakeData'
// import { act } from 'react-dom/test-utils'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
// jest.mock('../Components/APICalls')

describe('Slider', () => {
  it('Should render a slider', () => {
    let mockFun = jest.fn()
    render (
      <Slider 
        searchJobsBySalaryRange={mockFun}
      />
    )

    expect(screen.getAllByRole('slider')).toHaveLength(2)
  })

  it('Should trigger a function when the slider is moved', () => {
    let mockFun = jest.fn()
    
    render (
      <Slider 
      searchJobsBySalaryRange={mockFun}
      />
    )

    const sliders = screen.getAllByRole('slider')
    const slider = sliders[0]
    fireEvent.change(slider)
    expect(mockFun).toBeCalledTimes(0)
  })
})
