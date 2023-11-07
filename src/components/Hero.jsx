import React from "react";
import img from "../assets/Image.png";

function Hero() {
  return (
    <section className="w-full h-[80vh] container max-w-6xl mx-auto flex items-center justify-between gap-4">
      {/* hero left */}
      <div className="flex flex-col gap-5">
        {/* text */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-7xl whitespace-normal">
            Organize Your Whole
            <span className="text-[#31C48D]"> Apartment</span> in
            <span className="text-[#31C48D]"> One</span> Spot
          </h2>
          <p className="whitespace-normal text-gray-500">
            Get your entire apartment in order with just one central
            organization hub - simplify your space and your life today!
          </p>
        </div>

        {/* btns */}
        <div className="flex gap-4">
          <button className="bg-[#31C48D] px-8 py-3 rounded-3xl text-white">
            Get Started
          </button>
          <button className="bg-white px-8 py-3 rounded-3xl text-[#263238] shadow">
            Watch Video
          </button>
        </div>
      </div>

      {/* hero right image */}
      <figure className="w-[70rem]"> 
        <img src={img} alt="" className="w-full"/>
      </figure>
    </section>
  );
}

export default Hero;
