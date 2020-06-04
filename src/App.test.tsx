import React from 'react'
import App from './App'
import { getPages } from './FetchData'

import { render, wait, act } from '@testing-library/react'

jest.mock('./FetchData')
const mockedGetPages = getPages as jest.Mock

const mockAppData = [
  {
    path: '/page-one',
    linkTitle: 'Page One',
    pageTitle: 'Some Page One',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    table: {
      apiEndpoint: 'table-one',
      columns: [
        { title: 'Name' },
        { title: 'Email' },
        { title: 'Age' },
        { title: 'Height' }
      ]
    }
  }
]

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
    expect(getByText('Some Page One')).toBeTruthy()
    expect(getByText('Some Page Two')).toBeTruthy()
    // More tests
  })
})

// React Testing libarary
// Is the user seeing everything
// intergration tests
