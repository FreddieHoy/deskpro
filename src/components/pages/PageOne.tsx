import React, { useEffect, useState } from 'react'

interface dataType {
  path: String
  linkTitle: String
  pageTitle: String
  pageDescription: String
}

const PageOne = () => {
  const [pageData, setPageData] = useState<null | dataType>(null)

  useEffect(() => {
    fetch('/express_backend/pageone').then((res) =>
      res
        .json()
        .then((res) => setPageData(res.body))
        .catch((error) => console.log(error))
    )
  }, [])

  console.log('pageData', pageData)

  if (!pageData)
    return (
      <div>
        <h4>Loading..</h4>
      </div>
    )

  return (
    <div>
      <h4>{pageData.pageTitle}</h4>
      <p>{pageData.pageDescription}</p>
    </div>
  )
}

export default PageOne
