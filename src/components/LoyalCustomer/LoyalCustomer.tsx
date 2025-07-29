import React from "react";
import LoanButton from "../LoanButton/LoanButton";
import { ButtonType } from "../LoanButton/LoanButton.type";
import animationData from "../../assets/EasyLoan.json";
import Lottie from "lottie-react";
import LoyalCustomerData from "./LoyalCustomer.data";

function LoyalCustomer() {
  return (
    <section className="w-full bg-yellow-50 py-8 md:py-12 flex md:flex-row flex-col items-center justify-center text-center px-4">
      {/* loan image */}
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ height: 180, width: 320 }}
        className="sm:h-[220px] sm:w-[400px] md:h-[300px] md:w-[800px]"
      />
      <div className="max-w-2xl">
        {/* title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
          {LoyalCustomerData.title}
        </h2>
        <ul className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 list-disc list-inside text-left mx-auto max-w-lg">
          {/* object 1 */}
          <li className="mb-[10px]">
            <span className="font-semibold text-blue-700">Ưu tiên 1:</span>{" "}
            {LoyalCustomerData.object1}
          </li>

          {/* object 2 */}
          <li>
            <span className="font-semibold text-blue-700">Ưu tiên 2:</span>{" "}
            {LoyalCustomerData.object2}
          </li>
        </ul>

        {/* voucher */}
        <div className="text-base sm:text-lg md:text-xl text-green-700 font-bold mb-2">
          {LoyalCustomerData.voucher}
        </div>

        {/* loan button */}
        <LoanButton name="Đăng ký ngay" type={ButtonType.yellow} />
      </div>
    </section>
  );
}

export default LoyalCustomer;
