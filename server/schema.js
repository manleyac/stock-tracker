

const typeDefs = gql`
   type User {
      id: ID!
      email: String!
      password: String!
   }
`;

module.exports = typeDefs;