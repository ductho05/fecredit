import React from "react";
import LoansProcedureData from "./LoansProcedure.data";
import ProcerudeType from "@/types/ProcerudeType";

function LoansProcedure({
  procerudeInfo,
}: {
  procerudeInfo: Array<ProcerudeType>;
}) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* title */}
        <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
          {LoansProcedureData.title}
        </h2>

        {/* step list */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {procerudeInfo.map((item, index) => (
            <div
              key={`${item.stepName}${index}`}
              className="flex flex-col items-center"
            >
              {/* step number */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-700">
                  {index + 1}
                </span>
              </div>

              {/* step name */}
              <p className="font-semibold text-yellow-300 mb-2">
                {item.stepName}
              </p>

              {/* step description */}
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoansProcedure;
