import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import resume from "../docs/Rama.pdf"
import resume2 from "../docs/RAMA ENGLISH.pdf"
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4'>
     <motion.div variants={textVariant()}
            className='flex-[1.75] bg-black-100 p-8 rounded-2xl'>
                <p className={`${styles.sectionSubText} text-center`}>"Si puedes imaginarlo, puedes programarlo."</p>
                <p className={`${styles.sectionSubText} text-center`}><a href={resume2} download={"Resume"}>
                <br></br>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-[#915EFF] font-bold shadow-md shadow-primary'
          >Descargar CV</button></a></p>
      </motion.div>
      <motion.div variants={textVariant()}
            className='flex-[1.75] bg-black-100 p-8 rounded-2xl'>
                <p className={`${styles.sectionSubText} text-center`}>"If you can imagine it, you can program it"</p>
                <p className={`${styles.sectionSubText} text-center`}><a href={resume} download={"Resume"}>
                <br></br>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-[#915EFF] font-bold shadow-md shadow-primary'
          >Download CV</button></a></p>
      </motion.div>
    </div>
  );
};

export default  SectionWrapper(Hero, "hero");
