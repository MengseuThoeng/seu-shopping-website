import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About us
                </h2>

                <p>
                  At SEU SHOPPING, we're more than just an online marketplace.
                  We're a community of passionate individuals dedicated to
                  providing you with the best shopping experience possible. With
                  a diverse range of products and a commitment to quality, we
                  strive to be your go-to destination for all your shopping
                  needs. .
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/pf.jpg"
            alt="mengseu"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
            layout="responsive" // Specify the layout to be responsive
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default page;
