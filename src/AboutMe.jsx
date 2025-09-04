import { BsPersonRaisedHand, BsLightningChargeFill } from 'react-icons/bs';
import { RiTestTubeFill, RiTeamFill } from 'react-icons/ri';
import { IoCodeSlash } from 'react-icons/io5';

export default function AboutMe() {
  return (
    <>
      <div className="text-gray-800 text-base md:text-lg mt-20">
        <div className="mb-16 flex items-center justify-center flex-col">
          <div className="mx-auto inline-block justify-center items-center bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-xl border border-gray-400/30 p-2">
            <h2 className="text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent relative z-10 transform hover:scale-103 transition-transform duration-300">
              About Me
            </h2>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Description Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <BsPersonRaisedHand size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300 font-firaCode">
                    Full Stack Engineer
                  </h3>
                </div>
                <ul className="text-gray-600 lg:text-lg md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc list-inside">
                  <li>
                    Adaptable Full Stack Engineer with{' '}
                    <span className="text-gray-800 font-semibold">
                      over 2 years of production experience
                    </span>
                    , building across Frontend, Mobile, and Backend using technologies like
                    <span className="text-gray-800 font-semibold">
                      {' '}
                      TypeScript, JavaScript, ReactJS, React Native, NextJS, NodeJS, ExpressJS,
                      Tailwind, CSS3/HTML5
                    </span>{' '}
                    and <span className="text-gray-800 font-semibold">SCSS</span>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTeamFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    Team Collaboration
                  </h3>
                </div>
                <ul className="text-gray-600 lg:text-lg md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc list-inside">
                  <li>
                    Thrives in{' '}
                    <span className="text-gray-800 font-semibold">cross-functional teams</span>,
                    collaborating with product and design to deliver{' '}
                    <span className="text-gray-800 font-semibold">
                      responsive, pixel-perfect user experiences
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>

            {/* Growth Mindset Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <BsLightningChargeFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    Growth Mindset
                  </h3>
                </div>
                <ul className="text-gray-600 lg:text-lg md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc list-inside">
                  <li>
                    <span className="font-semibold text-gray-800">Curiosity</span> drives me
                    forward, and I see every challenge as a chance to learn and grow.
                  </li>
                  <li>
                    I enjoy{' '}
                    <span className="font-semibold text-gray-800"> picking up new frameworks</span>,{' '}
                    <span className="font-semibold text-gray-800"> exploring new technologies</span>
                    , and{' '}
                    <span className="font-semibold text-gray-800"> solving complex problems</span> ,
                    as they're opportunities to sharpen my skills and possibility to grow.
                  </li>
                  <li>
                    Each project is an opportunity to{' '}
                    <span className="text-gray-800 font-semibold">
                      turn ideas into high-quality
                    </span>
                    , <span className="text-gray-800 font-semibold">real-world solutions</span>.
                  </li>
                </ul>
              </div>
            </div>

            {/* UI Development Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/35"></div>
              <div className="relative p-6 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <IoCodeSlash size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    UI Development
                  </h3>
                </div>
                <ul className="text-gray-600 lg:text-lg md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc list-inside">
                  <li>
                    Bring a strong background in{' '}
                    <span className="text-gray-800 font-semibold">
                      UI development and design systems
                    </span>
                    , with a consistent focus on creating{' '}
                    <span className="text-gray-800 font-semibold">
                      responsive, modern, and intuitive interfaces
                    </span>
                    .
                  </li>

                  <li>
                    Highly <span className="text-gray-800 font-semibold">attentive to details</span>{' '}
                    and passionate about delivering{' '}
                    <span className="text-gray-800 font-semibold">
                      pixel-perfect implementations
                    </span>{' '}
                    that not only meet technical requirements but also delight both users and
                    designers.
                  </li>
                  <li>
                    Experienced in building and maintaining{' '}
                    <span className="text-gray-800 font-semibold">
                      scalable design systems and component libraries
                    </span>
                    , ensuring consistency across applications while improving development speed.
                  </li>
                  <li>
                    Find real satisfaction in{' '}
                    <span className="text-gray-800 font-semibold">
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
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTestTubeFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    Testing & QA
                  </h3>
                </div>
                <ul className="text-gray-600 lg:text-lg sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc list-inside">
                  <li>
                    Experienced in{' '}
                    <span className="text-gray-800 font-semibold">
                      manual testing and quality assurance
                    </span>
                    , with strong skills in developing{' '}
                    <span className="text-gray-800 font-semibold">
                      unit tests using Jest and Vitest
                    </span>
                    , as well as debugging complex systems.
                  </li>
                  <li>
                    At one point,{' '}
                    <span className="text-gray-800 font-semibold">
                      served as the sole QA within a development team
                    </span>
                    , creating test plans, reporting workflows, and leading defect detection efforts
                    alongside core software engineering responsibilities. This unique role sharpened
                    the ability to{' '}
                    <span className="text-gray-800 font-semibold">
                      balance precision with delivery speed
                    </span>
                    , ensuring higher product stability and user trust while continuing to build and
                    ship features.
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-gray-500/40"></div>
              <div className="relative p-6 rounded-2xl border border-gray-400 hover:border-gray-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <RiTeamFill size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    Off the Clock
                  </h3>
                </div>
                <ul className="text-gray-600 lg:text-lg md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 list-disc list-inside">
                  <li>
                    {' '}
                    <span className="text-gray-800 font-semibold">
                      Football has always been a big part of my life
                    </span>
                    . Had played in professional leagues in both Ukraine and Latvia.
                  </li>
                  <li>
                    Also I'm a <span className="text-gray-800 font-semibold">big food lover</span>,
                    whether it's cooking something new or enjoying a great meal. And whenever I get
                    the chance,{' '}
                    <span className="text-gray-800 font-semibold">
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
