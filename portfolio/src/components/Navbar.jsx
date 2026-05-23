export default function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="site-nav">
      <a href="#home" className="brand-mark" aria-label="Justin Lorenzo home">
        justin lorenzo<span>.</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href="mailto:johnjustinrl15@gmail.com" className="nav-cta">
        Email me
      </a>
    </header>
  );
}
