import React from 'react'

interface TableCellTestingWrapper {
  children: any
}

const TableCellTestingWrapper = (props: TableCellTestingWrapper) => (
  <table>
    <tbody>
      <tr>{props.children}</tr>
    </tbody>
  </table>
)

export default TableCellTestingWrapper
