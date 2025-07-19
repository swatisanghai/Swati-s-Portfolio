import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGit,
  FaNodeJs,
  FaPlus,
  FaMinus,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiExpress,
  SiSqlite,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import profileImage from "./assets/swati1.jpg";
import stockImage from "./assets/w2.jpg";
import fraudImage from "./assets/crfd.jpg";
import aluImage from "./assets/alu.jpg";

const skills = [
  "C#",
  "Python",
  "JavaScript",
  "Blazor",
  "React",
  ".NET",
  "Entity Framework",
  "SQL",
  "REST APIs",
  "Machine Learning",
];
const skillIcons = [
  { name: "React", icon: <FaReact className="text-teal-400" size={30} /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={30} /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={30} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={30} /> },
  { name: "Python", icon: <FaPython className="text-green-500" size={30} /> },
  { name: "Java", icon: <FaJava className="text-red-500" size={30} /> },
  { name: "SQL", icon: <SiSqlite className="text-gray-500" size={30} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" size={30} /> },
  { name: "Git", icon: <FaGit className="text-orange-600" size={30} /> },
  { name: "NodeJs", icon: <FaNodeJs className="text-green-600" size={30} /> },
  { name: "Express Js", icon: <SiExpress className="text-white bg-black p-1 rounded" size={30} /> },
  { name: ".NET", icon: <FaCode className="text-purple-700" size={30} /> },
];

const projects = [
  {
    title: "Stock Price Prediction Using LSTM & RNN",
    image: stockImage,
    objective: "Implemented LSTM and RNN algorithms for time-series analysis in stock market data.",
    tech: ["Python", "TensorFlow", "Pandas", "Matplotlib", "Streamlit", "Yahoo Finance API"],
    outcome: "Achieved accurate stock market forecasts leveraging long-term dependencies.",
    githubLink: "https://github.com/swatisanghai",
  },
  {
    title: "Credit Card Fraud Detection",
    image: fraudImage,
    objective: "Implemented grid search-based fraud detection with Scikit-learn.",
    tech: ["Python", "Scikit-learn", "GridSearchCV", "Pandas", "Matplotlib", "Seaborn"],
    outcome: "Enhanced model accuracy and reduced false positives.",
    githubLink: "https://github.com/swatisanghai",
  },
  {
    title: "Implementation of 8-bit ALU",
    image: aluImage,
    objective: "Designed an 8-bit ALU using VHDL and tested it on an FPGA board.",
    tech: ["VHDL", "Quartus Prime", "Terasic FPGA"],
    outcome: "Successful synthesis, simulation, and hardware validation.",
    githubLink: "https://github.com/swatisanghai",
  },
];

const experience = [
  {
    title: "Software Developer – DuaTask Inc., St. John’s, NL | October 2024 - Present",
    responsibilities: [
      "Developed and optimized Blazor WebAssembly applications using .NET 8/9, delivering responsive, high-performance user interfaces.",
      "Designed, built, and integrated RESTful APIs to support secure, data-driven workflows for a pharmacy compounding application.",
      "Implemented robust authentication and authorization mechanisms using JWT and ASP.NET Core Identity, enabling role-based access control across user roles.",
      "Managed data persistence and modeling with Entity Framework Core, ensuring efficient and scalable database interactions.",
      "Collaborated in Agile ceremonies, contributed to sprint planning, and practiced version control using Git to maintain code quality and traceability.",
      "Diagnosed and resolved bugs and performance issues, contributing to overall system stability and user satisfaction.",
    ],
  },
  {
    title: "Website Developer – Scrum Master – Avalon Robotics, St. John’s, NL | April 2024 – August 2024",
    responsibilities: [
      "Led an Agile team in developing and delivering a WordPress website, collaborating with the CEO on content creation and enhancing user engagement.",
      "Managed the product backlog, facilitated daily stand-ups, sprint planning, and retrospectives, ensuring efficient team coordination and timely feature prioritization.",
    ],
  },
  {
    title: "Project Management Intern – Avalon Robotics, St. John’s, NL | April 2024 – August 2024",
    responsibilities: [
      "Successfully managed a $1.2M project budget, conducting cash flow analysis, financial reporting, and strategic fund allocation to ensure project sustainability and efficiency.",
      "Led stakeholder collaboration to launch an AI and robotics training program for newcomers, overseeing project implementation, milestone tracking, and business operations support.",
    ],
  },
  {
    title: "Assistant Professor | Academic Project Coordinator – ZCOE Pune University, India | 2012 - 2018",
    responsibilities: [
      "Collaborated on curriculum with seamless technology integration and incorporation of student feedback.",
      "Acted as Lab-In-Charge for Basic Electronic Engineering Labs, focusing on hands-on and enhanced learning for students.",
      "Coordinated student projects, fostering timely completion and effective team communication.",
      "Provided counseling and remedial classes for 30% of students, leading to improved performance and increased student confidence.",
      "Scheduled timetables for 8 divisions, optimizing resource allocation and meeting academic goals, facilitating smooth operations and academic progress.",
    ],
  },
];
const education = [
  { degree: "MASC Computer Engineering", institution: "Memorial University, NL" },
  { degree: "MTech Electronics Technology", institution: "Shivaji University, India" },
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return true;
  });
  const [expandedExp, setExpandedExp] = useState({});

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleExp = (index) => {
    setExpandedExp((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const MotionSection = ({ id, title, children }) => (
    <motion.section
      id={id}
      className="p-6 max-w-5xl mx-auto mb-16"
      whileHover={{ scale: 1.02, zIndex: 5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h2 className="text-4xl font-heading font-semibold mb-8 text-center text-teal-500 dark:text-teal-400">{title}</h2>
      {children}
    </motion.section>
  );

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans selection:bg-teal-400 selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md px-6 py-3 flex justify-between items-center font-heading">
        <span className="font-bold text-2xl tracking-wide select-none text-teal-600 dark:text-teal-400">Swati Sanghai</span>
        <div className="space-x-6 text-sm flex items-center">
          {["skills", "projects", "experience", "education", "certifications", "contact"].map((sec) => {
            const formatted = sec.charAt(0).toUpperCase() + sec.slice(1).toLowerCase();
            return (
              <a
                key={sec}
                href={`#${sec}`}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition font-semibold tracking-wider"
              >
                {formatted}
              </a>
            );
          })}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-6 px-3 py-1 rounded-md bg-teal-500 dark:bg-teal-700 text-white hover:bg-teal-600 dark:hover:bg-teal-600 transition focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-16 px-6 max-w-md mx-auto">
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <img
            src={profileImage}
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto border-8 border-teal-500 dark:border-teal-400 shadow-lg"
          />
          <h1 className="text-5xl font-heading font-bold mt-6 tracking-wide text-teal-600 dark:text-teal-400">
            Swati Sanghai
          </h1>
          <p className="text-xl mt-3 font-semibold min-h-[38px] text-teal-700 dark:text-teal-300">
            <Typewriter
              words={["Fullstack Developer", "ML Enthusiast", "Certified Scrum Master"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <div className="flex justify-center space-x-10 mt-6 text-gray-700 dark:text-gray-300 text-3xl">
            <a href="https://github.com/swatisanghai" target="_blank" rel="noreferrer" className="hover:text-teal-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/swati-sanghai" target="_blank" rel="noreferrer" className="hover:text-teal-500">
              <FaLinkedin />
            </a>
            <a href="mailto:swatisanghai3103@gmail.com" className="hover:text-teal-500">
              <FaEnvelope />
            </a>
          </div>
          <a
            href="/SwatiSanghai_Resume.pdf"
            download
            className="mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold tracking-wide transition"
          >
            Download Resume
          </a>
        </motion.div>
      </header>

      {/* About Section */}
<MotionSection id="about" title="About Me">
  <p className="leading-relaxed text-lg text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 font-semibold">
    I’m a Software Developer with over 10 years of combined experience in software development and academia. I work primarily with .NET, Blazor, and C# to build secure and efficient web applications.
  </p>
  <p className="leading-relaxed text-lg text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 font-semibold mt-4">
    I enjoy solving problems, learning continuously, and contributing to meaningful software projects. With a background that blends teaching and hands-on development, I focus on writing clean, maintainable code and collaborating effectively in Agile environments to deliver solutions that align with user and business needs.
  </p>
</MotionSection>
      {/* Skills Section */}
      <MotionSection id="skills" title="Skills & Technologies">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
          {skillIcons.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center font-semibold text-gray-800 dark:text-gray-200"
            >
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition-transform transform hover:scale-110 hover:shadow-xl"
                style={{ width: 72, height: 72, display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                {skill.icon}
              </div>
              <span className="mt-3 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-xl w-full h-48 object-cover mb-4 shadow-inner"
              />
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Objective: </strong> {proj.objective}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Tech: </strong> {proj.tech.join(", ")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Outcome: </strong> {proj.outcome}
              </p>
              <a
                href={proj.githubLink}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-teal-500 font-semibold hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      {/* Experience Section */}
      <MotionSection id="experience" title="Experience">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-4"
          >
            <button
              onClick={() => toggleExp(i)}
              className="flex items-center justify-between w-full text-left font-semibold text-teal-600 dark:text-teal-400 text-lg focus:outline-none"
            >
              {exp.title}
              <span className="ml-4">{expandedExp[i] ? <FaMinus size={20} /> : <FaPlus size={20} />}</span>
            </button>
            {expandedExp[i] && (
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 dark:text-gray-300 text-base">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </MotionSection>

      {/* Education Section */}
      <MotionSection id="education" title="Education">
        <ul className="list-disc list-inside max-w-md mx-auto space-y-4 text-center text-teal-600 dark:text-teal-400 font-semibold text-lg">
          {education.map((edu, i) => (
            <li key={i}>
              <span>{edu.degree}</span> – <span className="italic">{edu.institution}</span>
            </li>
          ))}
        </ul>
      </MotionSection>
      {/* Certifications Section */}
<MotionSection id="certifications" title="Certifications">
  <ul className="max-w-3xl mx-auto space-y-6">
    {[
      {
        title: "Certified Scrum Master",
        issuer: "Scrum Alliance",
        link: "https://drive.google.com/file/d/1_ovoWw0mNotx85UhIHys040CJk48wS3q/view?usp=sharing",
      },
      {
        title: "Data Analytics Virtual Internship",
        issuer: "KPMG",
        link: "https://drive.google.com/file/d/1ycRQj_TFgCeEQwEZjQLz4_pHBzOgBOTt/view?usp=sharing",
      },
      {
        title: "Machine Learning",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1snNAOAmfPIS3Pro_i2RqhqN1Tn2i3_98/view?usp=sharing",
      },
      {
        title: "CI/CD for Beginners",
        issuer: "Simplilearn",
        link: "https://drive.google.com/file/d/1LzBN1c-t81ayEfeOkEECzn3hw2LBDA87/view?usp=sharing",
      },
      {
        title: "GIT Version Control",
        issuer: "Simplilearn",
        link: "https://drive.google.com/file/d/1_E9GL3Bqg6MTHpPNauXvgbMn9XdUKXo7/view?usp=sharing",
      },
      {
        title: "Python Data Structures",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1JTFHx2yHjhrW3ORCA9aGTb9rudB_m7qC/view?usp=sharing",
      },
    ].map(({ title, issuer, link }, idx) => (
      <li
        key={idx}
        className="flex justify-between items-center bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-semibold flex items-center space-x-1"
          aria-label={`View certificate for ${title}`}
        >
          <span>View</span>
          <FaExternalLinkAlt />
        </a>
      </li>
    ))}
  </ul>
</MotionSection>
      {/* Contact Section */}
      <MotionSection id="contact" title="Contact Me">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col space-y-6 text-gray-700 dark:text-gray-300 text-lg font-semibold">
            <a
              href="https://github.com/swatisanghai"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-teal-500 transition"
            >
              <FaGithub size={30} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/swati-sanghai"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-teal-500 transition"
            >
              <FaLinkedin size={30} /> LinkedIn
            </a>
            <a
              href="mailto:swatisanghai3103@gmail.com"
              className="flex items-center gap-4 hover:text-teal-500 transition"
            >
              <FaEnvelope size={30} /> swatisanghai3103@gmail.com
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="grid gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 resize-none"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </MotionSection>
      <footer className="text-center py-6 mt-12 text-gray-600 dark:text-gray-400 font-semibold text-sm select-none">
  &copy; {new Date().getFullYear()} Swati Sanghai. All rights reserved.
</footer>
</main>
  );
};

export default Portfolio;
