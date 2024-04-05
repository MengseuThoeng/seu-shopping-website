import React, { useEffect, useState } from "react";
import Image from "next/image";

export type ParamProps = {
  params: {
    id: string | number;
  };
};

async function getDetail(id: number | string) {
  const productDetail = await fetch(
    `https://store.istad.co/api/products/${id}`
  );
  return productDetail.json();
}

// export async function generateMetadata({ params }: ParamProps) {
//   const id = params.id;
//   const product = await getDetail(id);
// }

async function page({ params }: ParamProps) {
  const id = params.id;
  const productDetail = await getDetail(id);
  
  return (
    <>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
          <img
            className="xl:max-w-6xl"
            src={productDetail.image}
            alt={productDetail.image}
          />
          <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
            <div className="flex justify-between font-bold text-sm">
              <p>{productDetail.category}</p>
              <p className="text-gray-400">17th March, 2021</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10">
              {productDetail.name}
            </h2>
            <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
              {productDetail.desc}
            </p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
              Buy Now
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default page;
