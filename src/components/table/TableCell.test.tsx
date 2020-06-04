import React from 'react'
import TableCell from './TableCell'
import { render } from '@testing-library/react'
// import { mockAppData } from '../testingData'

describe('TableCell', () => {
  it('should render the cell normally when given the type name', () => {
    const props = {
      text: 'Fred',
      type: 'name'
    }

    const { getByText } = render(<TableCell {...props} />)
    expect(getByText('Fred')).toBeTruthy()
  })
  it('should render the cell with an email compoent when given the type email', () => {
    const props = {
      text: 'fred@gmail.com',
      type: 'email'
    }

    const { getByTestId } = render(<TableCell {...props} />)
    expect(getByTestId('email-element')).toBeTruthy()
  })
  it('should render the cell with the icon component when given the type icon', () => {
    const props = {
      text: 'www.thisisanicon.icons',
      type: 'icon'
    }

    const { getByTestId } = render(<TableCell {...props} />)
    expect(getByTestId('icon-element')).toBeTruthy()
  })
})
