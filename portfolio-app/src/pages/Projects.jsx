import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Voting System", tech: "Django, React, OpenCV", link: "#" },
  { id: 2, title: "Parking System", tech: "Node.js, Firebase", link: "#" },
];

const Projects = () => {
  return (
    <div className="min-h-screen p-10">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="p-4 border rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500">{project.tech}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
