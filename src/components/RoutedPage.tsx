import React from 'react'
import Page from './Page'
import { Route } from 'react-router-dom'

export interface PageProps {
  path: string
  linkTitle: string
  pageTitle: string
  pageDescription: string
  table: TableType
}

export interface TableType {
  apiEndpoint: string
  columns: Array<TableColumn>
}

export interface TableColumn {
  title: string
}

const RoutedPage = ({
  path,
  linkTitle,
  pageTitle,
  pageDescription,
  table
}: PageProps) => (
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
