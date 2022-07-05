import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import Routes from './Routes'
import './index.css'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5050/graphql',
    cache: new InMemoryCache(),
    credentials: "include"
  });

  return (
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </RedwoodProvider>
  )
}

export default App
