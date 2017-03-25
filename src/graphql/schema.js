import Resolvers from './resolvers';
import {makeExecutableSchema} from 'graphql-tools';

const typeDefinitions = `
type Profile{
  firstName: String
  lastName: String
}

type User {
  _id: String! # the ! means that every author object _must_ have an id
  profile: Profile
  email: String
  messages: [Message] # the list of Posts by this author
}
type Message {
  _id: String!
  title: String
  text: String
  views: Int
  creator: User
}
# the schema allows the following two queries:
type Query {
  messages:[Message]
  users:[User]
}
# this schema allows the following two mutations:
type Mutation {
  createUser(
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    role:String!
  ): User
  createMessge(
    title: String!
    text: String!
    creatorId: Int!
  ): Message
}
# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  mutation: Mutation
}
`;
export default makeExecutableSchema({
  typeDefs: typeDefinitions,
  resolvers: Resolvers
});
