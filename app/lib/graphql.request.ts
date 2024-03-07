import { GraphQLClient } from "graphql-request";

const endpoint =
  process.env.NEXT_PUBLIC_CONTENTFUL_URL ?? "http://localhost:3000";

const graphqlRequestClient = new GraphQLClient(endpoint, {
  headers() {
    return {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
    };
  },
});

export default graphqlRequestClient;
