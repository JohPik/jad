"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const name = usePathname();
  const subName = name.substring(1);

  //home page
  if (name === "/") return;

  // single product
  if (subName.includes("/")) {
    return (
      <section className="breadcrumb-container">
        <Link href="/">Home</Link>
        {" > "}
        <Link href="/shop">Shop</Link>
        {" > "}
        <span>{subName.substring(5)}</span>
      </section>
    );
  }

  // all product
  if (subName.includes("/")) {
    return (
      <section className="breadcrumb-container">
        <Link href="/">Home</Link>
        {" > "}
        <span>{subName}</span>
      </section>
    );
  }

  //other pages
  return (
    <section className="breadcrumb-container">
      <Link href="/">Home</Link>
      {" > "}
      <span>{subName}</span>
    </section>
  );
};

export default BreadCrumb;
