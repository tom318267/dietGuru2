import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const PlanCard = ({ color, price, plan, planList }) => {
  return (
    <div className="PlanCard flex flex-col items-center w-full h-auto cursor-pointer hover:scale-105 transition ease-in-out mb-8 rounded-2xl">
      <div className="flex flex-col uppercase text-3xl items-center justify-center h-[86px] rounded-t-2xl bg-white">
        <h1
          style={{ color: color }}
          className="font-semibold text-lg sm:text-xl"
        >
          {plan}
        </h1>
      </div>

      <div
        style={{ backgroundColor: color }}
        className="flex flex-col justify-center items-center text-white font-semibold w-full h-full rounded-b-2xl shadow-lg p-4"
      >
        <h1 className="text-2xl mb-2">{price}/month</h1>

        <div>
          <ul className="list-disc space-y-8 px-8 text-xs sm:text-xl mb-6">
            {planList}
          </ul>
        </div>
        <button className="bg-white flex justify-center items-center text-black w-11/12 py-2 rounded-full text-sm sm:text-lg md:text-lg shadow-lg font-semibold hover:shadow-xl active:scale-90 transition duration-150">
          <CheckIcon className="h-6 sm:h-10" /> Select Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
