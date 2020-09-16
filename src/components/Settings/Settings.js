import React, { Fragment, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Drawer from '../Drawer'
import AppHeader from '../AppHeader'
import ReadOnlyField from '../ReadOnlyField'
import { css } from '@emotion/core'

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false)

  const action = (
    <IconButton disableRipple onClick={() => setIsOpen(true)}><EditIcon /></IconButton>
  )

  return (
    <Fragment>
      <AppHeader>
        <h1>Settings</h1>
      </AppHeader>
      <div css={cardWidthCss}>
        <Card variant='outlined' raised>
          <CardHeader title="Company Info" action={action} />
          <CardContent>
            <ReadOnlyField label='Company Name' fieldText="Divvy" />
            <ReadOnlyField label='Billing Address' fieldText="13707 S 200 W Draper, UT 84020" />
            <ReadOnlyField label='Mailing Address' fieldText="13707 S 200 W Draper, UT 84020" />
          </CardContent>
        </Card>
      </div>
      <Drawer
        isOpen={isOpen}
        title="Edit company info"
        onCancelClick={() => setIsOpen(false)}
        onCloseDrawerClick={() => setIsOpen(false)}
      >
        Testing this out
      </Drawer>
    </Fragment>
  )
}

const cardWidthCss = css`
  width: 400px;
`

export default Settings