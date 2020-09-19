import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AppHeader from '../AppHeader'
import PeopleTable from './components/PeopleTable'
import PeopleDrawer from './components/PeopleDrawer'

const People = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AppHeader>People</AppHeader>
      <Button color="primary" variant="outlined" onClick={() => setIsOpen(true)}>Add person</Button>
      <PeopleTable />
      {isOpen && <PeopleDrawer createDrawer onCloseDrawerClick={() => setIsOpen(false)} />}
    </>
  )
}

export default People