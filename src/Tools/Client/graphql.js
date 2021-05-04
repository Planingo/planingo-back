const { ApolloClient, createHttpLink, InMemoryCache  } = require('@apollo/client/core')

const headers = {
	'x-hasura-role': 'admin',
}

const adminSecret = process.env.REACT_APP_AUTH_ADMIN_SECRET
if(adminSecret) 	headers['x-hasura-admin-secret'] = adminSecret

const httpLink = createHttpLink({
	uri: 'https://hogwarts-school.caprover.cocaud.dev/v1/graphql',
	headers,
  fetch: require('node-fetch'),
});

const hogwarts = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache({
    addTypename: false
  }),
  defaultOptions: {
    query: { fetchPolicy: 'network-only'}
  }
})

module.exports = {
  hogwarts
}
