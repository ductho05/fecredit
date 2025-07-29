import Image from "next/image";
import React from "react";
import LoanProductsData from "./LoanProducts.data";
import AppConstants from "@/app-constants";
import ProductType from "@/types/ProductType";

function LoanProducts({ productInfo }: { productInfo: Array<ProductType> }) {
  return (
    <section
      id="san-pham"
      className="max-w-5xl mx-auto py-8 md:py-12 px-2 sm:px-4"
    >
      {/* title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6 md:mb-8 text-center">
        {LoanProductsData.title}
      </h2>

      {/* product list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {productInfo.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow p-6 flex flex-col items-center relative"
          >
            {/* product name */}
            <span className="absolute top-2 right-2 bg-yellow-300 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {LoanProductsData.tagName}
            </span>

            {/* product image */}
            <Image
              src={item.image}
              alt={item.alt}
              width={48}
              height={48}
              color="#666"
              className="mb-4"
            />

            {/* product description */}
            <p className="text-gray-700 mb-2 text-center">{item.description}</p>

            {/* loan action */}
            <a
              href={`tel: ${AppConstants.APP_NAME}`}
              className="text-blue-700 font-semibold hover:underline"
            >
              {LoanProductsData.buttonName}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoanProducts;
