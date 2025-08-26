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
const backendSkills = ['NodeJS', 'ExpressJS', 'PostgreSQL', 'MySQL'];
const toolsAndTesting = ['Jest', 'Vitest', 'QAing', 'Manual Testing', 'Debugging'];

const otherSkills = [
  'Git',
  'GitHub',
  'Cursor',
  'Docker',
  'Postman',
  'Jira',
  'Scrum',
  'Agile',
  'VSCode',
  'Figma',
];

export default function Skills() {
  return (
    <>
      {/* Skills Highlight Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8 relative">
          <span className="relative z-10">Technical Skills</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Frontend Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30 transform transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/50"></div>
            <div className="relative p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {frontendSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-600/30 border border-blue-500/50 rounded text-xs text-blue-200 transform transition-all duration-300 hover:scale-110"
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Mobile</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {mobileSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-green-600/30 border border-green-500/50 rounded text-xs text-green-200 transform transition-all duration-300 hover:scale-110"
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {backendSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-red-600/30 border border-red-500/50 rounded text-xs text-red-200 transform transition-all duration-300 hover:scale-110"
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Tools & Testing</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {toolsAndTesting.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-purple-600/30 border border-purple-500/50 rounded text-xs text-purple-200 transform transition-all duration-300 hover:scale-110"
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Other</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {otherSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-600/30 border border-gray-500/50 rounded text-xs text-gray-200 transform transition-all duration-300 hover:scale-110"
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
