const Navbar = () => {
  return (
    <header className="bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-emerald-400 hover:text-yellow-400 transition">
          Abdulmalik
        </a>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-emerald-400 transition duration-300">
            About
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition duration-300">
            Testimonials
          </a>
          <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition duration-300">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
