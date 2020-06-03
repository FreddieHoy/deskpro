export const getPages = async () => {
  const res = await fetch('/express_backend/appData').then((res) =>
    res
      .json()
      .then((res) => res.body)
      .catch((error) => console.log(error))
  )
  console.log(res)
  return res
}
