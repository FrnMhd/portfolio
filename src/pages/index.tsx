
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white px-4">
              {<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
                Hi 👋, I&apos;m Farhan
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 mb-8">
                Full Stack Developer | Automation Enthusiast
              </p>
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg transition duration-300 mr-4"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-white border border-blue-600 hover:bg-blue-200  text-black py-3 px-6 rounded-full text-lg transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </section>}
        </section>

        {/* experience */}
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Full Stack / Backend Developer Intern — Trogon Media Calicut</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Jun 2025 - Present</p>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Developed SaaS dashboards / web apps using Bootstrap, Codeignitor/Laravel, and API integration.</li>
                <li>Integrated Payment gateways and CRM systems.</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Flutter Developer - Maitexa Solutions Calicut</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Jul 2024 - Aug 2024</p>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Developed and maintained cross-platform mobile applications for notes management using Flutter and Dart, ensuring compatibility with both iOS and Android.</li>
                <li>Implemented user authentication, data storage, and real-time updates using Firebase.</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Freelance Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Mar 2020 - Present</p>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Integrated and Deployed websites using HTML, CSS, JavaScript languages.</li>
                <li>Created powerful Content Management Systems to serve as an interface</li>
              </ul>
            </div>
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="py-20 bg-gray-50 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                Projects
              </h2>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                {/* Project Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-left hover:scale-105 transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">Sales Intelligence Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    Forecasting sales trends and business insights using Tailwind CSS, and Chart.js; backend using Express/Node.js with JWT authentication and Python (Prophet) ML.
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Tech: Tailwind, NodeJS, Pandas, Python (prophet)</p>
                  <a href="https://github.com/FrnMhd/BI-Vision-sales-forecasting" className="relative inline-block group text-blue-800">
                   View Project →
                      <span
                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"
                      ></span>
                  </a>
                </div>

                {/* Project Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-left hover:scale-105 transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">BuildTrack - Construction Management</h3>
                  <p className="text-gray-600 mb-4">
                    Platform for tracking workers, wages, and inventory at construction sites.
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Tech: PHP, MySQL, Bootstrap</p>
                  <a href="https://github.com/FrnMhd" className="relative inline-block group text-blue-800">
                   View Project →
                      <span
                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"
                      ></span>
                  </a>
                </div>

                {/* Project Card 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 text-left hover:scale-105 transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">Custom Admin Dashboard and CMS System</h3>
                  <p className="text-gray-600 mb-4">
                    a custom admin dashboard and CMS system for managing the college offcial website using PHP, Bootstrap, and MySQL.
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Tech: PHP, Bootstrap, and MySQL</p>
                  <a href="http://cuiet.info/" className="relative inline-block group text-blue-800">
                   View Project →
                      <span
                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"
                      ></span>
                  </a>
                </div>

              </div>
            </div>
          </section>

        <section id="about" className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I’m a passionate developer with hands-on experience in full-stack development, web technologies and python scripting. Proficient in building 
responsive designs, integrating RESTful APIs, and using version control systems like Git. 
              <br /><br />
               Eager to contribute as a Web or 
Full-Stack Development Intern with a focus on practical problem-solving and clean code.
            </p>
          </div>
        </section>

        {/* contact sec */}
        <section id="contact" className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Contact Me
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Interested in working together or just want to say hi? Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:youremail@example.com"
                className="text-blue-600 hover:text-blue-800 text-lg transition duration-300"
              >
                📧 farhanmedappil@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/farhanmp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg transition duration-300"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/FrnMhd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg transition duration-300"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </section>

        

    
    </>
  );
}
