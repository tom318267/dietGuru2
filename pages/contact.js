import React from "react";
import Navbar from "../components/Navbar";
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="my-16">
        <div className="flex flex-col items-center font-quicksand">
          <h1 className="uppercase text-4xl md:text-5xl mb-2 text-green font-semibold">
            Contact Us
          </h1>
          <p className="md:text-2xl mb-12">
            Reach out to us. We’ll be glad to answer any of your questions!
          </p>
        </div>

        <div className="flex flex-col items-center sm:flex-row justify-evenly">
          <div className="flex flex-col w-full sm:w-1/2 px-6">
            <input className="border contact-input" type="text" />
            <input className="border contact-input" type="text" />
            <textarea
              className="border contact-input"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="font-quicksand">
            <div className="border-b-2 border-green mb-4">
              <div className="flex items-center mb-6 gap-5">
                <LocationMarkerIcon className="h-10 text-green" />
                <h2>Levittown, PA</h2>
              </div>

              <div className="flex items-center mb-6 gap-5">
                <PhoneIcon className="h-10 text-green" />
                <h2>215-555-5555</h2>
              </div>

              <div className="flex items-center gap-5 mb-6">
                <MailIcon className="h-10 text-green" />
                <h2>dietguru@gmail.com</h2>
              </div>
            </div>
            <div className="flex justify-evenly social-icons space-x-4">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
