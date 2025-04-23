import React from "react";
import { education } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </motion.div>

      {/* Education Timeline */}
      <div className="max-w-5xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-10 sm:pl-16 mb-12 last:mb-0 group"
          >
            {/* Vertical line */}
            {index !== education.length - 1 && (
              <div className="absolute left-5 sm:left-7 top-8 bottom-0 w-0.5 bg-white/20 group-last:hidden"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-4 border-purple-500/80 flex items-center justify-center z-10">
              <span className="text-white font-bold">{index + 1}</span>
            </div>

            {/* Tilted Content Card */}
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.15} scale={1.02}>
              <div className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 shadow-lg overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Logo */}
                    <div className="shrink-0 w-20 h-20 rounded-lg bg-white/5 border border-gray-700/50 flex items-center justify-center p-2">
                      <img src={edu.img} alt={edu.school} className="max-h-full max-w-full object-contain" />
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <span className="text-sm text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">
                          {edu.date}
                        </span>
                      </div>

                      <h4 className="text-lg text-purple-200 font-medium mb-2">{edu.school}</h4>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium text-gray-300">Grade:</span>
                        <span className="px-3 py-1 text-sm font-bold text-white bg-purple-500/20 rounded-full">
                          {edu.grade}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed">{edu.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
