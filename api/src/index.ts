import { ApolloServer } from 'apollo-server';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphqlResolvers } from './graphql/resolvers';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// This is for development only
const envConfig = dotenv.config();
dotenvExpand.expand(envConfig);

export const graphqlSchema = makeExecutableSchema({
  typeDefs: loadSchemaSync('**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: graphqlResolvers,
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: graphqlSchema,
  csrfPrevention: !!process.env.NODE_ENV,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
