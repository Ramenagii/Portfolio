export default function Navbar() {
  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="site-nav">
      <a href="#home" className="brand-mark" aria-label="Justin Lorenzo home">
        Justin R. Lorenzo
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
