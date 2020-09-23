import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import RegisterUser from './gql/mutations/RegisterUser.gql'
import TextField from '../Form/TextField'
import Button from '@material-ui/core/Button'
import validate from 'validate.js'

const initialFormValues = {
  companyName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const constraints = {
  companyName: {
    presence: { allowEmpty: false }
  },
  firstName: {
    presence: { allowEmpty: false }
  },
  lastName: {
    presence: { allowEmpty: false }
  },
  email: {
    presence: { allowEmpty: false },
    email: true
  },
  password: {
    presence: { allowEmpty: false },
    length: {
      minimum: 8,
      message: 'must be at least 8 characters'
    }
  },
  confirmPassword: {
    equality: 'password'
  }
}

const Register = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState({})
  const [registerUser] = useMutation(RegisterUser)

  const { companyName, firstName, lastName, email, password, confirmPassword } = formValues

  const onFormChange = event => {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
  }

  const onCompanyNameBlur = () => onBlur('companyName')
  const onFirstNameBlur = () => onBlur('firstName')
  const onLastNameBlur = () => onBlur('lastName')
  const onEmailBlur = () => onBlur('email')
  const onPasswordBlur = () => onBlur('password')
  const onConfirmPasswordBlur = () => {
    const errorMessage = confirmPassword === password ? null : ['is not equal to password']
    setFormErrors({ ...formErrors, confirmPassword: errorMessage })
  }

  const onBlur = id => {
    const validation = validate.single(formValues[id], constraints[id])
    setFormErrors({ ...formErrors, [id]: validation })
  }

  const onSubmit = event => {
    event.preventDefault()
    const variables = {
      input: {
        companyName,
        firstName,
        lastName,
        email,
        password
      }
    }
    registerUser({ variables }).then(data => console.log('data', data))
  }

  const companyNameErrors = formErrors?.companyName
  const firstNameErrors = formErrors?.firstName
  const lastNameErrors = formErrors?.lastName
  const emailErrors = formErrors?.email
  const passwordErrors = formErrors?.password
  const confirmPasswordErrors = formErrors?.confirmPassword

  const hasErrors = !!validate(formValues, constraints)

  return (
    <form onSubmit={onSubmit}>
      <TextField
        error={!!companyNameErrors}
        fullWidth={false}
        helperText={companyNameErrors?.[0]}
        id='companyName'
        label="Company name"
        value={companyName}
        onBlur={onCompanyNameBlur}
        onChange={onFormChange}
      />
      <TextField
        error={!!firstNameErrors}
        fullWidth={false}
        helperText={firstNameErrors?.[0]}
        id='firstName'
        label="First name"
        value={firstName}
        onBlur={onFirstNameBlur}
        onChange={onFormChange}
      />
      <TextField
        error={!!lastNameErrors}
        fullWidth={false}
        helperText={lastNameErrors?.[0]}
        id='lastName'
        label="Last Name"
        value={lastName}
        onBlur={onLastNameBlur}
        onChange={onFormChange}
      />
      <TextField
        error={!!emailErrors}
        fullWidth={false}
        helperText={emailErrors?.[0]}
        id='email'
        label="Email"
        value={email}
        onBlur={onEmailBlur}
        onChange={onFormChange}
      />
      <TextField
        error={!!passwordErrors}
        fullWidth={false}
        helperText={passwordErrors?.[0]}
        id='password'
        label="Password"
        type='password'
        value={password}
        onBlur={onPasswordBlur}
        onChange={onFormChange}
      />
      <TextField
        error={!!confirmPasswordErrors}
        fullWidth={false}
        helperText={confirmPasswordErrors?.[0]}
        id='confirmPassword'
        label="Confirm Password"
        type='password'
        value={confirmPassword}
        onBlur={onConfirmPasswordBlur}
        onChange={onFormChange}
      />
      <Button disabled={hasErrors} type='submit'>Register</Button>
    </form>
  )
}

export default Register
