import React from "react";
import logo from "../assets/content.png";

function Nav() {
  return (
    <header className="w-full h-[80px] flex items-center justify-center">
      <navbar className="w-full flex items-center justify-between px-[14%]">
        {/* logo */}
        <figure className="w-36 cursor-pointer">
          <img src={logo} alt="" className="w-full" />
        </figure>
        {/* nav links */}
        <div className="flex items-center gap-8">
          <ul className="flex gap-4 items-center font-medium">
            <li>Home</li>
            <li>Pricing</li>
            <li>Sign In</li>
          </ul>
          <button className="bg-[#31C48D] px-8 py-3 rounded-3xl text-white">
            Sign Up
          </button>
        </div>
      </navbar>
    </header>
  );
}

export default Nav;
