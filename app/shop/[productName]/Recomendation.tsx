import Link from "next/link";
import { ThumbnailProduct } from "../Thumbnail";

const Recommendations = ({
  recommendations,
}: {
  recommendations?: ThumbnailProduct[];
}) => {
  if (!recommendations) return;
  return (
    <div className="recommendation">
      <h2>you might also like</h2>
      <div className="recommendation-container">
        {recommendations.map((prod) => {
          return (
            <div key={prod.id} className="product-container">
              <Link href={"/"}>
                <div className="img-container">
                  <img
                    src={prod.image.url}
                    alt={prod.name}
                    className="image-thumbnail"
                  />
                </div>
              </Link>

              <Link href={"/"}>
                <h3>#{prod.name}</h3>
              </Link>
              <h4>{prod.subDescription}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
