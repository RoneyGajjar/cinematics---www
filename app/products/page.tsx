import type { Metadata } from "next";
import { ProductsPageContent } from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products",
  description: "The EGC Series - precision-engineered telescopic camera cranes, mobile bases, and production carts. EGC-20, EGC-40, EGC-60 with 6-hour SLA.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}