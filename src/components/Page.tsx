import React from 'react'
import Table from './table/Table'
import styled from 'styled-components'
import { PageProps } from './RoutedPage'

const Container = styled.div`
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
`

const Page = (props: PageProps) => {
  const { pageTitle, pageDescription, table } = props
  return (
    <Container>
      <h2>{pageTitle}</h2>
      <p>{pageDescription}</p>
      <Table table={table} />
    </Container>
  )
}

export default Page
