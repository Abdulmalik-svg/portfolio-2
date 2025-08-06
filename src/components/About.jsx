import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-20 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I'm a frontend developer based in Nigeria, passionate about building fast, responsive, and accessible web applications using <strong className="text-yellow-400">HTML, CSS, JavaScript</strong>, and <strong className="text-yellow-400">React</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I focus on delivering clean, scalable interfaces and smooth user experiences that perform well across devices. With real-world project experience, I always build with performance and usability in mind.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Beyond code, I love solving problems and creating solutions that actually make a difference.
        </p>
      </div>
    </section>
  );
};

export default About;
