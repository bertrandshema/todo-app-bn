// src/graphql/schema/index.ts

import { gql } from 'apollo-server';

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
    todoById(id: ID!): Todo
  }

  type Mutation {
    createTodo(title: String!, description: String): Todo!
    updateTodo(id: ID!, completed: Boolean!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`;

export default typeDefs;
