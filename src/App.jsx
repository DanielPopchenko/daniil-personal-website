import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from './assets/personal-logo.png';
import AboutMe from './AboutMe';
import Skills from './Skills';

function App() {
  const handleEmailClick = () => {
    const email = 'daniel.popchenko@gmail.com';
    const subject = 'Hello Daniil!';
    const body = 'I would like to connect with you regarding...';

    // Try to open mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;
    } catch (error) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          alert(`Email copied to clipboard: ${email}`);
        })
        .catch(() => {
          alert(`Please email me at: ${email}`);
        });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-900 w-full min-h-screen p-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" className="w-[175px] h-[175px] rounded-3xl object-cover" />
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-gray-800 rounded-lg">
                <h1 className="text-white text-4xl font-bold">Daniil Popchenko</h1>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg shadow-lg shadow-gray-900 border-2 border-gray-900 w-fit">
                <p className="text-white text-xl font-bold">Full Stack Engineer</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/daniil-popchenko/"
              className="text-white text-sm font-bold flex items-center"
            >
              <FaLinkedin size={30} className="hover:text-gray-500 transition-all duration-300" />
            </a>
            <a
              href="https://github.com/DanielPopchenko"
              className="text-white text-sm font-bold flex items-center"
            >
              <FaGithub size={30} className="hover:text-gray-500 transition-all duration-300" />
            </a>
            <button
              onClick={handleEmailClick}
              className="text-white text-sm font-bold flex items-center bg-transparent border-none cursor-pointer"
            >
              <FaEnvelope size={30} className="hover:text-gray-500 transition-all duration-300" />
            </button>
          </div>
        </div>
        {/* About Me */}
        <AboutMe />

        {/* Skills */}
        <Skills />

        {/* Experiences */}
        <div className="text-white text-lg font-bold mt-20">
          <h1 className="text-white text-4xl font-bold text-center mb-16 relative">
            <span className="relative z-10">Experiences</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
          </h1>

          <div className="max-w-6xl mx-auto px-6">
            {/* Volta Health Experience */}
            <div className="group relative mb-12">
              {/* Animated background card */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-emerald-500/40 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"></div>

              {/* Content */}
              <div className="relative p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
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
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                          Volta Health
                        </h2>
                        <p className="text-xl text-emerald-400 font-semibold">
                          Full Stack Software Engineer
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-semibold text-gray-300 border border-gray-600">
                        September 2024 - August 2025
                      </span>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">
                          Full Stack
                        </span>
                        <span className="px-3 py-1 bg-pink-700/20 border border-pink-500/30 rounded-full text-xs text-pink-300">
                          Frontend
                        </span>
                        <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300">
                          Mobile
                        </span>
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                          QA
                        </span>
                        <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-xs text-red-300">
                          Backend
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Overview */}
                <div className="mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Project Overview
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Developed a comprehensive two-sided health and insurance management system for
                    universities, featuring mobile apps for students (iOS/Android) and a
                    React.js/TypeScript/Tailwind web platform for university admins, backed by
                    Node.js and Express.js services.
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Key Achievements
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                      <h4 className="font-semibold text-blue-300 mb-2">Performance Improvements</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Reduced runtime errors by ~40%</li>
                        <li>• Cut new UI build time by ~40%</li>
                        <li>• Boosted defect detection by ~20%</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-600/10 border border-green-500/20 rounded-lg">
                      <h4 className="font-semibold text-green-300 mb-2">Development Efficiency</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Built React Native Storybook UI library</li>
                        <li>• Automated localization for 800+ strings</li>
                        <li>• Cut QA/dev effort by ~70%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'TypeScript',
                      'ReactJS',
                      'JavaScript',
                      'ReactNative',
                      'NodeJS',
                      'ExpressJS',
                      'PostgreSQL',
                      'Tailwind',
                      'SCSS',
                      'CSS3',
                      'HTML5',
                      'Jest',
                      'Vitest',
                    ].map((tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-600/50 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 opacity-60 animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>

            {/* 28software Experience */}
            <div className="group relative mb-12">
              {/* Animated background card */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/40 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"></div>

              {/* Content */}
              <div className="relative p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                          28software
                        </h2>
                        <p className="text-xl text-blue-400 font-semibold">Software Engineer</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-semibold text-gray-300 border border-gray-600">
                        November 2023 - September 2024
                      </span>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300">
                          Mobile
                        </span>
                        <span className="px-3 py-1 bg-pink-700/20 border border-pink-500/30 rounded-full text-xs text-pink-300">
                          Frontend
                        </span>
                        <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-xs text-red-300">
                          Backend
                        </span>
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                          QA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Role Progression */}
                <div className="mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Career Progression
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">Internship Program</span>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Junior Software Engineer</span>
                    </div>
                  </div>
                </div>

                {/* Key Contributions */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Key Contributions
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-green-600/10 border border-green-500/20 rounded-lg">
                      <h4 className="font-semibold text-green-300 mb-2">Technical Improvements</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Transitioned from CSS3 to Tailwind</li>
                        <li>• Added unit tests with Jest</li>
                        <li>• Improved system maintainability</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                      <h4 className="font-semibold text-blue-300 mb-2">Development Work</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• New feature development</li>
                        <li>• UI component creation</li>
                        <li>• API development & bug fixes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'JavaScript',
                      'TypeScript',
                      'ReactJS',
                      'NodeJS',
                      'ExpressJS',
                      'ReactNative',
                      'Tailwind',
                      'SCSS',
                      'CSS3',
                      'HTML5',
                      'Jest',
                      'Vitest',
                    ].map((tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-600/50 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>

            {/* Future Experiences */}
            <div className="text-center text-gray-400 mt-12">
              <div className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">More Experiences Coming Soon</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Continuously growing and taking on new challenges
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
