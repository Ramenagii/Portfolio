import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "johnjustinrl15@gmail.com",
    href: "mailto:johnjustinrl15@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Ramenagii",
    href: "https://github.com/Ramenagii",
  },
  {
    label: "Location",
    value: "Bulacan, Philippines",
    href: null,
  },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      form.reset();
      setFormStatus("sent");
      setStatusMessage("Message sent. Thank you for reaching out.");
    } catch (error) {
      setFormStatus("error");
      setStatusMessage(error.message);
    }
  };

  return (
    <section id="contact" className="page-shell content-page contact-page">
      <div className="section-intro reveal">
        <p className="eyebrow">Contact</p>
        <h1>Have a project, school collaboration, or build idea?</h1>
        <p>
          Send a clear message with the goal, timeline, and links. I am open to
          student projects, front-end work, and practical engineering builds.
        </p>
      </div>

      <div className="contact-layout reveal">
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Tell me what you want to build" required />
          </label>
          <button className="button primary" type="submit" disabled={formStatus === "sending"}>
            {formStatus === "sending" ? "Sending..." : "Send message"}
          </button>
          {statusMessage && (
            <p className={`form-status ${formStatus === "error" ? "error" : "success"}`}>
              {statusMessage}
            </p>
          )}
        </form>

        <aside className="contact-card">
          <h2>Direct links</h2>
          {contactLinks.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {item.value}
                </a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
