import React, { useEffect, useState } from 'react'
import { getTableData } from '../../FetchData'
import TableEntries from './TableEntries'
import { TableType } from '../RoutedPage'

import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 40px auto;
`

const TableHeader = styled.th`
  border: 1px solid black;
  padding: 10px 20px;
  background-color: #313639;
  color: white;
  font-weight: 100;
`

interface TableProps {
  table: TableType
}

const Table = (props: TableProps) => {
  const [tableData, setTableData] = useState([])
  const { table } = props

  useEffect(() => {
    const callTableData = async () => {
      const tableData = getTableData(table.apiEndpoint)
      setTableData(await tableData)
    }
    callTableData()
  }, [table.apiEndpoint])

  if (tableData.length === 0)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  return (
    <StyledTable>
      <thead>
        <tr>
          {table.columns.map((column) => (
            <TableHeader key={column.title}>{column.title}</TableHeader>
          ))}
        </tr>
      </thead>
      <TableEntries tableData={tableData} />
    </StyledTable>
  )
}

export default Table
