import AppConstants from "@/app-constants";
import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/Idauthentication.json";
import HomeHeroData from "./HomeHero.data";
import LoanButton from "../LoanButton/LoanButton";
import { ButtonType } from "../LoanButton/LoanButton.type";

function HomeHero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 to-blue-400 py-8 md:py-12 flex flex-col items-center text-white text-center">
      {/* slogan name */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">
        {HomeHeroData.sloganName}
      </h1>

      {/* content 1 */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
        <span className="text-yellow-300">{AppConstants.APP_NAME}</span>{" "}
        {HomeHeroData.heroContent1}
      </h1>

      {/* content 2 */}
      <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
        {HomeHeroData.heroContent2}
      </p>

      {/* button loan now */}
      <LoanButton name={HomeHeroData.buttonName} type={ButtonType.yellow} />

      {/* Lottie animation image */}
      <div className="mt-6 md:mt-8 w-full flex justify-center">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ height: 180, width: 320 }}
          className="mx-auto bg-transparent sm:h-[220px] sm:w-[400px] md:h-[300px] md:w-[800px]"
        />
      </div>
    </section>
  );
}

export default HomeHero;
