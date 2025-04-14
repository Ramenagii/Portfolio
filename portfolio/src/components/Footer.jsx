export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-400 py-4 text-center">
      <p className="text-sm">
        © 2025 Justin |{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a href="#top" className="text-yellow-400 hover:underline">
          Back to Top
        </a>
      </p>
    </footer>
  );
}
