import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    request: (operation) => {
        const token: string | null = localStorage.getItem('token')
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
})

export default client