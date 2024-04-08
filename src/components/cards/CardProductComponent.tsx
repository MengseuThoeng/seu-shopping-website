import * as React from "react";
import { ProductType } from "@/types/product";

const CardHomeComponent = ({ name, category, image, price }: ProductType) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-violet-500 ring-opacity-40 max-w-sm" style={{ width: "300px", height: "500px" }}>
      <div className="relative" style={{ width: "100%", height: "70%" }}>
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4" style={{ height: "30%" }}>
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {category}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHomeComponent;
