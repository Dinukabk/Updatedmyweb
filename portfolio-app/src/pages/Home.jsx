import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Hi, I'm a Software Engineer</h1>
      <p className="text-lg text-gray-500 mt-4">I build modern web applications</p>
      <Link to="/projects">
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">
          View My Projects
        </button>
      </Link>
    </motion.div>
  );
};

export default Home;
