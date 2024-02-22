import Link from "next/link";
import { useEffect } from "react";

type ModalCartType = {
  name: string;
  imgSrc: string;
  price: number;
  toggle: () => void;
};

export const ModalCart = ({ name, imgSrc, price, toggle }: ModalCartType) => {
  const cartContainer = document.querySelector(".cart-container");

  useEffect(() => {
    cartContainer?.classList.add("just-added");
    const timeoutId = setTimeout(() => {
      toggle();
      cartContainer?.classList.remove("just-added");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="modal">
      <div className="modal-container">
        <h3>Your product as been added to the Cart</h3>

        <div className="modal-prod-info">
          <img src={imgSrc} alt={`${name} in cart`} className="modal-img" />
          <p className="modal-name">#{name}</p>
          <p className="modal-price">${price}</p>
        </div>

        <div className="modal-button-section">
          <button className="keep-shopping" onClick={toggle}>
            Keep Shopping
          </button>

          <button className="go-to-cart" onClick={toggle}>
            <Link href="/cart">Go to Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
