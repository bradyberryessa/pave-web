let accessToken

export const login = accessToken => {
  setAccessToken(accessToken)
}

export const logout = () => {
  setAccessToken('')
}

export const getAccessToken = () => accessToken

const setAccessToken = token => accessToken = token
