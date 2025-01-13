import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-96 mx-auto">
          <h1 className="text-center text-2xl font-bold"> Our Services</h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid
            similique dicta.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 mb-10 ">
          {/* 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="avatar mx-auto">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="avatar mx-auto">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="avatar mx-auto">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* 1 */}
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="avatar mx-auto">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
