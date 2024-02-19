"use client";
import { getProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";
import Thumbnail from "./Thumbnail";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const Shop = ({ searchParams }: Props) => {
  const getProds = async () => {
    const res = await getProducts();
    return res;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProds,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="shop">
      <div className="animation-wrapper">
        <h1 className="underline">Shop</h1>
        <ProductList data={data} isLoading={isLoading} error={error} />{" "}
      </div>
    </section>
  );
};

export default Shop;

const ProductList = ({
  data,
  isLoading,
  error,
}: {
  data: any;
  isLoading: boolean;
  error: Error | null;
}) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An Error as occurred please retry</p>;
  if (data) {
    return (
      <section className="shop-list">
        {data.products.map((product) => (
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
};
