const projects = [
  {
    title: "S.C.A.M. App",
    type: "Student app",
    image: "/SCAM.jpg",
    summary:
      "A note-taking and activity-management project for students. I worked on making the workflow easier to follow: notes, flashcards, and the parts students need to return to quickly.",
    role: "My part: interface flow, feature layout, and making the app feel less like a raw school requirement.",
    stack: ["React", "Socket.IO", "Notes"],
  },
  {
    title: "Personal Portfolio",
    type: "This website",
    image: "/Pwebsite.jpg",
    summary:
      "The site you are viewing now. I rebuilt it from a darker animated version into a quieter one-page portfolio that puts the projects and my current skill level first.",
    role: "My part: content cleanup, layout direction, responsive sections, and a more honest presentation of my work.",
    stack: ["React", "Vite", "Tailwind"],
  },
  {
    title: "DSA Visualizer",
    type: "Learning tool",
    image: "/DSA.jpg",
    summary:
      "A visual learning tool for data structures and algorithms. The goal was not just to animate things, but to make each step understandable while the algorithm runs.",
    role: "My part: visual states, interaction flow, and translating algorithm steps into something a classmate could follow.",
    stack: ["JavaScript", "Algorithms", "CSS"],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="page-shell content-page">
      <div className="section-intro reveal">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects I made while learning, debugging, and improving.</h1>
        <p>
          I do not want this section to pretend I have shipped huge products.
          These are student and personal builds that show how I think, what I
          touched, and what I am getting better at.
        </p>
      </div>

      <div className="project-list reveal">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <img src={project.image} alt={`${project.title} preview`} />
            </div>
            <div className="project-content">
              <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
              <p className="eyebrow">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <p className="project-role">{project.role}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="https://github.com/Ramenagii" target="_blank" rel="noreferrer">
                  Source
                </a>
                <a href="#contact">Ask about this project</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
