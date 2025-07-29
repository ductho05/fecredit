"use client";
import HomeHero from "@/components/HomeHero/HomeHero";
import LoanProducts from "@/components/LoanProducts/LoanProducts";
import HomeData from "./home.data";
import LoyalCustomer from "@/components/LoyalCustomer/LoyalCustomer";
import LoansProcedure from "@/components/LoansProcedure/LoansProcedure";

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Banner */}
      <HomeHero />

      {/* Loan products */}
      <LoanProducts productInfo={HomeData.productInfo} />

      {/* loyal customer */}
      <LoyalCustomer />

      {/* loans procedure*/}
      <LoansProcedure procerudeInfo={HomeData.procerudeInfo} />
    </main>
  );
}
