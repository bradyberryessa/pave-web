import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import validate from 'validate.js'
import CancelConfirmButtons from '../../../CancelConfirmButtons'
import Drawer from '../../../Drawer'
import TextField from '../../../Form/TextField'
import CreateUser from './gql/mutations/CreateUser.gql'
import UpdateUser from './gql/mutations/UpdateUser.gql'
import GetUser from './gql/GetUser.gql'
import { useMutation, useQuery } from 'react-apollo-hooks'

const initalFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false
}

const constraints = {
  firstName: {
    presence: { allowEmpty: false }
  },
  lastName: {
    presence: { allowEmpty: false }
  },
  email: {
    presence: { allowEmpty: false },
    email: true
  }
}

const PeopleDrawer = ({ createDrawer, personId, onCloseDrawerClick }) => {
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState({})
  const [createUser] = useMutation(CreateUser)
  const [updateUser] = useMutation(UpdateUser)
  const { firstName, lastName, email } = formValues
  const { data, loading } = useQuery(GetUser, {
    variables: { id: personId },
    skip: !personId
  })

  useEffect(() => {
    if (data?.user) {
      const { id, firstName, lastName, email, isAdmin } = data.user
      setFormValues({ id, firstName, lastName, email, isAdmin })
    }
  }, [data])

  if (loading) return null

  const onFormChange = event => {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
  }

  const onFirstNameBlur = () => onBlur('firstName')
  const onLastNameBlur = () => onBlur('lastName')
  const onEmailBlur = () => onBlur('email')

  const onBlur = id => {
    const validation = validate.single(formValues[id], constraints[id])
    setFormErrors({ ...formErrors, [id]: validation })
  }

  const onSubmit = event => {
    event.preventDefault()
    const variables = {
      input: { ...formValues }
    }
    if (createDrawer) return createUser({ variables }).then(onCloseDrawerClick)
    updateUser({ variables }).then(onCloseDrawerClick)
  }

  const firstNameErrors = formErrors?.firstName
  const lastNameErrors = formErrors?.lastName
  const emailErrors = formErrors?.email

  const hasErrors = !!validate(formValues, constraints)

  const title = createDrawer ? 'Create person' : 'Edit person details'

  return (
    <Drawer
      isOpen
      title={title}
      onCloseDrawerClick={onCloseDrawerClick}
    >
      <form css={formCss} onSubmit={onSubmit}>
        <div>
          <TextField
            error={!!firstNameErrors}
            helperText={firstNameErrors?.[0]}
            id="firstName"
            label="First name"
            value={firstName}
            onBlur={onFirstNameBlur}
            onChange={onFormChange}
          />
          <TextField
            error={!!lastNameErrors}
            helperText={lastNameErrors?.[0]}
            id="lastName"
            label="Last name"
            value={lastName}
            onBlur={onLastNameBlur}
            onChange={onFormChange}
          />
          <TextField
            error={!!emailErrors}
            errorMessages={['This field is required', 'Email is not valid']}
            helperText={emailErrors?.[0]}
            id="email"
            label="Email"
            validators={['required', 'isEmail']}
            value={email}
            onBlur={onEmailBlur}
            onChange={onFormChange}
          />
        </div>
        <CancelConfirmButtons
          isConfirmDisabled={hasErrors}
          onCancelClick={onCloseDrawerClick}
          onConfirmClick={onSubmit}
        />
      </form>
    </Drawer>
  )
}

const formCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export default PeopleDrawer
