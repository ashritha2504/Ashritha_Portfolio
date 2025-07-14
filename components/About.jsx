'use client';
import React from 'react';
import AnimatedGirl from './AnimatedGirl';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-900 dark:text-white"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-10"
      >
        {/* Image grows to fill available space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <AnimatedGirl />
        </motion.div>

        {/* Text constrained for readability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-none max-w-2xl font-Ovo text-gray-900 dark:text-white"
        >
          <p>
            Hi, I’m Ashritha, a data analyst passionate about visual storytelling and impactful dashboards. I began my career at a startup manufacturing company, where I took on diverse roles across procurement, operations, analysis, and reporting—an experience that sparked my interest in data.
          </p>

          <p className="mt-6">
            To further my expertise, I completed a Master’s in Business Data Analytics at Lawrence Technological University. I am a Microsoft Certified PL-300 Power BI Developer and have also earned certifications in Google Analytics and HubSpot Inbound Marketing. I also completed the McKinsey Forward Learning program, strengthening my core business and leadership skills.
          </p>

          <p className="mt-6">
            Currently, I’m expanding my knowledge by exploring cloud platforms. I also bring a background in sales and marketing, which helps me understand business from multiple perspectives.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
