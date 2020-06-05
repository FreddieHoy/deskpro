import React from 'react'
import TableCell from './TableCell'
import TableCellTestingWrapper from './TableCellTestingWrapper'
import { render } from '@testing-library/react'

describe('TableCell', () => {
  it('should render the cell normally when given the type name', () => {
    const props = {
      text: 'Fred',
      type: 'name'
    }

    // TableCell has to be wrapped by table, tbody and tr components otherwise React complains
    const { getByText } = render(
      <TableCellTestingWrapper>
        <TableCell {...props} />
      </TableCellTestingWrapper>
    )
    expect(getByText('Fred')).toBeTruthy()
  })
  it('should render the cell with an email compoent when given the type email', () => {
    const props = {
      text: 'fred@gmail.com',
      type: 'email'
    }

    const { getByTestId } = render(
      <TableCellTestingWrapper>
        <TableCell {...props} />
      </TableCellTestingWrapper>
    )
    expect(getByTestId('email-element')).toBeTruthy()
  })
  it('should render the cell with the icon component when given the type icon', () => {
    const props = {
      text: 'www.thisisanicon.icons',
      type: 'icon'
    }

    const { getByTestId } = render(
      <TableCellTestingWrapper>
        <TableCell {...props} />
      </TableCellTestingWrapper>
    )
    expect(getByTestId('icon-element')).toBeTruthy()
  })
})
