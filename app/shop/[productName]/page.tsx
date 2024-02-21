"use client";
import { getSingleProduct } from "@/services";
import { PRODUCT, SLUGS, SlugArray } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import ExtraContent from "./ExtraContent";
import Recommendations from "./Recomendation";
import { useState } from "react";
import { ModalImage } from "./ModalImage";

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
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const toggleModalImg = () => setIsModalImageOpen(!isModalImageOpen);

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
  } = data?.product as PRODUCT;

  return (
    <>
      {isModalImageOpen && (
        <ModalImage name={name} imgSrc={image.url} toggle={toggleModalImg} />
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
              {/* {inCart ? null : (
              <div className="prod-qty-section">
                Qty:
                <button
                  className="qty-slct"
                  disabled={qty < 2}
                  onClick={() => this.setState({ qty: this.state.qty - 1 })}
                >
                  -
                </button>
                {qty}
                <button
                  className="qty-slct"
                  onClick={() => this.setState({ qty: qty + 1 })}
                >
                  +
                </button>
              </div>
            )} */}
              {/* <button
              className={`add-to-cart ${image.url}`}
              disabled={inCart}
              onClick={() => {
                addToCart(id, qty);
                openModalAddedToCart();
              }}
            >
              {inCart ? (
                <Fragment>in Cart</Fragment>
              ) : (
                <Fragment>Add to Cart</Fragment>
              )}
            </button> */}
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
