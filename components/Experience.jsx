'use client';
import React, { useState } from 'react';
import { experienceData } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experienceData[selectedIndex];

  return (
    <motion.section
      id="Experience"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Subheading */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo text-black dark:text-white"
        >
          My Career Journey
        </motion.h4>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo mb-16 text-black dark:text-white"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex md:flex-col gap-4 w-full md:w-1/4"
          >
            {experienceData.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`px-4 py-2 text-left border-l-4 text-sm font-medium transition-all duration-200 ${
                  selectedIndex === idx
                    ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400'
                    : 'border-transparent text-gray-600 hover:text-blue-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Right Content */}
          <div className="w-full md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl p-6"
              >
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {selected.role} <span className="text-blue-500">@ {selected.company}</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{selected.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm font-Ovo">
                  {selected.points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
