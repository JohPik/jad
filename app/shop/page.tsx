"use client";
import { getProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";
import Thumbnail, { ThumbnailProduct } from "./Thumbnail";
import { SKIN_TYPE, PRODUCT_TYPE, PRODUCT } from "@/utils/constants";
import { useEffect, useState } from "react";
import { Filter } from "./Fitler";

const PRODUCT = "product";
const SKIN = "skin";

const getProds = async () => {
  const res = await getProducts();
  return res;
};

const filterProducts = (
  products: [],
  productParam?: string,
  skinParam?: string
) => {
  let filteredProducts = [...products] as PRODUCT[];

  if (productParam) {
    filteredProducts = filteredProducts.filter(
      (product) => product.productType === productParam
    );
  }

  if (skinParam) {
    filteredProducts = filteredProducts.filter((product) =>
      product.skinType.includes(skinParam as SKIN_TYPE)
    );
  }

  return filteredProducts;
};

type ShopProps = {
  searchParams?: { [key: string]: string | undefined };
};
const Shop = ({ searchParams }: ShopProps) => {
  const productParam =
    searchParams?.hasOwnProperty(PRODUCT) &&
    Object.values(PRODUCT_TYPE).includes(searchParams?.product as PRODUCT_TYPE)
      ? (searchParams.product as PRODUCT_TYPE)
      : undefined;

  const skinParam =
    searchParams?.hasOwnProperty(SKIN) &&
    Object.values(SKIN_TYPE).includes(searchParams?.skin as SKIN_TYPE)
      ? (searchParams.skin as SKIN_TYPE)
      : undefined;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProds,
    // stale time is 1 hour
    staleTime: 1000 * 60 * 60,
  });

  const [productToDisplay, setProductToDisplay] = useState<
    ThumbnailProduct[] | null
  >(null);

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (data) {
      const products = data.products;

      setProductToDisplay(
        productParam || skinParam
          ? filterProducts(products, productParam, skinParam)
          : products
      );
    }
  }, [data, productParam, skinParam]);

  return (
    <section className="shop">
      <h1 className="underline">Shop</h1>
      <div className="shop-main">
        <Filter
          skinParam={skinParam}
          productParam={productParam}
          showFilter={showFilter}
        />
        <ProductList
          products={productToDisplay}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </section>
  );
};

export default Shop;

const ProductList = ({
  products = [],
  isLoading,
  error,
}: {
  products: ThumbnailProduct[] | null;
  isLoading: boolean;
  error: Error | null;
}) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An Error as occurred please retry</p>;
  if (products && products.length > 0) {
    return (
      <section className="shop-list">
        {products.map((product) => (
          <Thumbnail key={product.id} {...product} />
        ))}
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
      </section>
    );
  }
  return <p>Sorry no product match you research</p>;
};
