import E_commerce from "../assets/E_commerce.png";
import game1 from "../assets/game1.jpg";
import design1 from "../assets/design1.jpg";
import game2 from "../assets/game2.jpeg";
import design2 from "../assets/design2.jpg";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Built a full-stack E-Commerce system with RESTful APIs, featuring authentication, product management, cart, and checkout",
      image: E_commerce,
      tags: ["Angular ", "Node.js ", "MongoDB ", "Express.js"],
      github: "https://github.com/mohamedaziz19/E-Commerce",
      demo: "https://mohamedaziz19.github.io/E-Commerce/",
    },
    {
      id: 2,
      title: "Memory Card Matching Game",
      desc: "Interactive Hangman Game built with a clean and responsive interface, where users guess hidden words letter by letter with limited attempts, featuring real-time feedback and engaging gameplay",
      image: game1,
      tags: ["HTML ", "CSS ", "JavaScript "],
      github: "https://github.com/mohamedaziz19/Memory-Block-Game",
      demo: "https://mohamedaziz19.github.io/Memory-Block-Game/",
    },
    {
      id: 3,
      title: "Modern Website Design",
      desc: "Modern multi-section website built with HTML & CSS, featuring articles, gallery, services, and pricing sections with a clean and responsive design",
      image: design1,
      tags: ["HTML ", "CSS ", "JavaScript ", "React"],
      github:
        "https://github.com/mohamedaziz19/HTML-And-CSS-Project-Two?tab=readme-ov-file",
      demo: "https://mohamedaziz19.github.io/HTML-And-CSS-Project-Two/",
    },
    {
      id: 4,
      title: "Hangman Word Guessing Game",
      desc: "Fun and interactive memory game where players flip cards to find matching pairs, improving concentration and memory skills with a simple and engaging gameplay experience",
      image: game2,
      tags: ["HTML ", "CSS ", "JavaScript "],
      github:
        "https://github.com/mohamedaziz19/Hangman-Game?tab=readme-ov-file",
      demo: "https://mohamedaziz19.github.io/Hangman-Game/",
    },
    {
      id: 5,
      title: "Modern Website Design 2",
      desc: "Modern multi-section website built with HTML & CSS, featuring articles, gallery, services, and pricing sections with a clean and responsive design",
      image: design2,
      tags: ["HTML ", "CSS ", "JavaScript ", "React"],
      github:
        "https://github.com/mohamedaziz19/HTML-And-CSS-Project-Three?tab=readme-ov-file",
      demo: "https://mohamedaziz19.github.io/HTML-And-CSS-Project-Three/",
    },
  ];
  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Here are some of the projects I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "e5e7eb",
              }}
              className=" group rounded-xl border duration-300 
              hover:border-orange-500/50 transition-all "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-50  overflow-hidden rounded-t-xl ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                    group-hover:scale-110 transition-transform 
                    duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {/* Github Code */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2
                    text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 transition-all
                    text-sm rounded-lg hover:shadow-lg text-white hover:shadow-orange-500/25"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          {/* All Projects */}
          <a
            href="https://github.com/mohamedaziz19"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-4
             transition-all font-semibold text-sm rounded-full 
             hover:shadow-lg text-white hover:shadow-orange-500/25"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub className="text-sm" />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
