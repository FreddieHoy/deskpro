import React from 'react'
import TableCell from './TableCell'
import styled from 'styled-components'

interface StyledRowProps {
  index: number
}

const TableRow = styled.tr<StyledRowProps>`
  background-color: ${(props) => (props.index % 2 ? '#EBEBEB' : 'white')};
`

interface TableEntriesProps {
  tableData: Array<object>
}

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
