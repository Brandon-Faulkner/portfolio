'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';

const skills = [
  {
    name: 'Frontend Development',
    tech: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend Development',
    tech: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: FaDatabase, color: '#336791' },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card-bg rounded-xl p-6 shadow-lg transform-gpu"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skill.tech.map((tech, techIndex) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center p-3 rounded-lg bg-inner-card-bg"
            animate={{
              rotateY: isHovered ? 360 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{
              duration: 0.6,
              delay: techIndex * 0.1,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <tech.icon className="text-4xl mb-2" style={{ color: tech.color }} />
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-secondary-text">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;