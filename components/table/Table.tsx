import * as React from 'react'

interface props {
  title: string
  data: any[]
}

const Table: React.StatelessComponent<props> = (props) => {
  console.log(props)
  console.log(props.data)
  return (
    <div>
      <h2>{props.title}</h2>
      <table>
        <thead>
        <tr>
          <th>Countries</th>
          <th>Visa</th>
          <th>Max Age</th>
          <th>Length</th>
          <th>Degree</th>
          <th>Notes</th>
          <th>Refs</th>
        </tr>
        </thead>
        <tbody>
        {
          props.data.map(item => (
            <tr>
              <td>Australia</td>
              <td>Yes</td>
              <td>30</td>
              <td>1</td>
              <td>No</td>
              <td>Max 3 months at each job.</td>
              <td>ref</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <style jsx>
        {`
        table, tr, td, th {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 3px;
        }
     `}
      </style>
    </div>
  )
}

Table.defaultProps = {
  title:'',
  data: []
}

export default Table
