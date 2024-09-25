import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { technologies } from "../constants";

const ProjectCard = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.05,
          speed: 300,
        }}
        className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-4 rounded-2xl sm:w-[126px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'
      >
        <div className='relative w-full h-[75px]'>
          <img
            src={icon}
            alt={`${name}_icon`}
            className='w-full h-full object-cover rounded-3xl'
          />
        </div>

        <div className='mt-4'>
          <h3 className='text-[#F6FA70] text-center font-bold text-[14px]'>
            {name}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

export const Tech = () => {
  return (
    <div>
      <motion.div
        variants={slideIn("center", "tween", 0.2, 0.75)}
        className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-8 rounded-2xl shadow-lg'
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          <motion.span whileHover={{ scale: 1.1 }} className='text-[#F6FA70]'>
            Tecnologías
          </motion.span>
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap justify-center gap-8'>
        {technologies.map((tech, index) => (
          <ProjectCard key={`tech-${index}`} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
