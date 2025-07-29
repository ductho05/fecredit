/**
 * loan button
 *
 * make a phone call when user click to button
 */
import AppConstants from "@/app-constants";
import React from "react";
import { ButtonType } from "./LoanButton.type";

function LoanButton({ name, type }: { name: string; type: ButtonType }) {
  // button background color
  const btnBgcolor =
    type === ButtonType.yellow ? "bg-yellow-300" : "bg-blue-700";

  // button text color
  const btnTextColor =
    type === ButtonType.yellow ? "text-blue-900" : "text-white";

  // button background hover color
  const btnBgHoverColor =
    type === ButtonType.yellow ? "bg-yellow-400" : "bg-blue-800";
  return (
    <a
      href={`tel:${AppConstants.APP_PHONE}`}
      className={`inline-block px-6 py-2 sm:px-8 sm:py-3 ${btnBgcolor} ${btnTextColor} font-bold rounded 
      shadow hover:${btnBgHoverColor} transition text-sm sm:text-base md:text-lg`}
    >
      {name}
    </a>
  );
}

export default LoanButton;
