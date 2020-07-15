import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

require('dotenv').config();

const apolloClient = new ApolloClient({
  uri: `${process.env.MIX_LDP_GATEWAY}/graphql`, // Server URL (must be absolute)
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
