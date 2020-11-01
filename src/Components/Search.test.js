import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Search from './Search'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('Search', () => {
    
  it('Should hold its value when interacted with', () => {
      let mockFun1 = jest.fn()
      let mockFun2 = jest.fn()  
      const setup = () => {
        const utils = render(
          <Search
            searchJobsByInput={mockFun1}
            searchJobsBySalaryRange={mockFun2}
          />) 
          
        const input = utils.getByPlaceholderText('Search')
        return {
          input,
          ...utils,
        }
      }  
      const { input } = setup()
      expect(input.value).toBe('')
      fireEvent.change(input, { target: { value: 'I love dogs' } })
      expect(input.value).toBe('I love dogs')
  })  

  it('Should fire a function when input is changed', () => {
      let mockFun1 = jest.fn()
      let mockFun2 = jest.fn()  
      const setup = () => {
        const utils = render(
          <Search
            searchJobsByInput={mockFun1}
            searchJobsBySalaryRange={mockFun2}
          />) 
          
        const input = utils.getByPlaceholderText('Search')
        return {
          input,
          ...utils,
        }
      }  
      const { input } = setup()
      expect(input.value).toBe('')
      fireEvent.change(input, { target: { value: 'I' } })
      fireEvent.change(input, { target: { value: 'I ' } })
      fireEvent.change(input, { target: { value: 'I l' } })
      expect(mockFun1).toBeCalledTimes(3)
  })
})