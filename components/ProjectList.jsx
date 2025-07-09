// components/ProjectList.jsx
import React from 'react';

export default function ProjectList({ projects, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => onSelect(project)}
          className="bg-gray-900 text-white p-4 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition"
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-bold mt-3">{project.title}</h3>
          <p className="text-sm mt-2 text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
