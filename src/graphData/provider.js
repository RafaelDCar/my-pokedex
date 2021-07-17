import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, from, HttpLink } from "@apollo/client";
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({message, path}) => {
      console.log('Error GraphQl', message)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:4000'})
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export const PokemonGraphProvider = (props) => {

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )

}

export default PokemonGraphProvider;