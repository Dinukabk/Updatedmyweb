import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio built with React, TailwindCSS, and Framer Motion.",
    link: "#"
  },
  {
    title: "Grocery Price Tracker",
    description: "Real-time scraping and Firebase-powered API to track vegetable & fish prices in Sri Lanka.",
    link: "#"
  },
  {
    title: "MediDelever App",
    description: "A Flutter app for ordering and tracking medical deliveries with real-time updates.",
    link: "#"
  },
  {
    title: "Academic Helper",
    description: "A platform to help university students with documentation, code, and research support.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <motion.div
      className="min-h-screen bg-white px-8 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
