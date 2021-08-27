import React from "react";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/TestimonialCard";
import customer1 from "../assets/customer1.svg";
import customer2 from "../assets/customer2.svg";
import customer3 from "../assets/customer3.svg";
import { AnnotationIcon } from "@heroicons/react/solid";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <div className="Testimonials">
        <div className="flex flex-col items-center my-16">
          <h1 className="flex text-4xl uppercase mb-2 md:text-5xl font-semibold text-green">
            <AnnotationIcon className="h-10 md:h-16 relative md:bottom-1" />
            Testimonials
          </h1>
          <p className="md:text-2xl text-sm sm:text-xl text-center">
            See what our customers are saying about DietGuru!
          </p>
        </div>

        <TestimonialCard
          image={customer1}
          name={"Derrick"}
          title="Love this app!"
        />
        <TestimonialCard
          image={customer2}
          name={"Brenda"}
          title="I lost so much weight!"
        />
        <TestimonialCard
          image={customer3}
          name={"George"}
          title="I feel so better about myself!"
        />
      </div>
    </>
  );
};

export default Testimonials;
