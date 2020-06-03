import React from 'react'
import Table from './Table'

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
    <div>
      <h4>{props.pageTitle}</h4>
      <p>{props.pageDescription}</p>
      <Table table={props.table} />
    </div>
  )
}

export default Page
