import * as React from "react";
import { ProductType } from "@/types/product";

//import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const CardHomeComponent = ({ name, category, image, price }: ProductType) => {
  return (
      <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div>
          <img
            className="object-cover h-64 w-full"
            src={image}
            alt="Converse sneakers"
          />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {name}
          </h2>
          <span className="font-normal text-gray-600">
            {category}
          </span>
          <span className="font-semibold text-gray-800">${price}</span>
        </div>

        <div className="flex gap-4 mt-4 px-4">
          <span className="sr-only">Colors available</span>

          <button
            aria-label="Yellow"
            className="p-1 border border-gray-200 rounded-full cursor-pointer bg-yellow-500"
          ></button>

          <button
            aria-label="Red"
            className="p-1 border border-gray-200 rounded-full cursor-pointer bg-red-500"
          ></button>

          <button
            aria-label="Blue"
            className="p-1 border border-gray-200 rounded-full cursor-pointer bg-blue-500"
          ></button>

          <button
            aria-label="Black"
            className="p-1 border border-gray-200 rounded-full cursor-pointer bg-gray-800"
          ></button>
        </div>

        <div className="mt-4 p-4 border-t border-gray-200">
          <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800">
            <span className="text-base">Add to Cart</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </article>
  );
};

export default CardHomeComponent;
