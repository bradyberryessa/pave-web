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
import { func } from 'prop-types'
import FormattedDate from '../../../utils/FormattedDate'
import PeopleDrawer from '../PeopleDrawer/PeopleDrawer'

const GET_PEOPLE = gql`
  query {
    users {
      id
      firstName
      lastName
      email
      createdAt
    }
  }
`

const PeopleTable = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const { data } = useQuery(GET_PEOPLE)
  const users = data?.users ?? []

  const onRowClick = id => {
    setSelectedUserId(id)
    setIsOpen(true)
  }

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
            {users.map(({ id, firstName, lastName, email, createdAt, isAdmin }) => (
              <TableRow key={id} hover onClick={() => onRowClick(id)}>
                <TableCell>{`${firstName} ${lastName}`}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{isAdmin && 'Admin'}</TableCell>
                <TableCell>{<FormattedDate value={createdAt} />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isOpen && <PeopleDrawer personId={selectedUserId} onCloseDrawerClick={() => setIsOpen(false)} />}
    </>
  )
}

PeopleTable.propTypes = {
  onRowClick: func
}

export default PeopleTable
