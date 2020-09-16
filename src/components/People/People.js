import React from 'react'
import Button from '@material-ui/core/Button'
import AppHeader from '../AppHeader'
import PeopleTable from '../PeopleTable'

const People = () => {
  return (
    <>
      <AppHeader>
        <h1>People</h1>
      </AppHeader>
      <Button variant="outlined" color="primary">Add person</Button>
      <PeopleTable />
    </>
  )
}

export default People