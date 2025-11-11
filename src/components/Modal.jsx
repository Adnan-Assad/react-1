import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50  ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className=" modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          {/* modal content */}

          <h1 className="text-xl font-semibold mb-4 mt-6 mb-5 uppercase">
            Please Login Here....
          </h1>
          <form className="px-4">
            {/* email */}
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </div>
            {/* password */}
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password....."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </div>
            <div className="mt-5">
              <button className="hover:shadow-md rounded-md hover:bg-yellow-500 bg-pink-500 py-2 px-4 text-black font-bold  outline-none">
                LogIn
              </button>
            </div>
          </form>
          <div className="mt-5">
            <button
              onClick={onClose}
              className="hover:shadow-md rounded-md hover:bg-yellow-500 bg-pink-500 py-2 px-4 text-black font-bold  outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
