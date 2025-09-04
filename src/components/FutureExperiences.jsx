import React from 'react';

function FutureExperiences() {
  return (
    <>
      {/* Future Experiences */}
      <div className="text-center text-gray-400 mt-12">
        <div className="relative p-8 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-2xl border border-gray-400/50 hover:border-gray-500/50 transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400/5 via-gray-500/5 to-gray-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-black bg-clip-text text-transparent">
                More Experiences Coming Soon
              </h3>
              <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse"></div>
            </div>
            <p className="text-lg text-gray-500 mb-6 group-hover:text-gray-700 transition-colors duration-300">
              Continuously growing and taking on new challenges
            </p>
            <div className="flex justify-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-bounce"></div>
              <div
                className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-bounce"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureExperiences;
