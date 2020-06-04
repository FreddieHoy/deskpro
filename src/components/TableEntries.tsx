import React from 'react'
import TableCell from './TableCell'

// tableData just object because fetched value types are unknown
interface TableRowProps {
  tableData: Array<object>
}

// Note object order could be a bug - Made assumption.
const TableEntries = (props: TableRowProps) => {
  console.log(props.tableData)
  return (
    <tbody>
      {props.tableData.map((entry: object, index: number) => (
        <tr key={index}>
          {Object.entries(entry).map((pair) => (
            <TableCell key={pair[0]} text={pair[1]} type={pair[0]} />
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableEntries
