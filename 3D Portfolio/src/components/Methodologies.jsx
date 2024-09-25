import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { methodologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const PatternCard = ({ methodologiess }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836, #3b3054)",
        color: "white",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={methodologiess.date}
      iconStyle={{ background: methodologiess.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={methodologiess.icon}
            alt={methodologiess.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#F6FA70] text-[24px] font-bold'>
          {methodologiess.title}
        </h3>
        <p className='text-white text-[16px] font-semibold' style={{ margin: 0 }}>
          {methodologiess.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3'>
        {methodologiess.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] pl-1 tracking-wide'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Methodologies = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-8 rounded-2xl shadow-lg'
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          <span className='text-[#F6FA70]'>Metodologías de trabajo</span>
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {methodologies.map((methodologiess, index) => (
            <PatternCard
              key={`experience-${index}`}
              methodologiess={methodologiess}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Methodologies, "metodologias");
