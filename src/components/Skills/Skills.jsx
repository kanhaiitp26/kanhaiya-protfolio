import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient bg-cover bg-no-repeat"
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 98%, 0% 100%)' }}
  >
    {/* Section Title - Enhanced */}
    <div className="text-center mb-16">
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">SKILLS</h2>
         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </div>
      <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories - Enhanced Tilt Effects */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1000}
          scale={1.03}
          transitionSpeed={1500}
          gyroscope={true}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#8245ec"
          glarePosition="all"
          className="rounded-2xl"
        >
          <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items with Enhanced Tilt */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={500}
                  scale={1.05}
                  transitionSpeed={1000}
                  className="rounded-xl"
                >
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/60 transition-all duration-300 group">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;