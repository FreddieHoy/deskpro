import React from 'react'

interface EmailCellProps {
  email: string
}

const EmailCell = (props: EmailCellProps) => {
  const { email } = props
  return (
    <a href={`mailto:${email}`} data-testid="email-element">
      {email}
    </a>
  )
}

export default EmailCell
