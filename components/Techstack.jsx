'use client';
import React from "react";
import { motion } from "framer-motion";

import { RiFileExcel2Fill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import {
  SiMysql,
  SiPostgresql,
  SiTableau,
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiR,
  SiGit,
  SiLooker,
  SiGoogleanalytics,
  SiHubspot,
  SiSnowflake,
  SiGooglecloud,
  SiOracle,
} from "react-icons/si";

import { FaDatabase, FaChartBar } from "react-icons/fa";

const techStackData = [
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "SQL (MySQL)", icon: <SiMysql />, color: "#00758F" },
  { name: "SQL (PostgreSQL)", icon: <SiPostgresql />, color: "#336791" },
  { name: "Power BI", icon: <FaChartBar />, color: "#F2C811" },
  { name: "Tableau", icon: <SiTableau />, color: "#E97627" },
  { name: "R", icon: <SiR />, color: "#276DC3" },
  { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
  { name: "Matplotlib", icon: <SiJupyter />, color: "#F37626" },
  { name: "Pandas", icon: <SiPandas />, color: "#150458" },
  { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
  { name: "NoSQL", icon: <FaDatabase />, color: "#8E44AD" },
  { name: "Oracle", icon: <SiOracle />, color: "#F80000" },
  { name: "Google Cloud Platform", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "Snowflake", icon: <SiSnowflake />, color: "#56B9EB" },
  { name: "Looker", icon: <SiLooker />, color: "#4285F4" },
  { name: "Visio", icon: <RiFileExcel2Fill />, color: "#217346" },
  { name: "Google Analytics", icon: <SiGoogleanalytics />, color: "#FF6F00" },
  { name: "Hubspot", icon: <SiHubspot />, color: "#FF7A59" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full px-10 py-10 scroll-mt-20">
      {/* Tools I Use header, styled like About's "Introduction" */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-900 dark:text-white"
      >
        Tools I Use
      </motion.h4>

      {/* Main heading with Ovo font */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-12 text-gray-900 dark:text-white"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techStackData.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer"
            title={tool.name}
          >
            <div className="text-5xl mb-2" style={{ color: tool.color }}>
              {tool.icon}
            </div>
            <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200 font-Ovo">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
