import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I'm a professional frontend developer based in Nigeria, specializing in building fast, responsive, and accessible web applications using <strong>HTML, CSS, JavaScript</strong>, and <strong>React</strong>.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I focus on crafting smooth user experiences and clean, scalable interfaces that perform well across devices. With real-world projects under my belt, I approach every build with performance and usability in mind.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Beyond code, I’m a creative problem-solver who enjoys taking on new challenges and delivering solutions that make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;
