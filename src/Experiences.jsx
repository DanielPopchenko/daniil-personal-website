import React from 'react';
import { MdHealthAndSafety } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';
import Pill from './components/Pill';
import SkillItem from './components/SkillItem';
import FutureExperiences from './components/FutureExperiences';
import { FaCode } from 'react-icons/fa6';
import { FaComputer } from 'react-icons/fa6';
import { FaMousePointer } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';

const voltaTechStack = [
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
];

const voltaToolsAndMethodologies = [
  'Git',
  'GitHub',
  'Scrum',
  'Agile',
  'CI/CD',
  'Cursor',
  'Code Reviews',
  'Pair Programming',
  'Localization (i18n)',
];

const twentyEightSoftwareTechStack = [
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
];
const twentyEightSoftwareToolsAndMethodologies = [
  'Git',
  'GitHub',
  'Scrum',
  'Agile',
  'CI/CD',
  'Cursor',
  'Code Reviews',
  'Pair Programming',
];

export default function Experiences() {
  return (
    <>
      {/* Experiences */}
      <div className="text-gray-800 text-lg font-bold mt-20">
        <div className="mb-16 flex items-center justify-center flex-col">
          <div className="mx-auto inline-block justify-center items-center bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 p-2">
            <h2 className="text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent relative z-10 transform hover:scale-103 transition-transform duration-300">
              Experiences
            </h2>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Volta Health Experience */}
          <div className="group relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>

            {/* Content */}
            <div className="relative p-8 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center flex-col md:flex-row gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <MdHealthAndSafety size={30} className="text-white" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent mb-1 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300 transform group-hover:scale-105">
                          Volta Health
                        </h2>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                      <p className="text-lg md:text-xl text-center md:text-left text-gray-600 font-semibold mt-2 group-hover:text-gray-700 transition-colors duration-300">
                        Full Stack Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <div className="px-2 py-2 flex items-center justify-center md:justify-start bg-gradient-to-r from-gray-700 to-gray-600 rounded-full  text-[11px] md:text-sm font-semibold text-gray-300 border border-gray-600">
                      <p className="text-center md:text-left">September 2024</p>
                      <span className="mx-2">-</span>{' '}
                      <p className="text-center md:text-left">August 2025</p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 flex-wrap md:flex gap-2 text-center">
                      <li>
                        <Pill text="Full Stack" />
                      </li>
                      <li>
                        <Pill text="Frontend" />
                      </li>
                      <li>
                        <Pill text="Mobile" />
                      </li>
                      <li>
                        <Pill text="QA" />
                      </li>
                      <li>
                        <Pill text="Backend" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/*  Overview */}
              <div className="mb-8 p-4 bg-gray-700/50 rounded-xl border border-gray-600 text-wrap">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                  <h3 className="text-lg text-center md:text-left md:text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent">
                    Project Overview
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                </div>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed font-normal">
                  Actively participated in the development of a{' '}
                  <span className="text-gray-800 font-semibold">two-sided, fast-paced,</span> health
                  insurance <span className="font-semibold">management system startup</span> for
                  universities, <span className="font-semibold">consisting of:</span>
                </p>
                <ul className="list-disc list-inside text-gray-100 text-sm md:text-base leading-relaxed font-normal mt-2">
                  <li>
                    Mobile app for students{' '}
                    <span className="text-gray-800 font-semibold">(iOS/Android)</span>,{' '}
                  </li>
                  <li>
                    <span className="text-gray-800 font-semibold">Web platform </span>for university
                    admins,
                  </li>
                  <li>
                    backed by{' '}
                    <span className="text-gray-800 font-semibold">
                      Node.js/Express.js API services.
                    </span>
                  </li>
                </ul>
                <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent mt-2">
                  The system streamlines:
                </p>
                <ul className="list-disc list-inside text-gray-100 text-sm md:text-base leading-relaxed font-normal mt-2">
                  <li>
                    <span className="text-gray-800 font-semibold">immunization compliance</span>,{' '}
                    <span className="text-gray-800 font-semibold">waiver and enrollment flows</span>{' '}
                    (with{' '}
                    <span className="text-gray-800 font-semibold">
                      Stripe integration for payments
                    </span>
                    ) <span className="text-gray-800 font-semibold">targeted in-app messaging</span>{' '}
                    <span className="text-gray-800 font-semibold">analytics</span>, and{' '}
                    <span className="text-gray-800 font-semibold">student intake reporting.</span>
                  </li>
                  <li>
                    This significantly reduces the time and effort universities spend managing
                    student health records, while providing students with faster approvals, ability
                    to manage their health records, transparent status tracking, and easier access
                    to university health services.
                  </li>
                </ul>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                  <h3 className="text-xl text-center md:text-left md:text-2xl bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Key Achievements
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <div className="flex items-center">
                      <h4 className="text-lg text-center md:text-left md:text-xl bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent mb-2">
                        Performance Improvements
                      </h4>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent mb-1.5 ml-2"></div>
                    </div>
                    <ul className="text-sm md:text-base text-gray-100 space-y-1 list-disc list-inside font-normal">
                      <li>
                        Reduced{' '}
                        <span className="text-gray-800 font-semibold">runtime errors by ~40%</span>
                      </li>
                      <li>
                        Cut{' '}
                        <span className="text-gray-800 font-semibold">
                          new UI build time by ~40%
                        </span>
                      </li>
                      <li>
                        Boosted{' '}
                        <span className="text-gray-800 font-semibold">
                          defect detection by ~50%
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-700/50 border border-gray-600 rounded-lg">
                    <div className="flex items-center">
                      <h4 className="text-lg text-center md:text-left md:text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent mb-2">
                        Development Efficiency
                      </h4>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent mb-1.5 ml-2"></div>
                    </div>
                    <ul className="text-sm md:text-base text-gray-100 space-y-1 list-disc list-inside font-normal">
                      <li>
                        Consistently{' '}
                        <span className="text-gray-800 font-semibold">
                          delivered new features and fixed existing bugs
                        </span>{' '}
                        across the systems.
                      </li>
                      <li>
                        Implemented{' '}
                        <span className="text-gray-800 font-semibold">
                          pixel-perfect and user-friendly UI
                        </span>{' '}
                        for the mobile/web applications.
                      </li>
                      <li>
                        Built and maintained{' '}
                        <span className="text-gray-800 font-semibold">
                          React Native Storybook UI
                        </span>{' '}
                        component library.
                      </li>

                      <li>
                        Automated{' '}
                        <span className="text-gray-800 font-semibold">
                          localization for 800+ strings (AI-powered + i18n).
                        </span>
                      </li>
                      <li>
                        Cut{' '}
                        <span className="text-gray-800 font-semibold">QA/dev effort by ~70%.</span>
                      </li>
                      <li>
                        Developed and documented{' '}
                        <span className="text-gray-800 font-semibold">
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
                <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                  <h3 className="text-xl text-center md:text-left md:text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Technologies Used
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center items-center md:justify-start">
                  {voltaTechStack.map((tech, index) => (
                    <SkillItem key={tech} tech={tech} index={index}>
                      {tech}
                    </SkillItem>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                  <h3 className="text-xl text-center md:text-left md:text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Tools/Methodologies Used
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {voltaToolsAndMethodologies.map((tech, index) => (
                    <SkillItem key={tech} tech={tech} index={index}>
                      {tech}
                    </SkillItem>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 flex rounded-full items-center justify-center">
              <FaMousePointer className="text-white ml-1" size={22} />
            </div>
            <div
              className="absolute -bottom-2 -left-2 w-8.5 h-8.5 bg-gray-100 flex rounded-full items-center justify-center"
              style={{ animationDelay: '1s' }}
            >
              <FaKeyboard className="text-gray-800" size={22} />
            </div>
          </div>

          {/* 28software Experience */}
          <div className="group relative mb-12">
            {/* Background card */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>

            {/* Content */}
            <div className="relative p-8 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300">
              {/* Header Section */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <FaBuilding size={30} className="text-white" />
                    </div>
                    <div>
                      <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent mb-1 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300 transform group-hover:scale-105">
                          28software
                        </h2>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                      <p className="text-lg md:text-xl text-center md:text-left text-gray-600 font-semibold mt-2 group-hover:text-gray-700 transition-colors duration-300">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row  justify-center md:justify-start items-center gap-3 mb-4">
                    <div className="px-2 py-2 flex items-center justify-center md:justify-start bg-gradient-to-r from-gray-700 to-gray-600 rounded-full  text-[11px] md:text-sm font-semibold text-gray-300 border border-gray-600">
                      <p className="text-center md:text-left">November 2023</p>{' '}
                      <span className="mx-2">-</span>{' '}
                      <p className="text-center md:text-left">September 2024</p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 flex-wrap md:flex gap-2 text-center md:text-left list-none">
                      <li>
                        <Pill text="Mobile" />
                      </li>
                      <li>
                        <Pill text="Frontend" />
                      </li>
                      <li>
                        <Pill text="Backend" />
                      </li>
                      <li>
                        <Pill text="QA" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                {/* Key Contributions */}
                <div className="mb-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="">
                      <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                          <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                          Key Contributions
                        </h3>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                      </div>
                      <div className="p-4 bg-gray-700/50 border border-gray-600 rounded-lg">
                        <div className="flex items-center">
                          <h4 className="text-lg text-center md:text-left md:text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent mb-2">
                            Technical Improvements
                          </h4>
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent mb-1.5 ml-2"></div>
                        </div>
                        <ul className="text-sm md:text-base text-gray-100 space-y-1 list-disc list-inside font-normal">
                          <li>
                            Guided the transition from{' '}
                            <span className="text-gray-800 font-semibold">CSS3 to Tailwind</span>
                          </li>
                          <li>
                            Added{' '}
                            <span className="text-gray-800 font-semibold">
                              automated unit tests with Jest
                            </span>
                          </li>
                          <li>
                            Improved system maintainability by{' '}
                            <span className="text-gray-800 font-semibold">
                              strict typing using TypeScript / adding linting
                            </span>{' '}
                            rules.
                          </li>
                        </ul>
                        <div className="flex items-center">
                          <h4 className="text-lg text-center md:text-left md:text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent mb-3 mt-3">
                            Development Efficiency
                          </h4>
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent mb-1.5 ml-2"></div>
                        </div>
                        <ul className="text-sm md:text-base text-gray-100 space-y-1 list-disc list-inside font-normal">
                          <li>
                            <span className="text-gray-800 font-semibold">New feature </span>
                            development
                          </li>
                          <li>
                            <span className="text-gray-800 font-semibold">
                              UI component creation
                            </span>
                          </li>
                          <li>
                            <span className="text-gray-800 font-semibold">API development</span> &{' '}
                            <span className="text-gray-800 font-semibold">bug fixes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                          <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                          Career Progression
                        </h3>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                      </div>
                      <div className="p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                          <div className="flex items-center gap-3 p-3 bg-gray-200/50 border border-gray-400/30 rounded-lg max-w-[200px] justify-center">
                            <span className="text-gray-800 font-semibold text-center">
                              Internship Program
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-400">
                            <div className="w-8 h-0.5 bg-gray-600 rounded-full hidden md:block"></div>
                            <FaLongArrowAltRight
                              className="transform text-white rotate-90 md:rotate-0 transition-transform duration-300"
                              size={20}
                            />
                            <div className="w-8 h-0.5 bg-gray-600 rounded-full hidden md:block"></div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-gray-200/50 border border-gray-400/30 rounded-lg max-w-[200px] justify-center">
                            <span className="text-gray-800 font-semibold text-center">
                              Software Engineer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                  <h3 className="text-xl text-center md:text-left md:text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Technologies Used
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {twentyEightSoftwareTechStack.map((tech, index) => (
                    <SkillItem key={tech} tech={tech} index={index}>
                      {tech}
                    </SkillItem>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 md:w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
                  </div>
                  <h3 className="text-xl text-center md:text-left md:text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Tools/Methodologies Used
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-600/30 to-transparent rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {twentyEightSoftwareToolsAndMethodologies.map((tech, index) => (
                    <SkillItem key={tech} tech={tech} index={index}>
                      {tech}
                    </SkillItem>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <FaCode className="text-white" size={24} />
            </div>
            <div
              className="absolute -bottom-2 -left-2 w-8.5 h-8.5 bg-gray-100 rounded-full flex items-center justify-center"
              style={{ animationDelay: '1s' }}
            >
              {' '}
              <FaComputer className="text-gray-800" size={24} />
            </div>
          </div>
          <FutureExperiences />
        </div>
      </div>
    </>
  );
}
