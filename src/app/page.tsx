import React, { useEffect, useState } from "react";
import CardProductComponent from "@/components/cards/CardProductComponent";

import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./Loading";
import HeroSectionComponent from "@/components/layouts/HeroSectionComponent";
import Link from "next/link";

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
      <h2 className='text-[30px] mt-4 text-center text-emerald-500 my-6'>Products</h2>
      <div className="mt-12 w-[95%] mx-auto z-0 flex justify-center flex-wrap gap-7">
      <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: ProductType) => {
          return(
            <Link href={`/productDetail/${pro.id}`} key={pro.id}>
            <CardProductComponent
            name={pro.name}
            desc={pro.desc}
            image={pro.image}
            price={pro.price}
          />
          </Link>
          
        )})}
        </Suspense>
      </div>
    </>
  );
}
