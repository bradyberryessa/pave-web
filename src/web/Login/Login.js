import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import LoginUser from './gql/mutations/LoginUser.gql'
import TextField from '../Form/TextField'
import Button from '@material-ui/core/Button'
import validate from 'validate.js'
import { login } from '../../../authService'

const initialFormValues = {
  email: '',
  password: '',
}

const constraints = {
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
  }
}

const Login = ({ history }) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState({})
  const [loginUser] = useMutation(LoginUser)

  const { email, password } = formValues

  const onFormChange = event => {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
  }

  const onEmailBlur = () => onBlur('email')
  const onPasswordBlur = () => onBlur('password')

  const onBlur = id => {
    const validation = validate.single(formValues[id], constraints[id])
    setFormErrors({ ...formErrors, [id]: validation })
  }

  const onSubmit = event => {
    event.preventDefault()
    const variables = {
      input: {
        email,
        password
      }
    }
    loginUser({ variables }).then(({ data }) => {
      const accessToken = data?.loginUser
      if (data.loginUser) {
        login(accessToken)
        return history.push('/')
      }
      // show error that the password was wrong
    })
  }

  const emailErrors = formErrors?.email
  const passwordErrors = formErrors?.password

  const hasErrors = !!validate(formValues, constraints)

  return (
    <form onSubmit={onSubmit}>
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
      <Button disabled={hasErrors} type='submit'>Register</Button>
    </form>
  )
}

export default Login
