import React from 'react';
import { MdHealthAndSafety } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';

export default function Experiences() {
  return (
    <>
      {/* Experiences */}
      <div className="text-white text-lg font-bold mt-20">
        <h1 className="text-white text-4xl font-bold text-center mb-16 relative">
          <span className="relative z-10">Experiences</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
        </h1>

        <div className="max-w-6xl mx-auto px-6">
          {/* Volta Health Experience */}
          <div className="group relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-emerald-500/40 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"></div>

            {/* Content */}
            <div className="relative p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center flex-col md:flex-row gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <MdHealthAndSafety size={30} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                        Volta Health
                      </h2>
                      <p className="text-lg md:text-xl text-center md:text-left text-emerald-400 font-semibold">
                        Full Stack Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <span className="px-2 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full  text-[12px] md:text-sm font-semibold text-gray-300 border border-gray-600">
                      September 2024 - August 2025
                    </span>
                    <ul className="grid grid-cols-2 md:flex gap-2 text-center">
                      <li className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">
                        Full Stack
                      </li>
                      <li className="px-3 py-1 bg-pink-700/20 border border-pink-500/30 rounded-full text-xs text-pink-300">
                        Frontend
                      </li>
                      <li className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300">
                        Mobile
                      </li>
                      <li className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                        QA
                      </li>
                      <li className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-xs text-red-300">
                        Backend
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/*  Overview */}
              <div className="mb-8 p-4 bg-gray-800/50 rounded-xl border border-gray-600 text-wrap">
                <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Project Overview
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                  Actively participated in the development of a{' '}
                  <span className="text-emerald-300 font-semibold">
                    two-sided, fast-paced, health and insurance management system startup
                  </span>{' '}
                  for universities, consisting of:
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed font-normal mt-2">
                  <li>
                    <span className="text-emerald-300 font-semibold">
                      Mobile app for students (iOS/Android),
                    </span>{' '}
                  </li>
                  <li>
                    <span className="text-emerald-300 font-semibold">
                      Web platform for university admins, backed by Node.js/Express.js services.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal mt-4">
                  <span className="text-emerald-300 font-semibold">The system streamlines:</span>
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed font-normal mt-2">
                  <li>
                    <span className="text-emerald-300 font-semibold">immunization compliance</span>,{' '}
                    <span className="text-emerald-300 font-semibold">
                      waiver and enrollment flows
                    </span>{' '}
                    (with{' '}
                    <span className="text-emerald-300 font-semibold">
                      Stripe integration for payments
                    </span>
                    ){' '}
                    <span className="text-emerald-300 font-semibold">
                      targeted in-app messaging
                    </span>{' '}
                    <span className="text-emerald-300 font-semibold">analytics</span>, and{' '}
                    <span className="text-emerald-300 font-semibold">
                      student intake reporting.
                    </span>
                    This significantly reduces the time and effort universities spend managing
                    student health records, while providing students with faster approvals,
                    transparent status tracking, and easier access to university health services.
                  </li>
                </ul>
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
                    <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                      <li>
                        Reduced{' '}
                        <span className="text-blue-300 font-semibold">runtime errors by ~40%</span>
                      </li>
                      <li>
                        Cut{' '}
                        <span className="text-blue-300 font-semibold">
                          new UI build time by ~40%
                        </span>
                      </li>
                      <li>
                        Boosted{' '}
                        <span className="text-blue-300 font-semibold">
                          defect detection by ~20%
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-600/10 border border-green-500/20 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">Development Efficiency</h4>
                    <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                      <li>
                        Consistently{' '}
                        <span className="text-green-300 font-semibold">
                          delivered new features and fixed existing bugs
                        </span>{' '}
                        across the systems.
                      </li>
                      <li>
                        Implemented{' '}
                        <span className="text-green-300 font-semibold">
                          pixel-perfect and user-friendly UI
                        </span>{' '}
                        for the mobile/web applications.
                      </li>
                      <li>
                        Built and maintained{' '}
                        <span className="text-green-300 font-semibold">
                          React Native Storybook UI component library
                        </span>
                      </li>

                      <li>
                        Automated{' '}
                        <span className="text-green-300 font-semibold">
                          localization for 800+ strings (AI-powered + i18n)
                        </span>
                      </li>
                      <li>
                        Cut{' '}
                        <span className="text-green-300 font-semibold">QA/dev effort by ~70%</span>
                      </li>
                      <li>
                        Developed and documented{' '}
                        <span className="text-green-300 font-semibold">
                          comprehensive testing/bughunt strategy
                        </span>{' '}
                        for cross-functional teams.
                      </li>
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
                    'Prisma',
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

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Git',
                    'GitHub',
                    'Scrum',
                    'Agile',
                    'CI/CD',
                    'Cursor',
                    'Code Reviews',
                    'Pair Programming',
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
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <FaBuilding size={30} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        28software
                      </h2>
                      <p className="text-xl text-blue-400 font-semibold">Software Engineer</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <span className="px-2 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full  text-[11px] md:text-sm font-semibold text-gray-300 border border-gray-600">
                      November 2023 - September 2024
                    </span>
                    <div className="grid grid-cols-2 md:flex gap-2 text-center md:text-left">
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

              {/* Progression */}
              <div className="mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                <h3 className="text-base md:text-lg text-center md:text-left font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                  Career Progression
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-3 p-3 bg-green-600/10 border border-green-500/20 rounded-lg min-w-[200px] justify-center">
                    <span className="text-green-300 font-semibold text-center">
                      Internship Program
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-blue-400">
                    <div className="w-8 h-0.5 bg-blue-500 rounded-full hidden md:block"></div>
                    <FaLongArrowAltRight
                      className="transform text-white rotate-90 md:rotate-0 transition-transform duration-300"
                      size={20}
                    />
                    <div className="w-8 h-0.5 bg-blue-500 rounded-full hidden md:block"></div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg min-w-[200px] justify-center">
                    <span className="text-blue-300 font-semibold text-center">
                      Junior Software Engineer
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Contributions */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Key Contributions
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-yellow-600/10 border border-yellow-500/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-300 mb-2">Technical Improvements</h4>
                    <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                      <li>
                        Guided the transition from{' '}
                        <span className="text-yellow-300 font-semibold">CSS3 to Tailwind</span>
                      </li>
                      <li>
                        Added{' '}
                        <span className="text-yellow-300 font-semibold">
                          automated unit tests with Jest
                        </span>
                      </li>
                      <li>
                        Improved system maintainability by{' '}
                        <span className="text-yellow-300 font-semibold">
                          strict typing using TypeScript / adding linting rules
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Development Work</h4>
                    <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                      <li>
                        <span className="text-blue-300 font-semibold">New feature development</span>
                      </li>
                      <li>
                        <span className="text-blue-300 font-semibold">UI component creation</span>
                      </li>
                      <li>
                        <span className="text-blue-300 font-semibold">
                          API development & bug fixes
                        </span>
                      </li>
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
    </>
  );
}
