/**
 * Footer App component
 *
 * Description information website: Hotline, Copyright
 */
import AppConstants from "@/app-constants";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Liên hệ hỗ trợ</h3>
        <p className="mb-1">
          Hotline:{" "}
          <a href={`tel:${AppConstants.APP_PHONE}`} className="font-semibold">
            0866039789
          </a>
        </p>
        <p className="mt-4 text-sm">© 2025 FeCredit</p>
      </div>
    </footer>
  );
};

export default Footer;
