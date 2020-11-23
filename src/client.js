import { ApolloClient } from '@apollo/client';
import cache from './graphql/cache';

const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});

export default client;