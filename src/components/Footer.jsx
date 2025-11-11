import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* category 2 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    E-commerce
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 3  */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* category 4 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Info
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    WiKi
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Fourm
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Subscription */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 rounded shadow-md hover:bg-orange-600 focus:outline-none border"
              >
                Subscrib
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              Empowering businesses through innovative software solutions. We
              specialize in crafting high-quality web, mobile. With a passion
              for technology and a commitment to excellence, our team delivers
              scalable and efficient software that helps you grow, innovate, and
              lead in the digital world.!!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy;Copyright 2025 | BY Adnan !!{" "}
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-500 transition-all duration-300 text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 transition-all duration-300 text-orange-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 transition-all duration-300 text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
