import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { patterns } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const PatternCard = ({ pattern }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836, #3b3054)",
        color: "white",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={pattern.date}
      iconStyle={{ background: pattern.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={pattern.icon}
            alt={pattern.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#F6FA70] text-[24px] font-bold'>
          {pattern.title}
        </h3>
        <p className='text-white text-[16px] font-semibold' style={{ margin: 0 }}>
          {pattern.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3'>
        {pattern.points.map((point, index) => (
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

const Pattern = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='bg-gradient-to-r from-[#3b3054] to-[#120078] p-8 rounded-2xl shadow-lg'
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          <span className='text-[#F6FA70]'>Patrones de diseño</span>
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {patterns.map((pattern, index) => (
            <PatternCard key={`experience-${index}`} pattern={pattern} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Pattern, "patrones");
