import React from 'react'

interface TableRowProps {
  tableData: Array<EntryData>
}

interface EntryData {
  name: string
  email: string
  age: number
  height: number
}

const TableRow = (props: TableRowProps) => (
  <tbody>
    {props.tableData.map((entry: EntryData) => (
      <tr key={Object.entries(entry)[0][1]}>
        {Object.entries(entry).map((pair) => (
          <td key={pair[1]}>{pair[1]}</td>
        ))}
      </tr>
    ))}
  </tbody>
)

export default TableRow
