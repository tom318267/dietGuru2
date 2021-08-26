import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const TestimonialCard = ({ image, name, title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="TestimonialCard bg-darkGreen py-20 px-8 h-auto mx-10 rounded-xl mb-10"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="pr-5 mb-4">
          <Image layout="fixed" src={image} objectFit="cover" />
        </div>

        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">"{title}"</h1>
          <p className="mb-3 text-sm sm:text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            distinctio totam vero asperiores quibusdam quos nam ducimus officia
            porro repellendus eligendi iusto itaque ipsa a. Suscipit quibusdam
            quisquam eius eligendi.
          </p>
          <p className="font-bold text-md sm:text-xl">- {name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
