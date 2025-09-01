import { MdScreenshotMonitor } from 'react-icons/md';
import { FaServer, FaTools, FaMobile } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';

const frontendSkills = [
  'ReactJS',
  'TypeScript',
  'JavaScript',
  'NextJS',
  'Tailwind',
  'SCSS',
  'HTML5',
  'CSS3',
];
const mobileSkills = ['React Native', 'Expo'];
const backendSkills = ['NodeJS', 'ExpressJS', 'Prisma', 'PostgreSQL', 'MySQL'];
const toolsAndTesting = ['Jest', 'Vitest', 'QAing', 'Manual Testing', 'Debugging'];

const otherSkills = ['Git', 'GitHub', 'Cursor', 'Scrum', 'Agile', 'Docker', 'Postman'];

export default function Skills() {
  return (
    <>
      {/* Skills Highlight Section */}
      <div className="mt-16">
        <h2 className="font-bold text-white text-center text-4xl mb-8 relative">
          <span className="relative z-10 text-4xl">Technical Skills</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 text-[13px]">
          {/* Frontend Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <MdScreenshotMonitor className="text-white" size={30} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Frontend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {frontendSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-600/30 border border-blue-500/50 rounded text-[13px] text-blue-200 transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-green-400/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaMobile className="text-white" size={30} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Mobile</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {mobileSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-green-600/30 border border-green-500/50 rounded text-[13px] text-green-200 transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-xl border border-red-500/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-red-400/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaServer className="text-white" size={28} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Backend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {backendSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-red-600/30 border border-red-500/50 rounded text-[13px] text-red-200 transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Testing */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-xl border border-purple-500/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <IoIosSettings size={28} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Tools & Testing</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {toolsAndTesting.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-purple-600/30 border border-purple-500/50 rounded text-[13px] text-purple-200 transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-500/20 rounded-xl border border-gray-500/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-400/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaTools size={25} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Other</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {otherSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-600/30 border border-gray-500/50 rounded text-[13px] text-gray-200 transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
