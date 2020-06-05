import React from 'react'
import Table from './Table'
import { getTableData } from '../../FetchData'
import { render, wait, act } from '@testing-library/react'
import { mockAppData, mockTableData } from '../../testingData'

jest.mock('../../FetchData')
const mockedGetTableData = getTableData as jest.Mock

const mockTableProps = mockAppData[0].table

describe('Table', () => {
  beforeEach(() => {
    mockedGetTableData.mockClear()
  })
  it('Loading displays if there is no appData', async () => {
    mockedGetTableData.mockResolvedValue([])

    const { getByText } = render(<Table table={mockTableProps} />)
    await wait()

    act(() => {
      expect(getByText('Loading...')).toBeTruthy()
    })
  })

  it('The table renders the correct information', async () => {
    mockedGetTableData.mockResolvedValue(mockTableData)

    const { getByText } = render(<Table table={mockTableProps} />)
    await wait()

    expect(getByText('Email')).toBeTruthy()
    expect(getByText('Height')).toBeTruthy()
    expect(getByText('25')).toBeTruthy()
    expect(getByText('Jeff')).toBeTruthy()
    expect(getByText('jeff@notarealemail.com')).toBeTruthy()
    expect(getByText('6.3')).toBeTruthy()
  })
})
