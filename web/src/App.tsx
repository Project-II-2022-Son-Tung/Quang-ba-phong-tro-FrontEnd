import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import Routes from './Routes'
import './index.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
const App = () => {
  const client = new ApolloClient({
    uri: process.env.BACKEND_URL + '/graphql',
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
