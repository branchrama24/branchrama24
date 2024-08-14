import React, { useRef, useState  } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  icon,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring",  index * 0.0000, 0.00)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 150,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[126px] w-full'
      >
        <div className='relative w-full h-[75px]'>
          <img
            src={icon}
            alt='project_image'
            className='w-full h-full object-cover rounded-3xl'
          />
        </div>

        <div className='mt-0'>
          <h3 className='text-[#915EFF] text-center font-bold text-[12px]'>{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};


export const Tech = () => {
  return (
    <div>
      <motion.div
        variants={slideIn("center", "tween",0.0000, 0.00)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
        <span className='text-[#915EFF]'>Tecnologias</span>
        </h2>
        </motion.div>
        <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-1 text-secondary text-[15px] max-w-3xl leading-[30px]'
        >
        </motion.p>
      </div>

      <div className='mt-5 flex  flex-wrap justify-center gap-8'>
        {technologies.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>    
  );
}

export default SectionWrapper(Tech, "tech");
