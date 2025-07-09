'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Projects } from '../data/Projects';
import { FaGithub } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // <- FIXED
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedProject || !selectedProject.files) return;
    const file = selectedProject.files[selectedFileIndex];
    if (!file?.url) return;

    setLoading(true);
    fetch(file.url)
      .then((res) => res.text())
      .then((data) => {
        setFileContent(data);
        setLoading(false);
      })
      .catch(() => {
        setFileContent('Failed to load file content');
        setLoading(false);
      });
  }, [selectedFileIndex, selectedProject]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    }),
  };

  return (
    <motion.section
      id="Projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Header */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Work
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-24"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.map((Proj, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            onClick={() => {
              setSelectedProject(Proj);
              setSelectedFileIndex(0);
            }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-gray-800 bg-gray-900 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-60 sm:h-72 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-2xl">
              <Image
                src={Proj.image}
                alt={Proj.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Always-visible title over image */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl text-white font-Ovo">{Proj.title}</h3>
              </div>
            </div>

            {/* Description on hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-sm text-white text-center font-Ovo">{Proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Viewer */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-2 text-white font-Ovo">{selectedProject.title}</h3>
            <p className="mb-4 text-white font-Ovo">{selectedProject.description}</p>

            {/* File Tabs */}
            {selectedProject.files && (
              <div className="flex gap-2 mb-4">
                {selectedProject.files.map((file, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedFileIndex(i)}
                    className={`px-3 py-1 rounded ${
                      i === selectedFileIndex ? 'bg-blue-600' : 'bg-gray-700'
                    } text-white text-sm`}
                  >
                    {file.name}
                  </button>
                ))}
              </div>
            )}

            {/* File Viewer */}
            <div className="bg-[#1e1e1e] rounded-lg overflow-x-auto max-h-[60vh] overflow-y-auto p-4 text-white text-sm">
              {loading ? (
                <p>Loading...</p>
              ) : selectedProject.files[selectedFileIndex]?.type === 'markdown' ? (
                <ReactMarkdown>{fileContent}</ReactMarkdown>
              ) : (
                <SyntaxHighlighter
                  language={selectedProject.files[selectedFileIndex]?.type || 'text'}
                  style={oneDark}
                  wrapLongLines
                >
                  {fileContent}
                </SyntaxHighlighter>
              )}
            </div>

            {/* GitHub Link */}
            <div className="flex gap-6 mt-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 flex items-center gap-1"
                >
                  <FaGithub size={20} /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
