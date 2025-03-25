import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 shadow-md z-50">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="hover:text-gray-300 transition-all duration-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-300 transition-all duration-300">About</Link></li>
        <li><Link to="/projects" className="hover:text-gray-300 transition-all duration-300">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300 transition-all duration-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
