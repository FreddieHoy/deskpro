import React from 'react'
import EmailCell from './exampleCells/EmailCell'
import IconCell from './exampleCells/IconCell'

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
    case 'icon':
      return (
        <td>
          <IconCell alt={text} imageSrc={text} />
        </td>
      )
    default:
      return <td>{text}</td>
  }
}

export default TableCell

// Hash lookup. --
