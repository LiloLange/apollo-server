import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    greetings: String
  }
`;

export default typeDefs;
