import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? I’m open to collaborations, freelance gigs, and remote work opportunities.
        </p>

        <a
          href="mailto:abdulmalikbadmus.dev@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Abdulmalik%2C%20I’d%20love%20to%20discuss%20a%20project%20with%20you..."
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition duration-300"
        >
          Send an Email
        </a>

        <div className="mt-10 flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Abdulmalik-svg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Sha_dow002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulmalik-badmus-442b37323/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          &copy; {new Date().getFullYear()} Abdulmalik Badmus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
