import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-4 text-white"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
          Hi, I'm <span className="text-emerald-400">Abdulmalik Badmus</span>
        </h1>
        <h2 className="text-2xl text-gray-300 mb-4 animate-fade-in-down delay-150">
          A Passionate Frontend Developer
        </h2>
        <p className="text-gray-400 text-lg mb-8 animate-fade-in-down delay-300">
          I build beautiful, fast, and responsive websites with clean code and a focus on great user experience.
        </p>
        <div className="animate-fade-in-down delay-500">
          <a
            href="#contact"
            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 hover:scale-105 transition duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
