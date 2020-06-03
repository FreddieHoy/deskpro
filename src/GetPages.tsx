export const getPages = async () => {
  const res = await fetch('/express_backend/appData').then((res) =>
    res
      .json()
      .then((res) => res.body)
      .catch((error) => console.log(error))
  )
  return res
}

export const getTableData = async (endPoint: string) => {
  const res = await fetch(`/express_backend/tables/${endPoint}`).then((res) =>
    res
      .json()
      .then((res) => res.body)
      .catch((error) => console.log(error))
  )
  console.log(res)
  return res
}
