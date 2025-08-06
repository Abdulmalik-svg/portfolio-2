import React from 'react';

const projects = [
  {
    title: 'Sign Gallery',
    image: '/images/sign gallery.png',
    link: 'https://sign-image.vercel.app',
  },
  {
    title: 'Pi² Explorer',
    image: '/images/pi2 explorer.png',
    link: 'https://pi2-mirror-explorer.vercel.app/',
  },
  {
    title: 'Crypto Dashboard',
    image: '/images/crypto dashboard.png',
    link: 'https://crypto-dashboard-rho-rosy.vercel.app/',
  },
  {
    title: 'Guess My Number Game',
    image: '/images/guess my number.png',
    link: 'https://my-game-sigma-nine.vercel.app/',
  },
  {
    title: 'NaijaFlex Store',
    image: '/images/naijaflex.png',
    link: 'https://naijaflex-store-yfxu-p0t1hk5t5-abdulmalik-svgs-projects.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-6">
          My Projects
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          These projects reflect my journey as a frontend developer — from clean UI design to solving
          real-world problems. They show how I turn ideas into live, usable products.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg hover:shadow-emerald-500/50 transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col items-start">
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-4 py-2 border border-emerald-500 text-emerald-500 text-sm rounded hover:bg-emerald-500 hover:text-gray-900 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
