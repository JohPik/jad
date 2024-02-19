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
        slug
        subDescription
        skinType
        productType
        image {
          url
        }
      }
    }
  `;

  const result = await graphqlAPI.request(query);
  return result;
};

export const getSingleProduct = async (slug: string) => {
  console.log(slug);
  const query = gql`
    query SingleProduct {
      product(where: { slug: "${slug}" }) {
        id
        name
        subDescription
        skinType
        productType
        description
        loveList {
          id
        }
        directions
        ingredients
        size
        price
        image {
          url
        }
        color {
          hex
        }
      }
    }
  `;
  const result = await graphqlAPI.request(query);
  return result;
};
