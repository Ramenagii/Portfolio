import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiSqlite, SiTailwindcss } from "react-icons/si";

const services = [
  {
    title: "Interface Development",
    body: "React and Tailwind builds with responsive layouts, clear content hierarchy, and maintainable components.",
  },
  {
    title: "Engineering Support",
    body: "Computer engineering fundamentals applied to practical systems, documentation, and technical workflows.",
  },
  {
    title: "Design Translation",
    body: "Turning rough ideas, wireframes, and academic requirements into polished screens that people can use.",
  },
  {
    title: "Project Organization",
    body: "Readable repos, useful README files, and clean project presentation for reviewers, teammates, and recruiters.",
  },
];

const tools = [
  { name: "HTML", mark: FaHtml5, color: "#e34f26" },
  { name: "CSS", mark: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", mark: FaJs, color: "#b99a00" },
  { name: "React", mark: FaReact, color: "#149eca" },
  { name: "Tailwind", mark: SiTailwindcss, color: "#38bdf8" },
  { name: "Python", mark: FaPython, color: "#3776ab" },
  { name: "SQLite", mark: SiSqlite, color: "#003b57" },
  { name: "AutoCAD", initials: "CAD", color: "#d22f27" },
  { name: "Git", mark: FaGitAlt, color: "#f05032" },
  { name: "GitHub", mark: FaGithub, color: "#2a2a28" },
];

export default function About() {
  return (
    <section id="about" className="page-shell content-page">
      <div className="section-intro reveal">
        <p className="eyebrow">About</p>
        <h1>Building useful things with a calm, technical eye.</h1>
        <p>
          I am Justin R. Lorenzo, a Computer Engineering student at PUP Mabini.
          My work sits between software interfaces, engineering coursework, and
          small tools that make student workflows easier to understand and use.
        </p>
      </div>

      <div className="split-layout reveal">
        <article className="statement-card">
          <h2>Profile</h2>
          <p>
            I care about interfaces that feel direct: readable, fast, and clear
            about what the user should do next. I am currently focused on
            React, front-end systems, Python utilities, and the hardware side of
            computer engineering.
          </p>
          <p>
            Outside code, I am interested in photography, music production, and
            visual systems. Those creative habits help me bring more judgment to
            layout, rhythm, and presentation.
          </p>
        </article>

        <div className="info-list">
          <div>
            <span>Education</span>
            <p>BS Computer Engineering, Polytechnic University of the Philippines - Mabini</p>
          </div>
          <div>
            <span>Location</span>
            <p>Bulacan, Philippines</p>
          </div>
          <div>
            <span>Focus</span>
            <p>Front-end development, student tools, technical documentation</p>
          </div>
        </div>
      </div>

      <div className="card-grid reveal">
        {services.map((service) => (
          <article className="minimal-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </article>
        ))}
      </div>

      <div className="tool-showcase reveal">
        <div>
          <p className="eyebrow">Tool Experience</p>
          <h2>Logos for the tools I have worked with.</h2>
        </div>
        {tools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <div className="tool-logo" style={{ color: tool.color }}>
              {tool.mark ? <tool.mark /> : <span>{tool.initials}</span>}
            </div>
            <p>{tool.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
