import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, portfolio } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link2,
}) => {
  return (
    <motion.div variants={fadeIn("center", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.05,
          speed: 300,
        }}
        className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-5 rounded-2xl sm:w-[338px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'
      >
        <div className='relative w-full h-[250px]'>
          <img 
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 gap-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-[#000000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-110'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link2, "_blank")}
              className='bg-[#000000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-110'
            >
              <img
                src={image}
                alt='portfolio'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#F6FA70] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} `}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-8 rounded-2xl shadow-lg'
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className='text-[#F6FA70]'
          >
            Proyectos
          </motion.span>
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap justify-center gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "proyectos");
