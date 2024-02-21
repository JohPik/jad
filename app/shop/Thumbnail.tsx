import { PRODUCT, ThumbnailProduct } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

type ThumbnailProps = {
  inCart?: boolean;
} & ThumbnailProduct;

const Thumbnail = ({
  id,
  slug,
  name,
  subDescription,
  image,
  inCart = false,
}: ThumbnailProps) => {
  return (
    <div key={id} className="product-container">
      {inCart ? <div className="already-in-cart">Already in Cart</div> : null}
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
