import React from "react";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Policy",
  description: "This is Product page store bro",
  keywords: ["shop", "anime", "shopping", "store"]
};
const page = () => {
  return (
    <div>
      return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-violet-600 mb-8">
            Our Policies
          </h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Policy 1: Shipping Policy */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Shipping Policy
              </h3>
              <p className="text-base text-gray-600">
                Our Shipping Policy outlines the terms and conditions regarding
                the shipping of products purchased from our website. We offer
                various shipping options to accommodate your needs. Please
                review this policy carefully before making a purchase.
              </p>
            </div>

            {/* Policy 2: Return Policy */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Return Policy
              </h3>
              <p className="text-base text-gray-600">
                We want you to be completely satisfied with your purchase. Our
                Return Policy allows you to return products within a specified
                period for a refund or exchange. Please refer to this policy for
                details on eligibility and procedures.
              </p>
            </div>

            {/* Policy 3: Privacy Policy */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Privacy Policy
              </h3>
              <p className="text-base text-gray-600">
                Protecting your privacy is important to us. Our Privacy Policy
                outlines how we collect, use, and safeguard your personal
                information. By using our website, you agree to the terms of
                this policy.
              </p>
            </div>

            {/* Policy 4: Terms of Service */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Terms of Service
              </h3>
              <p className="text-base text-gray-600">
                Our Terms of Service govern your use of our website and the
                products and services offered. It&apos;s important to review and
                understand these terms before engaging with our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
