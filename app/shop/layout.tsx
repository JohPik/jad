"use client";
import RQProvider from "@/utils/RQProvider";

const ShopLayoutWithProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <RQProvider>{children}</RQProvider>;
};

export default ShopLayoutWithProvider;
