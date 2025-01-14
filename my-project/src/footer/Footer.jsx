const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Us</h3>
            <p className="text-sm">
              We are committed to delivering the best experience for our users. 
              Stay connected with us for updates and more.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: support@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 1234 Street Name, City</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} YourCompany. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
