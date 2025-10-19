import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook /> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter /> Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram /> Instagram Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
