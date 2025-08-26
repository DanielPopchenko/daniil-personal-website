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

        {/* Experience */}
        <div className="text-white text-lg font-bold mt-20">
          <h1 className="text-white text-4xl font-bold text-center mb-16 relative">
            <span className="relative z-10">Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg opacity-20 blur-sm"></div>
          </h1>

          <div className="max-w-6xl mx-auto px-6">
            {/* Volta Health Experience */}
            <div className="group relative mb-12">
              {/* Animated background card */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-115 group-hover:shadow-gray-500/20"></div>

              {/* Content */}
              <div className="relative p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                      Volta Health
                    </h2>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm font-semibold text-gray-300 border border-gray-600">
                        Sep 2024 - August 2025
                      </span>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                          Full Stack
                        </span>
                        <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  The system consists of a platform for students to manage and track health records
                  and insurance (IOS/Android), as well as a platform for university admins to manage
                  students data like health records, insurance, waivers, immunization records, etc.
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS'].map(
                    (tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-600/50 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* Animated progress bar */}
                <div className="mt-6">
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform transition-all duration-1000 ease-out group-hover:scale-x-110 origin-left"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>

            {/* Add more experience items here */}
            <div className="text-center text-gray-400 mt-8">
              <p className="text-lg">More experiences coming soon...</p>
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
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

export default App;
