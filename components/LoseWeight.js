import React, { useEffect } from "react";
import Image from "next/image";
import weightLossCircle from "../assets/weight_loss_circle.svg";
import phone from "../assets/phone.svg";

const LoseWeight = () => {
  return (
    <div className="flex relative justify-center items-center w-full h-screen gradient">
      <div className="sm:pr-10">
        <Image
          src={weightLossCircle}
          width={300}
          height={300}
          objectFit="contain"
        />
      </div>

      <div className="w-[50%] py-36">
        <h1 className="font-quicksand text-5xl uppercase font-semibold text-white mb-3">
          Lose weight and keep it off with our app!
        </h1>
        <p className="mb-5 font-quicksand lg:text-xl">
          Download our app for iPhone and Android!
        </p>
        <button className="bg-white py-2 px-4 lg:text-xl md:py-3 md:px-6 shadow-md font-quicksand font-bold rounded-full hover:shadow-xl active:scale-90 transition duration-150">
          Learn More
        </button>
      </div>
      <div className="phone hidden sm:inline-flex absolute bottom-0 right-0">
        <Image src={phone} width={300} height={300} objectFit="cover" />
      </div>
    </div>
  );
};

export default LoseWeight;
