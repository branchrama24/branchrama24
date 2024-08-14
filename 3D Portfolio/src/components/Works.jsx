import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { portfolio } from "../assets";
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
    
    <motion.div variants={fadeIn("center", "spring", index * 0.0000, 0.00)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 150,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[338px] w-full'
      >
        
        <div className='relative w-full h-[250px]'>
          <img 
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-0 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link2, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={portfolio}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-1'>
          <h3 className='text-[#915EFF] font-bold text-[24px]'>{name}</h3>
          <p className=' mt-1 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-1 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[#915EFF] text-[14px] ${tag.color} `}
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
      <motion.div variants={textVariant()}
            className='flex-[0.00] bg-black-100 p-8 rounded-2xl'>
        <h2 className={`${styles.sectionHeadText} text-center `}>
        <span className='text-[#915EFF]'>Proyectos</span>
        </h2>
      </motion.div>


      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.00, 0)}
          className='mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        </motion.p>
      </div>

      <div className='mt-5 flex flex-wrap justify-center gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "proyectos");
