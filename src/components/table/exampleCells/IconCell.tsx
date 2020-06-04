import React from 'react'

interface IconCellProps {
  alt: string
  imageSrc: string
}

const IconCell = (props: IconCellProps) => {
  const { alt, imageSrc } = props
  return <img src={imageSrc} alt={alt} data-testid="icon-element" />
}

export default IconCell
