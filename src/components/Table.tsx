import React, { useEffect, useState } from 'react'
import { getTableData } from '../GetPages'
import TableRows from './TableRows'

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

// why does it not complain when other fields like address are not here for tables 2 and 3
interface EntryData {
  name: string
  email: string
  age: number
  height: number
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

  console.log(tableData)

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
      <TableRows tableData={tableData} />
    </table>
  )
}

export default Table
