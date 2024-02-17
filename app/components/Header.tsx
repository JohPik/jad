"use client";
import Link from "next/link";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import logo from "../../public/images/pictograms/Just-A-Dash-Beauty_Logo.svg";
import Image from "next/image";

enum SKIN_TYPE {
  OILY = "Oily",
  DRY = " Dry",
  SENSITIVE = "Sensitive",
  PROBLEMATIC = "Problematic",
  NORMAL = "Normal",
}

enum PRODUCT_TYPE {
  CLEANSER = "Cleanser",
  MIST = "Toning Mist",
  EXFOLIANT = "Exfoliant",
  SERUM = "Serum",
  MOISTURISER = "Moisturiser",
  TREATMENT = "Treatment",
}

const skinTypes = Object.values(SKIN_TYPE);
const productTypes = Object.values(PRODUCT_TYPE);
const VISIBLE_CLASS = "visible";

const MenuButton = ({
  mobileMenuToggle,
}: {
  mobileMenuToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const onClick = () => mobileMenuToggle((prev) => !prev);
  return (
    <div className="button-menu-toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25.01 16.91"
        className="menu-toggle-icon"
        onClick={onClick}
      >
        <title>Menu Toggle</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <rect width="25.01" height="2.97" rx="1.46" className="top" />
            <rect
              y="6.97"
              width="25.01"
              height="2.97"
              rx="1.46"
              className="mid"
            />
            <rect
              y="13.94"
              width="25.01"
              height="2.97"
              rx="1.46"
              className="bot"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const Header = () => {
  const [mobileMenu, mobileMenuToggle] = useState(false);
  const [secondaryMobileMenu, secondaryMobileMenuToggle] = useState(false);

  const hideMobilMenu = () => mobileMenuToggle(false);
  const showSecondaryMenu = () => secondaryMobileMenuToggle(true);
  const hideSecondaryMenu = () => secondaryMobileMenuToggle(false);

  useEffect(() => {
    //Toggle mobile menu and change look of mobile menu Button
    const menu = document.querySelector(".navbar-mobile"); //mobile menu
    const menuButton = document.querySelector(".button-menu-toggle"); //menu button

    return mobileMenu
      ? (menu?.classList.add(VISIBLE_CLASS),
        menuButton?.classList.add(VISIBLE_CLASS))
      : (menu?.classList.remove(VISIBLE_CLASS),
        menuButton?.classList.remove(VISIBLE_CLASS));
  }, [mobileMenu]);

  const cartLength = 2;

  return (
    <header>
      <section className="shipping-banner">
        Free Shipping in Australia over $100 Orders
      </section>

      <section className="header-navigation">
        <div className="logo-container">
          <Link href="/">
            <Image src={logo} alt="Just A Dash Beauty Logo" className="logo" />
          </Link>
        </div>

        <nav className="navbar-desktop">
          <ul className="nav-menu">
            <li className="primary-nav-item">
              <Link href="/shop/skintype=all&prodtype=all">SHOP</Link>
              <div className="dropdown-content">
                <div className="dropdown-col-1">
                  <span>Skin Type</span>
                  {skinTypes.map((skin) => (
                    <Link href="/">{skin}</Link>
                  ))}
                </div>
                <div className="dropdown-col-2">
                  <span>Product Type</span>
                  {productTypes.map((prod) => (
                    <Link href="/">{prod}</Link>
                  ))}
                </div>
              </div>
            </li>
            <li className="primary-nav-item">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="primary-nav-item">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="primary-nav-item">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <div className="cart-container">
          <Link href="/cart" className="cartLink">
            <img
              src="/images/pictograms//basket.svg"
              alt="Cart"
              className="cart-icon"
            />
            {cartLength < 1 ? null : (
              <div className="cartItems">{cartLength}</div>
            )}
          </Link>
        </div>

        <MenuButton mobileMenuToggle={mobileMenuToggle} />

        <nav className="navbar-mobile">
          <div className="main-mobile-items">
            <ul className="nav-menu">
              <li className="primary-nav-item">
                <Link href="/" onClick={hideMobilMenu}>
                  SHOP
                </Link>
                <span
                  className="open-secondary-menu-icon"
                  onClick={showSecondaryMenu}
                >
                  {">"}
                </span>
              </li>
              <li className="primary-nav-item">
                <Link href="/about" onClick={hideMobilMenu}>
                  ABOUT
                </Link>
              </li>
              <li className="primary-nav-item">
                <Link href="/faqs" onClick={hideMobilMenu}>
                  FAQs
                </Link>
              </li>
              <li className="primary-nav-item">
                <Link href="/contact" onClick={hideMobilMenu}>
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`secondary-mobile-items ${
              secondaryMobileMenu ? "visible" : ""
            }`}
          >
            <Link href="/">SHOP</Link>
            <span className="go-back-link" onClick={hideSecondaryMenu}>
              return
            </span>
            <div className="sublist-col-1">
              <span>Skin Type</span>
              {skinTypes.map((skin) => (
                <Link href="/" onClick={hideMobilMenu}>
                  {skin}
                </Link>
              ))}
            </div>
            <div className="sublist-col-2">
              <span>Product Type</span>
              {productTypes.map((prod) => (
                <Link href="/" onClick={hideMobilMenu}>
                  {prod}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};
