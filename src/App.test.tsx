import React from 'react'
import App from './App'
import { getPages } from './FetchData'
import { render, wait, act } from '@testing-library/react'
import { mockAppData } from './testingData'

jest.mock('./FetchData')
const mockedGetPages = getPages as jest.Mock

describe('App', () => {
  beforeEach(() => {
    mockedGetPages.mockClear()
  })
  it('Loading displays if there is no appData', async () => {
    mockedGetPages.mockResolvedValue(null)

    const { getByText } = render(<App />)
    await wait()

    act(() => {
      expect(getByText('Loading...')).toBeTruthy()
    })
  })

  it('Title renders when data is given', async () => {
    mockedGetPages.mockResolvedValue(mockAppData)

    const { getByText } = render(<App />)
    await wait()

    expect(getByText('DeskPro Codetest')).toBeTruthy()
    expect(getByText('Page One')).toBeTruthy()
  })
})
