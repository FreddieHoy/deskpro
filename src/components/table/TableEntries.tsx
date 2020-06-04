import React from 'react'
import TableCell from './TableCell'
import styled from 'styled-components'

interface StyledRowProps {
  index: number
}

const TableRow = styled.tr<StyledRowProps>`
  background-color: ${(props) => (props.index ? '#EBEBEB' : 'white')};
`

// tableData just object because fetched value types are unknown.
interface TableEntriesProps {
  tableData: Array<object>
}

// Note object order could be a bug - Made assumption.
const TableEntries = (props: TableEntriesProps) => {
  const { tableData } = props
  return (
    <tbody>
      {tableData.map((entry: object, index: number) => (
        <TableRow key={index} index={index}>
          {Object.entries(entry).map((pair) => (
            <TableCell key={pair[0]} text={pair[1]} type={pair[0]} />
          ))}
        </TableRow>
      ))}
    </tbody>
  )
}

export default TableEntries
