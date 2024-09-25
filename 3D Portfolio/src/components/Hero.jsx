import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import resume from "../docs/Rama.pdf";
import resume2 from "../docs/RAMA ENGLISH.pdf";
import { slideIn } from "../utils/motion";
const Hero = () => {
  // Función para renderizar las secciones de descarga
  const renderDownloadSection = (text, resumeLink, buttonText) => (
    <motion.div
        variants={slideIn("center", "tween", 0.05, 0.5)}
        className="bg-gradient-to-r from-[#1d1836] to-[#3b3054] p-8 rounded-2xl shadow-lg"
    >
      <p className={`${styles.sectionSubText} text-center`}>{text}</p>
      <div className="text-center mt-4">
        <a href={resumeLink} download={buttonText}>
          <button
            type="submit"
 className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-[#7a47e1] transition-all duration-300"
            aria-label={`Download ${buttonText}`} // Mejora de accesibilidad
          >
            {buttonText}
          </button>
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {renderDownloadSection(
        '"Si puedes imaginarlo, puedes programarlo."', 
        resume2, 
        "Descargar CV"
      )}
      {renderDownloadSection(
        '"If you can imagine it, you can program it"', 
        resume, 
        "Download CV"
      )}
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
