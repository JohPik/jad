import { ThumbnailProduct } from "@/app/shop/Thumbnail";
import { PRODUCT } from "@/utils/constants";
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

export const getRecommendations = async (ids: string[]) => {
  const recommendationQuery = `
  query GetRecommendations {
    products(where: {id_in: ["${ids[0]}", "${ids[1]}",  "${ids[2]}"]}){
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
  const result = await graphqlAPI.request(recommendationQuery);
  return result;
};

export const getSingleProduct = async (slug: string) => {
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
          description
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
      products(first: 18) {
        id
      }
    }
  `;

  const result = await graphqlAPI.request(query);
  const product = result.product as PRODUCT;
  const products = result.products as Pick<PRODUCT, "id">[];

  const resultRecommendations = await getRecommendations(
    shuffle(products, product.id)
  );
  const recommendations = resultRecommendations.products as ThumbnailProduct[];

  return { product, recommendations };
};

const shuffle = (arr: Pick<PRODUCT, "id">[], id: string): string[] => {
  const filterArr = [...arr].filter((el) => el.id !== id);

  let m = filterArr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [filterArr[m], filterArr[i]] = [filterArr[i], filterArr[m]];
  }

  const result = filterArr.slice(0, 3).map((el) => el.id);
  return result;
};
