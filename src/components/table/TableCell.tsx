import React from 'react'
import EmailCell from './exampleCells/EmailCell'
import IconCell from './exampleCells/IconCell'

import styled from 'styled-components'

const TableData = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  margin: 0;
  padding: 10px;
`

interface CellProps {
  text: string
  type: string
}

const TableCell = (props: CellProps) => {
  const { text, type } = props

  switch (type) {
    case 'email':
      return (
        <TableData>
          <EmailCell email={text} />
        </TableData>
      )
    case 'icon':
      return (
        <TableData>
          <IconCell alt={text} imageSrc={text} />
        </TableData>
      )
    default:
      return <TableData>{text}</TableData>
  }
}

export default TableCell
