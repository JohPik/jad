import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string
);

export const getProducts = async () => {
  const query = gql`
    query Product {
      products(first: 18) {
        id
        name
        subDescription
        image {
          url
        }
      }
    }
  `;

  const result = await graphqlAPI.request(query);
  return result;
};
