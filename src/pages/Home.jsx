import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="w-full h-full bg-img bg-center bg-cover">
      <Nav />
      <Hero />
    </div>
  );
}

export default Home;
