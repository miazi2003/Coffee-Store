import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/S4PkW98n/3.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-left flex">
            <div className="w-[50%]">
        
            </div>
          <div className="max-w w-[50%]">
            <h1 className="mb-5 text-4xl  font">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 fontTwo text-sm">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#D2B48C] font text-xl">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
