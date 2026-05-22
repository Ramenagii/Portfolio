const notes = [
  {
    title: "What I learned building a DSA visualizer",
    date: "Project note",
    body: "Visual tools need more than animation. The important work is deciding what the learner should notice first.",
  },
  {
    title: "Designing portfolios for technical students",
    date: "Design note",
    body: "A strong portfolio should make skills concrete through projects, not list every tool at equal weight.",
  },
  {
    title: "Balancing hardware and web development",
    date: "Engineering note",
    body: "Computer engineering gives useful context for web work: systems thinking, debugging habits, and respect for constraints.",
  },
];

export default function Blog() {
  return (
    <section id="notes" className="page-shell content-page">
      <div className="section-intro reveal">
        <p className="eyebrow">Notes</p>
        <h1>Short writing about projects, learning, and process.</h1>
        <p>
          A lighter replacement for placeholder blog content. These notes can
          grow into full posts as the portfolio matures.
        </p>
      </div>

      <div className="card-grid reveal">
        {notes.map((note) => (
          <article className="minimal-card" key={note.title}>
            <span>{note.date}</span>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
