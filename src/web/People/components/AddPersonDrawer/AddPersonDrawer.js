import React from 'react'
import Drawer from '../../../Drawer'

const AddPersonDrawer = ({ isAddPeopleDrawerOpen }) => {
  return (
    <Drawer
      isOpen={isAddPeopleDrawerOpen}
      title="Add person"
      onCancelClick={() => { }}
      onCloseDrawerClick={() => { }}
    >
      Testing this out
    </Drawer>
  )
}

export default AddPersonDrawer
