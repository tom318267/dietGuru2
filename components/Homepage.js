import React from "react";
import Image from "next/image";
import berries from "../assets/berries.svg";
import LoseWeight from "./LoseWeight";
import woman from "../assets/woman.svg";

const Homepage = () => {
  return (
    <>
      <div className="relative flex h-screen justify-center">
        <div className="flex items-center pb-20">
          <div>
            <div className="w-[236px] flex flex-col">
              <h1 className="uppercase text-6xl lg:text-6xl font-extralight mb-3">
                Feel better, happy, healthy.
              </h1>
              <p className="text-gray-400 lg:text-xl mb-5 font-quicksand">
                The app that helps you reach your health and fitness goals!
              </p>
            </div>
            <div className="flex text-white text-md font-quicksand lg:text-lg">
              <button className="bg-darkGreen shadow-md py-2 lg:text-xl font-semibold w-1/2 mr-2 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
                Sign Up
              </button>
              <button className="bg-darkGreen shadow-md py-2 lg:text-xl font-semibold w-1/2 mr-2 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
                Login
              </button>
            </div>
          </div>
          <div className="hidden sm:inline-flex md:w-[60%] lg:w-[70%] lg:pl-6">
            <Image src={woman} />
          </div>
          <div className="absolute bottom-0 left-0">
            <Image src={berries} width={200} height={200} objectFit="cover" />
          </div>
        </div>
      </div>
      <LoseWeight />
    </>
  );
};

export default Homepage;
