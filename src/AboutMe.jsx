import { BsPersonRaisedHand, BsLightningChargeFill } from 'react-icons/bs';
import { RiTestTubeFill, RiTeamFill } from 'react-icons/ri';
import { IoCodeSlash } from 'react-icons/io5';

export default function AboutMe() {
  return (
    <>
      <div className="text-white text-lg font-bold mt-20">
        <h1 className="text-white text-4xl font-bold text-center mb-16 relative">
          <span className="relative z-10">About Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
        </h1>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Description Card */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/20"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <BsPersonRaisedHand size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Full Stack Engineer
                  </h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  Adaptable Full Stack Engineer with 2+ years of production experience in Frontend,
                  Mobile, and Backend development using TypeScript, JavaScript, ReactJS,
                  ReactNative, NextJS, NodeJS, ExpressJS, Tailwind, CSS3/HTML5, SCSS.
                </p>
              </div>
            </div>

            {/* Growth Mindset Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/20"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <BsLightningChargeFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                    Growth Mindset
                  </h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  Enjoy working on projects that challenge me and allow me to grow as a developer.
                  Quick learner and always looking for new challenges.
                </p>
              </div>
            </div>

            {/* Testing & QA Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/20"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTestTubeFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                    Testing & QA
                  </h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  Experienced in manual testing and QA. Skilled in developing unit tests using Jest,
                  Vitest, and debugging systems.
                </p>
              </div>
            </div>

            {/* UI Development Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/20"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <IoCodeSlash size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    UI Development
                  </h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  A strong background in UI development and design systems, with high attention to
                  detail and pixel-perfect implementations.
                </p>
              </div>
            </div>

            {/* Team Collaboration Card */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/20"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTeamFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                    Team Collaboration
                  </h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  Thrives in cross-functional teams, collaborating with product and design to
                  deliver responsive, pixel-perfect user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
