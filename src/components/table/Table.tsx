import React, { useEffect, useState } from 'react'
import { getTableData } from '../../FetchData'
import TableEntries from './TableEntries'

import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
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

interface TableType {
  columns: Array<ColumnProps>
  apiEndpoint: string
}

interface ColumnProps {
  title: string
}

const Table = (props: TableProps) => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const callTableData = async () => {
      const tableData = getTableData(props.table.apiEndpoint)
      setTableData(await tableData)
    }
    callTableData()
  }, [props.table.apiEndpoint])

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
          {props.table.columns.map((column) => (
            <TableHeader key={column.title}>{column.title}</TableHeader>
          ))}
        </tr>
      </thead>
      <TableEntries tableData={tableData} />
    </StyledTable>
  )
}

export default Table
