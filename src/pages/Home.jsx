import Plasma from "../components/Plasma";
import React from "react";

const Home = () => {
  return (
    <div
      className="relative  text-white  min-h-screen bg-black w-full overflow-hidden"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
      <Plasma
        color="#1a1526"
        speed={0.9}
        direction="forward"
        scale={2.6}
        opacity={0.9}
        mouseInteractive={true}
      />
      <div className="absolute text-white inset-0 p-8 text-gray-900 z-10">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className="text-center">Welcome to my portfolio!</p>
      </div>
    </div>
  );
};

export default Home;
