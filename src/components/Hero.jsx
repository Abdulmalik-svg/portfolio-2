import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-blue-50 to-white px-4"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in-down">
          Hi, I'm <span className="text-blue-600">Abdulmalik Badmus</span>
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4 animate-fade-in-down delay-150">
          A Passionate Frontend Developer
        </h2>
        <p className="text-gray-600 text-lg mb-6 animate-fade-in-down delay-300">
          I craft beautiful, fast, and responsive websites with clean code and great user experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-down delay-500">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
             View My Work
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition duration-300"
          >
             Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
