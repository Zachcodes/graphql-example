// graphql-yoga is a fully featured GraphQL server with built in compatability for Apollo Client and Relay Client. Built on top of Apollo server which is an open source Node.js GraphQL server
const { GraphQLServer } = require('graphql-yoga')
// Prisma is an ORM that automatically maps your types to Postgres, MYSQL or Mongo. Also generates a GUI for interacting with your database
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')
const Hobby = require('./resolvers/Hobby')


const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Hobby
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))