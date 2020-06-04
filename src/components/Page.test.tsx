import React from 'react'
import Page from './Page'
import { render } from '@testing-library/react'
import { mockAppData } from '../testingData'

describe('Page', () => {
  it('Page One title and descripton renders when given the correct props', () => {
    const { getByText } = render(<Page {...mockAppData[0]} />)

    const expectedParagraph =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    expect(getByText('Some Page One')).toBeTruthy()
    expect(getByText(expectedParagraph)).toBeTruthy()
  })
})
