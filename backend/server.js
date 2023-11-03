import { ApolloServer, gql } from "apollo-server";

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const resolvers = {
  Query: {
    test: () => books,
  },
};

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    test: [Book]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
