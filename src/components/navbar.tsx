import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">
            {/*<img src="https://media.licdn.com/dms/image/v2/D5603AQHVpDvnUqmPTA/profile-displayphoto-shrink_400_400/B56ZZidsHaGQAk-/0/1745408675799?e=1755129600&v=beta&t=AG9J-euQhuxGXpm-vohprZVsedQpDiJdaA9h1EkiIXk" alt="Logo" className="h-10 w-10 rounded-full" /> */}
            Welcome.
            </div>

        <div className="hidden md:flex space-x-1">
          <a href="#" className="text-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300">Home</a>
          <a href="#about" className="text-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300">About</a>
          <a href="#projects" className="text-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300">Projects</a>
          <a href="#contact" className="text-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300">Contact</a>
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-white">
          <a href="#" className="text-lg block text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#about" className="text-lg block text-gray-600 hover:text-blue-600 transition duration-300">About</a>
          <a href="#projects" className="text-lg block text-gray-600 hover:text-blue-600 transition duration-300">Projects</a>
          <a href="#contact" className="text-lg block text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
