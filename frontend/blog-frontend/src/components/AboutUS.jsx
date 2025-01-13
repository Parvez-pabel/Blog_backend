import React from "react";

const AboutUS = () => {
  return (
    <>
      <div className="container mx-auto mb-36 mt-36">
        <div className=" flex flex-row justify-center items-center ">
          <div className="w-96 mr-20 ">
            <h1 className="text-8xl font-bold mb-5">About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              turpis sed nisi finibus vulputate. Donec vel libero vel enim
              consequat dictum. Donec vel neque vel mi fermentum tincidunt.
              Donec vel lectus et risus placerat maximus.
            </p>
          </div>
          <div className="w-96 ml-32 ">
            <img
              className=""
              src="https://images.pexels.com/photos/30051039/pexels-photo-30051039/free-photo-of-monochrome-urban-cityscape-from-above-in-hamburg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
