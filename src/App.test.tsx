import React from 'react'
import App from './App'
import { getPages, getTableData } from './FetchData'
import { render, wait, act } from '@testing-library/react'
import { mockAppData } from './testingData'

jest.mock('./FetchData')
const mockedGetPages = getPages as jest.Mock
const mockedGetTableData = getTableData as jest.Mock

describe('App', () => {
  beforeEach(() => {
    mockedGetPages.mockClear()
    mockedGetTableData.mockClear()
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
    mockedGetTableData.mockResolvedValue([])

    const { getByText } = render(<App />)
    await wait()

    expect(getByText('DeskPro Codetest')).toBeTruthy()
    expect(getByText('Page One')).toBeTruthy()
  })
})
