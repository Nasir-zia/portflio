import img from '../../Logo/developer2_ai_open_file_dribbble-01_4x.webp'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiBootstrap, SiExpress } from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:mt-24 w-full">
          {/* Left Section */}
          <div className="md:w-1/2 pr-8 md:pr-12">
            <span className="text-lg font-semibold">Welcome to my feed</span>
            <div className="flex font-bold text-2xl mt-2">
              <h1>I am Front-end</h1>
              <h1 className="text-red-800 lg:mx-1">Developer</h1>
            </div>
            <p className="mt-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui tempora at voluptatibus
              quisquam odio accusantium voluptatem, repudiandae eveniet, doloribus, suscipit a vel iusto laborum?
              Impedit dolores reiciendis accusamus repellendus natus!
            </p>

            {/* Icons Section */}
            <h1 className="mt-4 font-bold">Work at </h1>
            <div className="mt-3 flex flex-wrap gap-3 justify-center md:justify-start text-xl sm:text-2xl space-x-3">
              {/* Tech Stack Icons */}
              <SiMongodb
                className="text-green-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-green-500"
                title="MongoDB"
              />
              <SiJavascript
                className="text-yellow-500 transition duration-300 ease-in-out transform hover:scale-125 hover:text-yellow-400"
                title="JavaScript"
              />
              <FaHtml5
                className="text-orange-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-orange-500"
                title="HTML5"
              />
              <FaCss3Alt
                className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-blue-500"
                title="CSS3"
              />
              <SiBootstrap
                className="text-indigo-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-indigo-500"
                title="Bootstrap"
              />
              <SiTailwindcss
                className="text-cyan-500 transition duration-300 ease-in-out transform hover:scale-125 hover:text-cyan-400"
                title="Tailwind CSS"
              />
              <SiExpress
                className="text-gray-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-gray-500"
                title="Express.js"
              />
              <FaNodeJs
                className="text-green-500 transition duration-300 ease-in-out transform hover:scale-125 hover:text-green-400"
                title="Node.js"
              />
              <FaReact
                className="text-blue-500 transition duration-300 ease-in-out transform hover:scale-125 hover:text-blue-400"
                title="React"
              />
            </div>

            {/* Social Media Icons */}
            <h1 className="mt-3 font-bold">Also available on</h1>
            <div className="flex space-x-3 gap-4 mt-4">
              <FaFacebook
                className="text-blue-800 transition duration-300 ease-in-out transform hover:scale-125 hover:text-blue-600"
                title="Facebook"
              />
              <FaInstagram
                className="text-pink-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-pink-400"
                title="Instagram"
              />
              <FaYoutube
                className="text-red-600 transition duration-300 ease-in-out transform hover:scale-125 hover:text-red-400"
                title="YouTube"
              />
              <FaTwitter
                className="text-blue-500 transition duration-300 ease-in-out transform hover:scale-125 hover:text-blue-400"
                title="Twitter"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <img src={img} className="w-full h-96 object-contain" alt="Portfolio Logo" />
          </div>
        </div>
      </div>
    </>
  );
}
