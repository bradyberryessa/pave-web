import React from 'react'
import App from './App'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo-hooks'
import { getAccessToken, logout } from '../authService'

const accessToken = getAccessToken()

const headers = {
  authorization: `Bearer ${accessToken}`
}

const logGQLErrors = graphQLErrors => {
  graphQLErrors.forEach(({ message, locations, path }) =>
    console.warn(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  )
}

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) logGQLErrors(logGQLErrors)
  console.log('networkError', networkError)
  if (networkError === 401) return logout() 
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const httpLink = createHttpLink({
  link,
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  request: operation => operation.setContext({ headers })
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({})
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
