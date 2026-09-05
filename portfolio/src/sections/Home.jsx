const stats = [
  { value: "3+", label: "Featured builds" },
  { value: "2027", label: "CpE graduation" },
  { value: "Bulacan", label: "Based in PH" },
];

export default function Home() {
  return (
    <section id="home" className="hero-page">
      <div className="page-shell hero-frame">
        <div className="hero-copy">
          <p className="eyebrow">Computer Engineering · PUP Mabini</p>
          <h1>
            Calm builds.
            <br />
            Clear screens.
            <br />
            <span>Useful tools.</span>
          </h1>
          <p className="hero-text">
            I refine messy school projects until the idea makes sense on
            screen — readable, fast, and honest about what I can ship.
          </p>
          <div className="button-row">
            <a href="#work" className="button primary">
              View work
            </a>
            <a href="#contact" className="button secondary">
              Contact
            </a>
          </div>
        </div>

        <aside className="hero-stats" aria-label="Portfolio summary">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <small>{stat.label}</small>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
