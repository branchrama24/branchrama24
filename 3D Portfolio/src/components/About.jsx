import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.3, 0.75)} // Animación de entrada suave
      className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-8 rounded-2xl shadow-lg'
    >
      <h2 className={`${styles.sectionHeadText} text-center text-white`}>
        <motion.span
          whileHover={{ scale: 1.1 }} // Efecto de agrandamiento al pasar el mouse
          className='text-[#F6FA70]'
        >
          Rama
        </motion.span>
      </h2>
      
      <p className={`${styles.sectionSubText} text-center text-white mt-4`}>
        Desarrollador enfocado en <span className="text-[#F6FA70]">convertir ideas en soluciones</span> prácticas, combinando creatividad y tecnología para crear experiencias digitales <span className="underline decoration-[#F6FA70]">impactantes</span>.
      </p>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");

