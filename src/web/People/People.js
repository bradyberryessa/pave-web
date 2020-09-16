import React from 'react'
import Button from '@material-ui/core/Button'
import AppHeader from '../AppHeader'
import PeopleTable from './components/PeopleTable'

const People = () => {
  return (
    <>
      <AppHeader>People</AppHeader>
      <Button color="primary" variant="outlined">Add person</Button>
      <PeopleTable />
    </>
  )
}

export default People