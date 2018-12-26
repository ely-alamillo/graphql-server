const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
  description: String
}
`;

const resolvers = {
  Query: {
    description: () => `test query`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`)
);
