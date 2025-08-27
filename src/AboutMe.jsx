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

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Description Card */}
            <div className="group relative md:col-span-2 lg:col-span-1">
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
                <ul className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Adaptable Full Stack Engineer with over 2 years of production experience,
                    building across Frontend, Mobile, and Backend using technologies like
                    TypeScript, JavaScript, ReactJS, React Native, NextJS, NodeJS, ExpressJS,
                    Tailwind, CSS3/HTML5, and SCSS.
                  </li>
                  <li>
                    Outside of coding, football has always been a big part of my life. Had the
                    chance to play in professional leagues in both Ukraine and Latvia. Also I'm a
                    big food lover, whether it’s cooking something new or enjoying a great meal. And
                    whenever I get the chance, love walking, exploring new places, and discovering
                    new experiences.
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
                <ul className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Driven by curiosity and a passion for progress, each challenge is seen as an
                    opportunity to learn and grow.
                  </li>
                  <li>
                    New frameworks, emerging technologies, and complex problems are welcomed as
                    chances to push boundaries and refine skills.
                  </li>
                  <li>
                    Every project becomes a space to experiment, adapt, and transform ideas into
                    tangible solutions.
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
                <ul className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Bring a strong background in UI development and design systems, with a
                    consistent focus on creating responsive, modern, and intuitive interfaces.
                  </li>

                  <li>
                    Highly attentive to details and passionate about delivering pixel-perfect
                    implementations that not only meet technical requirements but also delight both
                    users and designers.
                  </li>
                  <li>
                    Experienced in building and maintaining scalable design systems and component
                    libraries, ensuring consistency across applications while improving development
                    speed.
                  </li>
                  <li>
                    Find real satisfaction in refining UI until it feels seamless, making products
                    more enjoyable to use and ensuring designers’ visions are realized to the
                    fullest.
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
                <ul className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Experienced in manual testing and quality assurance, with strong skills in
                    developing unit tests using Jest and Vitest, as well as debugging complex
                    systems.
                  </li>
                  <li>
                    At one point, <b>served as the sole QA within a development team</b>, creating
                    test plans, reporting workflows, and leading defect detection efforts alongside
                    core software engineering responsibilities. This unique role sharpened the
                    ability to balance precision with delivery speed, ensuring higher product
                    stability and user trust while continuing to build and ship features.
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Collaboration Card */}
            <div className="group relative md:col-span-2 lg:col-span-1">
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
                <ul className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300 list-disc list-inside">
                  <li>
                    Thrives in cross-functional teams, collaborating with product and design to
                    deliver responsive, pixel-perfect user experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
