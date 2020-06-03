import React from 'react'
import Page from './Page'
import { Route } from 'react-router-dom'

interface RoutedPageProps {
  path: string
  linkTitle: string
  pageTitle: string
  pageDescription: string
}

const RoutedPage = ({
  path,
  linkTitle,
  pageTitle,
  pageDescription
}: RoutedPageProps) => (
  <Route
    key={path}
    path={path}
    render={(props) => (
      <Page
        {...props}
        path={path}
        linkTitle={linkTitle}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />
    )}
  />
)

export default RoutedPage
