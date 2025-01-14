import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function TechCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-10 mt-9 ">
      {/* MongoDB Card */}
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center lg:w-96">
        <SiMongodb className="text-green-600 text-6xl mb-4" />
        <h2 className="font-bold text-xl">MongoDB</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Video
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Source Code
          </button>
        </div>
      </div>

      {/* Express Card */}
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center lg:w-96">
        <SiExpress className="text-black text-6xl mb-4" />
        <h2 className="font-bold text-xl">Express JS</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Video
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Source Code
          </button>
        </div>
      </div>

      {/* React Card */}
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center lg:w-96">
        <FaReact className="text-blue-500 text-6xl mb-4" />
        <h2 className="font-bold text-xl">React JS</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Video
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Source Code
          </button>
        </div>
      </div>

      {/* Node.js Card */}
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center lg:w-96">
        <FaNodeJs className="text-green-500 text-6xl mb-4" />
        <h2 className="font-bold text-xl">Node JS</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Video
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Source Code
          </button>
        </div>
      </div>

      {/* Java Card */}
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center lg:w-96">
        <FaJava className="text-orange-500 text-6xl mb-4" />
        <h2 className="font-bold text-xl">Java</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Video
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Source Code
          </button>
        </div>
      </div>

      {/* Python Card */}
      <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center lg:w-96">
        <FaPython className="text-yellow-500 text-6xl mb-4" />
        <h2 className="font-bold text-xl">Python</h2>
        <p className="text-gray-600 text-center mt-2 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Video
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
}
