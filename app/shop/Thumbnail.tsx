import { ThumbnailProduct } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../hooks/useCartStore";

const Thumbnail = ({
  id,
  slug,
  name,
  subDescription,
  image,
}: ThumbnailProduct) => {
  const cart = useCartStore((state) => state.cart);
  const isProductInCart = cart.some((product) => product.id === id);

  return (
    <div key={id} className="product-container">
      {isProductInCart ? (
        <div className="already-in-cart">Already in Cart</div>
      ) : null}
      <Link href={`shop/${slug}`}>
        <div className="img-container">
          <Image
            src={image.url}
            alt={name}
            className="image-thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1160px) 33vw, 25vw"
            priority
          />
        </div>
      </Link>

      <Link href={`shop/${slug}`}>
        <h3>{name}</h3>
      </Link>
      <h4>{subDescription}</h4>
    </div>
  );
};

export default Thumbnail;
