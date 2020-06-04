import React from 'react'
import EmailCell from './exampleCells/EmailCell'

interface CellProps {
  text: string
  type: string
}

const TableCell = (props: CellProps) => {
  const { text, type } = props

  switch (type) {
    case 'email':
      return (
        <td>
          <EmailCell email={text} />
        </td>
      )
    default:
      return <td>{text}</td>
  }
}

export default TableCell

// Icon
// Hash lookup. --
