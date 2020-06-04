import React, { useEffect, useState } from 'react'
import { getTableData } from '../../FetchData'
import TableEntries from './TableEntries'

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
    <table>
      <thead>
        <tr>
          {props.table.columns.map((column) => (
            <th key={column.title}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <TableEntries tableData={tableData} />
    </table>
  )
}

export default Table
