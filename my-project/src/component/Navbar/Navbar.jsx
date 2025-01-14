import img from '../../Logo/pngegg.png'
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md relative">
      <div className="flex justify-between items-center py-4 h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={img}
            alt="Logo"
            className="h-10 w-10 object-cover"
          />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Nasi<span className="text-green-500 text-2xl">r</span>
            </h1>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:static md:flex md:transform-none md:opacity-100`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-700 focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-green-500">Home</li>
            <li className="cursor-pointer hover:text-green-500">About</li>
            <li className="cursor-pointer hover:text-green-500">Portfolio</li>
            <li className="cursor-pointer hover:text-green-500">Contact Us</li>
          </ul>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </div>
  );
}
