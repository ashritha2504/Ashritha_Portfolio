'use client';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ProjectViewer({ owner, repo, branch = 'main', onClose }) {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [readmeContent, setReadmeContent] = useState('');

  // Fetch folder contents dynamically
  const loadFolder = (path = '') => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`)
      .then(res => res.json())
      .then(setFiles);
  };

  useEffect(() => {
    loadFolder();
  }, [owner, repo, branch]);

  // Fetch README.md
  useEffect(() => {
    const readme = files.find(f => f.name.toLowerCase() === 'readme.md');
    readme?.download_url &&
      fetch(readme.download_url)
        .then(res => res.text())
        .then(setReadmeContent);
  }, [files]);

  // Fetch selected file
  useEffect(() => {
    if (!selectedFile) return;
    // .ipynb handled via iframe
    if (!selectedFile.name.endsWith('.ipynb') && selectedFile.download_url) {
      fetch(selectedFile.download_url)
        .then(res => res.text())
        .then(setFileContent);
    }
  }, [selectedFile]);

  const renderContent = () => {
    if (!selectedFile) {
      return readmeContent ? (
        <ReactMarkdown className="prose prose-invert overflow-auto">{readmeContent}</ReactMarkdown>
      ) : (
        <p className="text-gray-300">GitHub project structure</p>
      );
    }

    if (selectedFile.name.endsWith('.ipynb')) {
      const iframeUrl = `https://nbviewer.org/github/${owner}/${repo}/blob/${branch}/${selectedFile.path}`;
      return <iframe src={iframeUrl} width="100%" height="600px" className="rounded-lg" />;
    }

    const lang = selectedFile.name.split('.').pop().toLowerCase();
    return (
      <SyntaxHighlighter language={lang === 'md' ? 'markdown' : lang} style={oneDark} wrapLongLines>
        {fileContent}
      </SyntaxHighlighter>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex">
      {/* Sidebar: Folders and Files */}
      <div className="w-72 bg-gray-900 p-4 overflow-y-auto">
        <button onClick={onClose} className="bg-red-600 text-white px-3 py-1 rounded mb-4">Close</button>
        <h2 className="text-white text-lg font-bold mb-4">{repo}</h2>
        <div className="space-y-1">
          {files.map(item => (
            <div
              key={item.sha}
              onClick={() => item.type === 'dir' ? loadFolder(item.path) : setSelectedFile(item)}
              className={`cursor-pointer p-2 rounded text-white ${item.type === 'file' && selectedFile?.sha === item.sha ? 'bg-blue-700' : 'hover:bg-gray-700'}`}
            >
              {item.type === 'dir' ? '📁' : '📄'} {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Main preview area */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-800 text-white">
        {renderContent()}
      </div>
    </div>
  );
}
