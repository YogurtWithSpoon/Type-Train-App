import React from 'react'
import {Table} from 'react-bootstrap'
function TableScore() {
  return (
    <>
    <h3 align="right">Best 10 Attempt</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Attempt</th>
          <th>Speed</th>
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>21.04</td>
          <td>290</td>
          <td>96%</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default TableScore
