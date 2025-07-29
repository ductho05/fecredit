/**
 * Button call component
 *
 * Make a phone call when user click
 */
import AppConstants from "@/app-constants";
import React from "react";
import style from "./ButtonCall.module.css";

function ButtonCall() {
  return (
    <a
      href={`tel:${AppConstants.APP_PHONE}`}
      className={`${style.call_smooth} fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-all`}
      style={{
        boxShadow:
          "0 4px 16px rgba(0,0,0,0.15), 0 8px 32px 0 rgba(34,197,94,0.25)",
        touchAction: "manipulation",
      }}
    >
      <span className={`${style.call_bell}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 7.042 5.708 12.75 12.75 12.75.621 0 1.125-.504 1.125-1.125v-2.25a1.125 1.125 0 0 0-1.125-1.125c-1.26 0-2.47-.21-3.6-.6a1.125 1.125 0 0 0-1.17.27l-.9.9a10.5 10.5 0 0 1-4.2-4.2l.9-.9a1.125 1.125 0 0 0 .27-1.17c-.39-1.13-.6-2.34-.6-3.6A1.125 1.125 0 0 0 5.25 3.75h-2.25C2.754 3.75 2.25 4.254 2.25 4.875v1.875z"
          />
        </svg>
      </span>
      Gọi ngay
    </a>
  );
}

export default ButtonCall;
