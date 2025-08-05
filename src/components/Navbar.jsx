const Navbar = () => {
    return (
      <header className="bg-white shadow fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600">Abdulmalik</a>
          <nav className="space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  