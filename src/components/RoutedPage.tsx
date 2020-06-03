import React from 'react'
import Page from './Page'
import { Route } from 'react-router-dom'

interface RoutedPageProps {
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

const RoutedPage = ({
  path,
  linkTitle,
  pageTitle,
  pageDescription,
  table
}: RoutedPageProps) => (
  <Route
    exact
    path={path}
    key={path}
    render={(props) => (
      <Page
        {...props}
        path={path}
        linkTitle={linkTitle}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        table={table}
      />
    )}
  />
)

export default RoutedPage
