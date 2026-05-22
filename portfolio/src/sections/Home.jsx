const stats = [
  { value: "3", suffix: "+", label: "Featured builds" },
  { value: "2027", suffix: "", label: "CpE graduation" },
  { value: "5", suffix: "+", label: "Core tools" },
];

const capabilities = ["React", "Tailwind CSS", "Python", "AutoCAD", "OOP"];

export default function Home() {
  return (
    <section id="home" className="page-shell hero-page">
      <div className="hero-copy">
        <p className="eyebrow">Computer Engineering Student</p>
        <h1>
          Justin
          <br />
          <strong>Lorenzo</strong>
          <span>.</span>
        </h1>
        <p className="hero-text">
          I am a Computer Engineering student from Bulacan who likes making
          school projects feel clearer, cleaner, and easier to use. Most of my
          work starts messy, then I refine it until the idea makes sense on
          screen.
        </p>
        <div className="button-row">
          <a href="#work" className="button primary">
            View work
          </a>
          <a href="#contact" className="button secondary">
            Contact me
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Portfolio summary">
        <div className="profile-row">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2>Building interfaces I can explain, maintain, and improve.</h2>
          </div>
          <div className="portrait-card">
            <img src="/pfp.jpg" alt="Justin R. Lorenzo" />
          </div>
        </div>

        <div className="summary-grid">
          <div>
            <p className="card-number">
              CpE<span>.</span>
            </p>
            <p className="card-label">Hardware + software foundation</p>
          </div>
          <div>
            <p className="card-number">
              UI<span>/</span>Web
            </p>
            <p className="card-label">React interfaces and project systems</p>
          </div>
        </div>

        <div className="capability-panel">
          <p className="eyebrow">Tools</p>
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </aside>

      <div className="metric-strip">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p>
              {stat.value}
              <span>{stat.suffix}</span>
            </p>
            <small>{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
