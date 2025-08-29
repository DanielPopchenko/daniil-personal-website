import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from './assets/personal-logo-nobg.png';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experiences from './Experiences';
import { MdLocationPin } from 'react-icons/md';

function App() {
  const handleEmailClick = () => {
    const email = 'daniel.popchenko@gmail.com';
    const subject = 'Hello Daniil!';
    const body = 'I would like to connect with you regarding...';

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
      <div className="bg-gradient-to-r from-black to-gray-900 min-w-screen min-h-screen p-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <img src={logo} alt="logo" className="w-[175px] h-[175px] rounded-3xl object-cover" />
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <div className="flex flex-col items-center md:items-start gap-4 mr-auto">
              <div className="flex  flex-col md:flex-row items-center md:items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg ">
                  <h1 className="text-white text-4xl text-center md:text-left font-bold">
                    Daniil Popchenko
                  </h1>
                </div>
                <div className=" px-3 py-[7px] bg-gray-800/80 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MdLocationPin size={24} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white text-lg font-bold">New York, NY</p>
                      <p className="text-gray-300 text-sm">Open to relocation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg shadow-lg shadow-gray-900 border-2 border-gray-900 w-fit">
                <p className="text-white text-xl font-bold">Full Stack Engineer</p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/daniil-popchenko/"
                  className="text-white text-sm font-bold flex items-center"
                >
                  <FaLinkedin
                    size={30}
                    className="hover:text-gray-500 transition-all duration-300"
                  />
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
                  <FaEnvelope
                    size={30}
                    className="hover:text-gray-500 transition-all duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <AboutMe />

        <Skills />

        <Experiences />
      </div>
    </>
  );
}

export default App;
