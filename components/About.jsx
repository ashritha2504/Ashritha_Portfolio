'use client';
import React from 'react';
import AnimatedGirl from './AnimatedGirl';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-16 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo text-gray-900 dark:text-white'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'
      >
        About Me
      </motion.h2>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col-reverse lg:flex-row items-start gap-12 mt-12'
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='w-full lg:w-[60%] font-Ovo text-gray-900 dark:text-white max-w-2xl'
        >
          <p>
            Hi, I’m Ashritha, a data analyst passionate about visual storytelling and impactful dashboards.
            I began my career at a startup manufacturing company, where I took on diverse roles across procurement,
            operations, analysis, and reporting—an experience that sparked my interest in data.
          </p>

          <p className='mt-6'>
            To further my expertise, I completed a Master’s in Business Data Analytics at Lawrence Technological University.
            I am a Microsoft Certified PL-300 Power BI Developer and have also earned certifications in Google Analytics
            and HubSpot Inbound Marketing. I also completed the McKinsey Forward Learning program, strengthening my core
            business and leadership skills.
          </p>

          <p className='mt-6'>
            Currently, I’m expanding my knowledge by exploring cloud platforms. I also bring a background in sales and marketing,
            which helps me understand business from multiple perspectives.
          </p>
        </motion.div>

        {/* Animated Girl */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className='w-full lg:w-[40%] flex justify-center'
>
  <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] overflow-hidden">
    <AnimatedGirl />
  </div>
</motion.div>

      </motion.div>
    </motion.div>
  );
};

export default About;
