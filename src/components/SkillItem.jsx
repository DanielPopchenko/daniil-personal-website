import React from 'react';

function SkillItem({ tech, index }) {
  return (
    <div
      key={tech}
      className="px-3 py-1 bg-gray-200/50 border border-gray-400 rounded-lg text-sm text-gray-700 hover:bg-gray-300/50 hover:border-gray-500 transition-all duration-300 transform hover:scale-105  font-bold"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {tech}
    </div>
  );
}

export default SkillItem;
