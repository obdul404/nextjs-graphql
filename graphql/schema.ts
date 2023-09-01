export const typeDefs = `#graphql 
    type User {
    id: ID!
    name: String
    email: String
    role: String
  }

  type Query {
	  user(id: ID!): User 
    users: [User]
  }

  type Mutation {
    addUser (email:String, name:String, role:String) : User
  }
`;
