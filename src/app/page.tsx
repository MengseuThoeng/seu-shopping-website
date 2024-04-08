import React, { useEffect, useState } from "react";
import CardProductComponent from "@/components/cards/CardProductComponent";

import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./Loading";
import HeroSectionComponent from "@/components/layouts/HeroSectionComponent";
import Link from "next/link";

async function fetchProduct() {
  try {
    const product = await fetch("https://store.istad.co/api/products/", {
      cache: "no-store",
    });

    if (!product.ok) {
      throw new Error("Failed to fetch products");
    }

    const res = await product.json();
    return res.results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // or handle the error in an appropriate way
  }
}

export default async function Home() {
  const products = await fetchProduct();

  return (
    <>
      <HeroSectionComponent />
      <h2 className="text-[50px] mt-4 text-center font-bold text-violet-500 my-6">
        Products
      </h2>
      <div className="mt-12 w-[95%] mx-auto z-0 flex justify-center flex-wrap gap-7">
        {products?.map((product: ProductType) => (
          <Link href={`/productDetail/${product.id}`} key={product.id}>
            <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-violet-500 ring-opacity-40">
              <CardProductComponent
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
                desc={""} // Assuming you have a desc prop in CardProductComponent
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
