/**
 * Navbar component
 *
 * Include website logo
 *
 * handle make a phone call when user click on button
 */
"use client";
import AppConstants from "@/app-constants";
import React, { useEffect, useState } from "react";
import LoanButton from "./LoanButton/LoanButton";
import { ButtonType } from "./LoanButton/LoanButton.type";

const Navbar: React.FC = () => {
  // Define fixed status
  const [isFixed, setIsFixed] = useState(false);

  /**
   * handle when user scroll page
   *
   * update navbar fixed status
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > AppConstants.NAV_HEIGHT) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // remove event when close window
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`bg-white shadow transition-all z-50 h-[${
        AppConstants.NAV_HEIGHT
      }px] ${
        isFixed
          ? "fixed top-0 left-0 w-full animate-navbar-fade-in"
          : "relative"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex items-center gap-6">
          <li>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                {/* Logo */}
                <span className="text-white text-xl font-bold">
                  {AppConstants.APP_LOGO}
                </span>
              </div>
              {/* Website name */}
              <span className="text-xl font-bold text-blue-700">
                {AppConstants.APP_NAME}
              </span>
            </div>
          </li>
        </ul>
        {/* loans button */}
        <LoanButton name="Đăng ký vay" type={ButtonType.blue} />
      </div>
    </nav>
  );
};

export default Navbar;
