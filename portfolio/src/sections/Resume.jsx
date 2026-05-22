const timeline = [
  {
    label: "Education",
    title: "BS Computer Engineering",
    meta: "Polytechnic University of the Philippines - Mabini",
    body: "Focused on programming, hardware systems, mathematics, and engineering fundamentals. Expected graduation: 2027.",
  },
  {
    label: "Experience",
    title: "Construction Project Assistant",
    meta: "RKEA Builders and Supply",
    body: "Supported project planning, AutoCAD layout work, and coordination with engineering teams.",
  },
  {
    label: "Contributions",
    title: "Student tools and visual systems",
    meta: "Academic and personal projects",
    body: "Built an algorithm visualizer and contributed flashcards and notes features to a student activity management app.",
  },
];

const skills = [
  "React JS",
  "Tailwind CSS",
  "Python",
  "Object-Oriented Programming",
  "AutoCAD",
  "Git workflow",
];

export default function Resume() {
  return (
    <section id="resume" className="page-shell content-page">
      <div className="section-intro reveal">
        <p className="eyebrow">Resume</p>
        <h1>A compact view of my education, experience, and technical base.</h1>
        <p>
          This page is intentionally simple so visitors can scan credentials
          quickly before going deeper into the project work.
        </p>
      </div>

      <div className="resume-grid reveal">
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title}>
              <p className="eyebrow">{item.label}</p>
              <h2>{item.title}</h2>
              <span>{item.meta}</span>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <aside className="skill-panel">
          <h2>Technical Skills</h2>
          <div className="tool-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <a className="button primary" href="#contact">
            Request CV
          </a>
        </aside>
      </div>
    </section>
  );
}
