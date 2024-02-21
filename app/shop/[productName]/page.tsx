"use client";
import { getSingleProduct } from "@/services";
import {
  CartProduct,
  PRODUCT,
  SlugArray,
  ThumbnailProduct,
} from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import ExtraContent from "./ExtraContent";
import Recommendations from "./Recomendation";
import { useState } from "react";
import { ModalImage } from "./ModalImage";
import { useCartStore } from "@/app/hooks/useCartStore";
import { ModalCart } from "./ModalCart";

const SLUG_KEY = "productName";

const getProd = async (slug: string) => {
  const res = await getSingleProduct(slug);
  return res;
};

const SingleProduct = ({ params }: { params: { slug: string } }) => {
  const productName =
    params.hasOwnProperty(SLUG_KEY) && SlugArray.includes(params[SLUG_KEY])
      ? params[SLUG_KEY]
      : undefined;

  if (!productName) notFound();

  return <Product productName={productName} />;
};

export default SingleProduct;

const Product = ({ productName }: { productName: string }) => {
  /**
   * Modals Management
   */
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const toggleModalImg = () => setIsModalImageOpen((prev) => !prev);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const toggleModalCart = () => setIsCartModalOpen((prev) => !prev);

  const [quantity, setQuantity] = useState(1);

  /**
   * Cart Management
   */
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => getProd(productName),
  });

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>An Error as occurred please retry</p>;

  const {
    id,
    name,
    subDescription,
    skinType,
    productType,
    description,
    loveList,
    directions,
    ingredients,
    size,
    price,
    image,
    color,
    slug,
  } = data?.product as PRODUCT;

  const isProductInCart = cart.some((product) => product.id === id);
  const handleAddtoCartClick = () => {
    addToCart({
      id,
      name,
      size,
      image,
      subDescription,
      price,
      slug,
      quantity,
    });

    toggleModalCart();
  };

  return (
    <>
      {isModalImageOpen && (
        <ModalImage name={name} imgSrc={image.url} toggle={toggleModalImg} />
      )}
      {isCartModalOpen && isProductInCart && (
        <ModalCart
          name={name}
          imgSrc={image.url}
          price={price}
          toggle={toggleModalCart}
        />
      )}
      <div>
        <section className="single-product-page">
          <div className="img-container">
            <img
              src={image.url}
              alt={name}
              className="image-thumbnail"
              onClick={toggleModalImg}
            />
          </div>

          <div className="text-box">
            <h1 style={{ color: color.hex }}>#{name}</h1>
            <div className="prod-page-types">
              <h2>{subDescription}</h2>
              <div className="prod-page-skins">
                <span className="bold">{productType}</span> for{" "}
                <span className="bold">{skinType.join(" / ")}</span> skin
              </div>
              <span className="prod-page-size">{size}</span>
            </div>
            <span className="prod-page-price">${price}</span>
            <div className="button-section">
              {!isProductInCart && (
                <div className="prod-qty-section">
                  Qty:
                  <button
                    className="qty-slct"
                    disabled={quantity < 2}
                    onClick={() => setQuantity((prev) => prev - 1)}
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    className="qty-slct"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              )}
              <button
                className={`add-to-cart ${image.url}`}
                disabled={isProductInCart}
                onClick={handleAddtoCartClick}
              >
                <>{isProductInCart ? "in Cart" : "Add to Cart"}</>
              </button>
              <button onClick={clearCart}>clearCart</button>
            </div>
            <ExtraContent
              id={id}
              description={description}
              loveList={loveList}
              ingredients={ingredients}
              directions={directions}
            />
          </div>
        </section>
        <hr />
        <Recommendations recommendations={data?.recommendations} />
      </div>
    </>
  );
};
