# DeskPro Codetest

## Getting Started

1. Clone the GitHub repo down to your local machine.

2. cd into the repository.

3. Install npm packages by running.

> npm i

4. First serve the back end in one terminal window.

> npm run start-backend

In the terminal it should log: `Listening on port 5000`

5. Now serve the frontend in a different terminal window using the command:

> npm run start-frontend

This should serve the frontend on port 3000. It should then automatically open a browser window with the app.

If not - check that the terminal window is logging: `Compiled successfully!`

Then in your browser search: http://localhost:3000/#/page-one

## Tests

Run the automated tests using this in the command line:

> npm run test

## Brief

- Create a React App that Dynamically creates components and pages from the results of an API call.
- The App must use React Router to create different pages.
- Each page must contain:
  - Header
  - Description
  - Table
- The table must be created dynamically using another API call.
- The cells within the table must allow for custom React components to be used IE to create links, icons, etc.
- Must use TypeScript and ReactHooks.

## Technology used.

- TypesScript
- React
- React Hooks
- React Router
- Express
- react-testing-library
- styled-components

# Approach Taken

### Initial setup with backend

This project was created using `create-react-app` for its speed. Attached along side is a basic express API for local development, found in the `api/` folder. The end point hit returns data that is used to create each page in the application. This is a very simple and speedy set up allowing time to focus on the frontend coding challenge.

### Creating different pages

The first big problem to over come once the backend was create, was to figure out how to create routes dynamically for each of the objects in the apps `appData` array. The solution was separated out of the `app.tsx` file into `components/RoutedPage.tsx` file.

Where as normally the Route component takes a prop of `component`, by using the prop `render` which takes a function, the necessary props can be passed into the `Page` component to create each page dynamically.

> src/components/RoutedPage.tsx

```
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
```

### Filling the table cells

It was understood that using the initial API call provided the headers to create the table dynamically. It was then clear that the data cells would have to be filled with table data from the API using the end point given in the fist call.

The data received from the API is an Array of objects (like below), where each object is a row in the table.

#### Table data format

```
[
  {
    name: 'Fred Hoy',
    email: 'freddiehoy0@gamil.com',
    age: 25,
    height: 6.3
  },
  {
    name: 'Jeff',
    email: 'jeff@notarealemail.com',
    age: 30,
    height: 6
  }
]
```

So in order to place the data in the table, the array is looped over and then the object.

```
const TableEntries = (props: TableEntriesProps) => {
  const { tableData } = props
  return (
    <tbody>
      {tableData.map((entry: object, index: number) => (
        <TableRow key={index}>
          {Object.entries(entry).map((pair) => (
            <TableCell key={pair[0]} text={pair[1]} type={pair[0]} />
          ))}
        </TableRow>
      ))}
    </tbody>
  )
}
```

The benefit of this structure is that looping over an object allows the use of the keys to be used as meta data for custom React components in each cell. This will be looked at more further on.

The issue with this however is that looping over an object can be messy and not very readable.

There is also room for error when it comes to the backend API. In order for the table to be constructed correctly, the order of table headers in the `table.columns` array in the initial API call, must match the order of key value pairs in this 'row' object. Otherwise the headers would not match the cell entries. This problem could be mitigated in the backend or alternatively the object keys could be matched with the table headings to ensure the values are placed in the right cell.

### Creating custom table cells

Filling a row in the table by mapping over an object meant that the keys of the object could be used to determine what kind of custom component would be used within the cell.

A switch Statement was used to check the cell entry type and use the suitable component.

> src/components/table/TableCell.tsx

```
const TableCell = (props: CellProps) => {
  const { text, type } = props

  switch (type) {
    case 'email':
      return (
        <TableData>
          <EmailCell email={text} />
        </TableData>
      )
    case 'icon':
      return (
        <TableData>
          <IconCell alt={text} imageSrc={text} />
        </TableData>
      )
    default:
      return <TableData>{text}</TableData>
  }
}
```

Only two custom react components were created as examples with in the folder:

> src/components/table/exampleCells/

### Defining types

A number of types are reused throughout out the app. Many of these are defined and export from one location to ensure types are kept the same across the application. For example:

> src/components/RoutedPage.tsx

```
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
```

When defining types of the incoming data tables the type is left as `object` as the incoming data is subject to change and so the types should not be defined.

> src/components/table/TableEntries.tsx

```
interface TableEntriesProps {
  tableData: Array<object>
}
```

### Testing

Most of my previous experience of frontend Testing has been using Enzyme and shallow rendering the components. However the problem with this when using hooks is that each hook must be mocked, making the use of enzyme very labor-some and difficult to understand.

Because of this I decided that the best approach would be to try out react-testing-library, which would only require the fetch requests to be mocked. It also happened to already be configured with CRA.

My limited experience with RTL was a struggle at first, however after understanding its asynchronous nature and the use of getByText(), wait() and act(), I was able to assert that, given the right props and request responses, the components correctly rendered what was expected.

RTL is used as a sort of frontend integration test. So my tests, although they are not on every component, they do test almost all the components by asserting that child components render when we would expect.

### Styling

The Styling was complete using `styled-components` package. This is very usefully allows the styles to be effected by props. For example, in the tables making the row colors alternate colors:

```
const TableRow = styled.tr<StyledRowProps>`
  background-color: ${(props) => (props.index % 2 ? '#EBEBEB' : 'white')};
`
```

Also I enjoyed finding these **_very very short stories_** that are used as the page descriptions.

# Conclusion

I've really enjoyed completing this code test. Some of they key learnings for me:

- React-testing-library
- A greater understanding of the idea of how to dynamically create an application using information provided by an API.
- Export TS types all from one location so that the information is uniform across the app.
- Quickly locally setting up a tiny backend for a frontend project.

# Appendix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
