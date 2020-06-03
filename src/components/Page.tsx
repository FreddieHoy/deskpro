import React from 'react'

interface pageProps {
  path: String
  linkTitle: String
  pageTitle: String
  pageDescription: String
}

const Page = (props: pageProps) => {
  return (
    <div>
      <h4>{props.pageTitle}</h4>
      <p>{props.pageDescription}</p>
    </div>
  )
}

export default Page
