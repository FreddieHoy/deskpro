import React from 'react'
import Table from './table/Table'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
`

interface PageProps {
  path: string
  linkTitle: string
  pageTitle: string
  pageDescription: string
  table: TableType
}

interface TableType {
  apiEndpoint: string
  columns: Array<TableColumnType>
}

interface TableColumnType {
  title: string
}

const Page = (props: PageProps) => {
  return (
    <Container>
      <h2>{props.pageTitle}</h2>
      <p>{props.pageDescription}</p>
      <Table table={props.table} />
    </Container>
  )
}

export default Page
