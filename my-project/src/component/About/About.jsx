import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-5 lg:mx-20  ">
        {/* About Page Section */}
        <div className="col-span-1 lg:col-span-2 p-5 rounded-lg">
          <h1 className="font-bold text-3xl">About Page</h1>
          <p className="mt-3">
            Welcome to the About Page! Here, youll learn about the technologies
            I use as a developer. I specialize in building dynamic, responsive, and
            user-friendly web applications using cutting-edge tools and frameworks.
          </p>
        </div>

        {/* React Section */}
        <div className="flex-1 border border-blue-500 p-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-90">
          <div className="flex items-center space-x-3">
            <FaReact className="text-blue-500 text-3xl" />
            <h2 className="text-xl font-bold">React</h2>
          </div>
          <p className="mt-2">
            React is a powerful JavaScript library for building user interfaces.
            It allows developers to create reusable components and build scalable,
            dynamic single-page applications efficiently.
          </p>
        </div>

        {/* MongoDB Section */}
        <div className="flex-1 border border-green-600 p-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-90">
          <div className="flex items-center space-x-3">
            <SiMongodb className="text-green-600 text-3xl" />
            <h2 className="text-xl font-bold">MongoDB</h2>
          </div>
          <p className="mt-2">
            MongoDB is a NoSQL database that uses a document-oriented approach.
            Its highly scalable and flexible, making it an excellent choice for modern applications.
          </p>
        </div>

        {/* HTML Section */}
        <div className="flex-1 border border-orange-500 p-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-90">
          <div className="flex items-center space-x-3">
            <FaHtml5 className="text-orange-500 text-3xl" />
            <h2 className="text-xl font-bold">HTML</h2>
          </div>
          <p className="mt-2">
            HTML (HyperText Markup Language) forms the backbone of every web page.
            It structures the content, ensuring proper organization and accessibility.
          </p>
        </div>

        {/* CSS Section */}
        <div className="flex-1 border border-blue-600 p-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-90">
          <div className="flex items-center space-x-3">
            <FaCss3Alt className="text-blue-600 text-3xl" />
            <h2 className="text-xl font-bold">CSS</h2>
          </div>
          <p className="mt-2">
            CSS (Cascading Style Sheets) enhances the appearance of a website.
            It allows developers to control layout, colors, fonts, and responsiveness to deliver a polished look.
          </p>
        </div>

        {/* JavaScript Section */}
        <div className="flex-1 border border-yellow-500 p-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-90">
          <div className="flex items-center space-x-3">
            <FaJsSquare className="text-yellow-500 text-3xl" />
            <h2 className="text-xl font-bold">JavaScript</h2>
          </div>
          <p className="mt-2">
            JavaScript is a versatile programming language used to create dynamic and interactive
            web applications. Its an essential tool for front-end and back-end development,
            powering modern web experiences.
          </p>
        </div>
      </div>
    </>
  );
}
