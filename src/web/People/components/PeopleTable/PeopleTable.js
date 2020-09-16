import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Drawer from '../../../Drawer'

const GET_PEOPLE = gql`
  query GetPeople {
    users {
      id
      name
      email
    }
  }
`

const PeopleTable = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useQuery(GET_PEOPLE)
  const users = data?.users ?? []

  console.log('users', users)

  const onRowClick = () => setIsOpen(true)

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Date Added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ id, name, email }) => (
              <TableRow key={id} hover onClick={onRowClick}>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>02/04/2020</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        isOpen={isOpen}
        title="Edit person details"
        onCancelClick={() => setIsOpen(false)}
        onCloseDrawerClick={() => setIsOpen(false)}
      >
        Testing this out
      </Drawer>
    </>
  )
}

export default PeopleTable
