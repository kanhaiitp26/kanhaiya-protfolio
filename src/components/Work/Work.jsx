import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-black relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-1 transition-transform duration-300 ease-in-out p-4 "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover shadow-md rounded-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-auto max-h-[90vh] relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-purple-500 transition-colors"
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 w-full flex justify-center items-center p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 w-full p-6 lg:p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-center text-sm font-semibold transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-center text-sm font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
