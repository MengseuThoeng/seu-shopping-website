import React, { useEffect, useState } from "react";
import CardProductComponent from "@/components/cards/CardProductComponent";

import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./Loading";
import HeroSectionComponent from "@/components/layouts/HeroSectionComponent";

async function fetchProduct() {
  const product = await fetch("https://store.istad.co/api/products/", {
    cache: "no-store",
  });
  const res = await product.json();
  return res.results;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
      <HeroSectionComponent />
      <br />
      <h2 className="text-[40px] text-center text-purple-500 font-bold">
        Products
      </h2>
      <div className="mt-10 z-0 flex justify-center flex-wrap gap-7">
        <Suspense fallback={<LoadingComponent />}>
          {product?.map((pro: ProductType) => (
            <CardProductComponent
              image={pro.image}
              desc={pro.desc}
              name={pro.name}
              key={pro.id}
              price={pro.price}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
