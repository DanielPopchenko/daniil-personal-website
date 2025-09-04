import { MdScreenshotMonitor } from 'react-icons/md';
import { FaServer, FaTools, FaMobile } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import SkillItem from './components/SkillItem';

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
      <div className="mt-20">
        <div className="mb-16 flex items-center justify-center flex-col">
          <div className="mx-auto inline-block justify-center items-center bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 p-2">
            <h2 className="text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent relative z-10 transform hover:scale-103 transition-transform duration-300">
              Skills
            </h2>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 text-[13px]">
          {/* Frontend Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <MdScreenshotMonitor className="text-white" size={30} />
              </div>
              <h3 className="text-gray-800 font-bold mb-2 text-lg">Frontend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {frontendSkills.map((skill, index) => (
                  <SkillItem key={skill} tech={skill} index={index}>
                    {skill}
                  </SkillItem>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaServer className="text-white" size={28} />
              </div>
              <h3 className="text-gray-800 font-bold mb-2 text-lg">Backend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {backendSkills.map((skill, index) => (
                  <SkillItem key={skill} tech={skill} index={index}>
                    {skill}
                  </SkillItem>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaMobile className="text-white" size={30} />
              </div>
              <h3 className="text-gray-800 font-bold mb-2 text-lg">Mobile</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {mobileSkills.map((skill, index) => (
                  <SkillItem key={skill} tech={skill} index={index}>
                    {skill}
                  </SkillItem>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Testing */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <IoIosSettings size={28} className="text-white" />
              </div>
              <h3 className="text-gray-800 font-bold mb-2 text-lg">Tools & Testing</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {toolsAndTesting.map((skill, index) => (
                  <SkillItem key={skill} tech={skill} index={index}>
                    {skill}
                  </SkillItem>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-500/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaTools size={25} className="text-white" />
              </div>
              <h3 className="text-gray-800 font-bold mb-2 text-lg">Other</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {otherSkills.map((skill, index) => (
                  <SkillItem key={skill} tech={skill} index={index}>
                    {skill}
                  </SkillItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
