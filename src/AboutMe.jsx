import { BsPersonRaisedHand, BsLightningChargeFill } from 'react-icons/bs';
import { RiTestTubeFill, RiTeamFill } from 'react-icons/ri';
import { IoCodeSlash } from 'react-icons/io5';

export default function AboutMe() {
  return (
    <>
      <div className="text-white text-base md:text-lg mt-20">
        <h1 className="text-white text-4xl font-bold text-center mb-16 relative">
          <span className="relative z-10">About Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
        </h1>

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Description Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-purple-600/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <BsPersonRaisedHand size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Full Stack Engineer
                  </h3>
                </div>
                <ul className="text-gray-300 lg:text-lg md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Adaptable Full Stack Engineer with{' '}
                    <span className="text-blue-300 font-semibold">
                      over 2 years of production experience
                    </span>
                    , building across Frontend, Mobile, and Backend using technologies like
                    <span className="text-blue-300 font-semibold">
                      {' '}
                      TypeScript, JavaScript, ReactJS, React Native, NextJS, NodeJS, ExpressJS,
                      Tailwind, CSS3/HTML5
                    </span>{' '}
                    and <span className="text-blue-300 font-semibold">SCSS</span>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-orange-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTeamFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                    Team Collaboration
                  </h3>
                </div>
                <ul className="text-gray-300 lg:text-lg md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Thrives in{' '}
                    <span className="text-orange-300 font-semibold">cross-functional teams</span>,
                    collaborating with product and design to deliver{' '}
                    <span className="text-orange-300 font-semibold">
                      responsive, pixel-perfect user experiences
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>

            {/* Growth Mindset Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-emerald-600/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <BsLightningChargeFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                    Growth Mindset
                  </h3>
                </div>
                <ul className="text-gray-300 lg:text-lg md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    <span className="font-semibold text-green-300">Curiosity</span> drives me
                    forward, and I see every challenge as a chance to learn and grow.
                  </li>
                  <li>
                    I enjoy{' '}
                    <span className="font-semibold text-green-300"> picking up new frameworks</span>
                    ,{' '}
                    <span className="font-semibold text-green-300">
                      {' '}
                      exploring new technologies
                    </span>
                    , and{' '}
                    <span className="font-semibold text-green-300">
                      {' '}
                      solving complex problems
                    </span>{' '}
                    , as they're opportunities to sharpen my skills and possibility to grow.
                  </li>
                  <li>
                    Each project is an opportunity to{' '}
                    <span className="font-semibold text-green-300">
                      turn ideas into high-quality
                    </span>
                    , <span className="font-semibold text-green-300">real-world solutions</span>.
                  </li>
                </ul>
              </div>
            </div>

            {/* UI Development Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-yellow-500/35"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <IoCodeSlash size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    UI Development
                  </h3>
                </div>
                <ul className="text-gray-300 lg:text-lg md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Bring a strong background in{' '}
                    <span className="text-yellow-300 font-semibold">
                      UI development and design systems
                    </span>
                    , with a consistent focus on creating{' '}
                    <span className="text-yellow-300 font-semibold">
                      responsive, modern, and intuitive interfaces
                    </span>
                    .
                  </li>

                  <li>
                    Highly attentive to details and passionate about delivering{' '}
                    <span className="text-yellow-300 font-semibold">
                      pixel-perfect implementations
                    </span>{' '}
                    that not only meet technical requirements but also delight both users and
                    designers.
                  </li>
                  <li>
                    Experienced in building and maintaining{' '}
                    <span className="text-yellow-300 font-semibold">
                      scalable design systems and component libraries
                    </span>
                    , ensuring consistency across applications while improving development speed.
                  </li>
                  <li>
                    Find real satisfaction in{' '}
                    <span className="text-yellow-300 font-semibold">
                      refining UI until it feels seamless
                    </span>
                    , making products more enjoyable to use and ensuring designers' visions are
                    realized to the fullest.
                  </li>
                </ul>
              </div>
            </div>

            {/* Testing & QA Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-red-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTestTubeFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                    Testing & QA
                  </h3>
                </div>
                <ul className="text-gray-300 lg:text-lg sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Experienced in{' '}
                    <span className="text-red-300 font-semibold">
                      manual testing and quality assurance
                    </span>
                    , with strong skills in developing{' '}
                    <span className="text-red-300 font-semibold">
                      unit tests using Jest and Vitest
                    </span>
                    , as well as debugging complex systems.
                  </li>
                  <li>
                    At one point,{' '}
                    <span className="text-red-300 font-semibold">
                      served as the sole QA within a development team
                    </span>
                    , creating test plans, reporting workflows, and leading defect detection efforts
                    alongside core software engineering responsibilities. This unique role sharpened
                    the ability to{' '}
                    <span className="text-red-300 font-semibold">
                      balance precision with delivery speed
                    </span>
                    , ensuring higher product stability and user trust while continuing to build and
                    ship features.
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-pink-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTeamFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                    Off the Clock
                  </h3>
                </div>
                <ul className="text-gray-300 lg:text-lg md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    {' '}
                    <span className="text-pink-300 font-semibold">
                      Football has always been a big part of my life
                    </span>
                    . Had played in professional leagues in both Ukraine and Latvia.
                  </li>
                  <li>
                    Also I'm a <span className="text-pink-300 font-semibold">big food lover</span>,
                    whether it's cooking something new or enjoying a great meal. And whenever I get
                    the chance,{' '}
                    <span className="text-pink-300 font-semibold">
                      love walking, exploring new places, and discovering new experiences
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Collaboration Card */}
          </div>
        </div>
      </div>
    </>
  );
}
