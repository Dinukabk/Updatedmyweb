import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
    </motion.div>
  );
};

export default Landing;
