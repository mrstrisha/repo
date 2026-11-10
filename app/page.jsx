"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowDownRight, ArrowUpRight, Menu, X, Github, Linkedin,
  Code2, Globe, Database, Terminal, Braces, Layers, Send,
  Sparkles, MoveUpRight
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Bazar Dor",
    type: "E-COMMERCE EXPERIENCE",
    description: "A modern e-commerce web application designed to make everyday shopping feel simple, smooth, and convenient.",
     image: "/images/Bazar dor.PNG",
    live: "https://dam-of-bazar.vercel.app/",
    github: "https://github.com/mrstrisha/Bazar-Dor",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    tone: "project-peach",
  },
  {
    number: "02",
    name: "BBA News 2026",
    type: "NEWS & INFORMATION",
    description: "A news-focused web application that presents information through a clean, organized, and easy-to-explore interface.",
    image: "/images/BBA-News.PNG",
    live: "https://bba-news-2026-93rc32jxr-trisha-e715.vercel.app/",
    github: "https://github.com/mrstrisha/BBA-News-2026",
    tags: ["Next.js", "JavaScript", "Tailwind CSS"],
    tone: "project-lilac",
  },
  {
    number: "03",
    name: "Fit-Log",
    type: "FITNESS TRACKING",
    description: "A fitness tracking application focused on helping users organize and manage their fitness activities.",
   image: "/images/Fit-Log.PNG",
    live: "https://fit-log-next-js.vercel.app/",
    github: "https://github.com/mrstrisha/Fit-Log-Next.js",
    tags: ["Next.js", "React", "JavaScript"],
    tone: "project-green",
  },
];

const skillGroups = [
  { title: "FRONTEND", icon: Globe, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
  { title: "BACKEND", icon: Database, skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
  { title: "TOOLS", icon: Terminal, skills: ["Git", "GitHub", "VS Code"] },
];

const navItems = [
  ["Home", "#home"], ["About", "#about"], ["Projects", "#projects"],
  ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"],
];

function SectionLabel({ children }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-wrap">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>N<span>.</span>TRISHA</a>
        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s Talk <ArrowUpRight size={15} /></a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <SectionLabel>ASPIRING WEB DEVELOPER · BANGLADESH</SectionLabel>
        <h1>Building digital experiences <em>that make</em> a difference<span>.</span></h1>
        <p className="hero-intro">I&apos;m <strong>Nusrat Jahan Trisha</strong> — an aspiring web developer passionate about turning thoughtful ideas into useful, human-centered digital experiences.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#contact">Let&apos;s connect <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-bottom">
          <span>CURIOUS BY NATURE. BUILT TO SOLVE.</span>
          <div className="socials">
            <a href="https://github.com/mrstrisha" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <Image src="/images/profile.jpg" alt="Nusrat Jahan Trisha" fill priority sizes="(max-width: 800px) 80vw, 42vw" className="portrait" />
        </div>
        <div className="portrait-note"><Sparkles size={16} /> Always learning, always building</div>
        <div className="hero-stamp">IDEAS<br />INTO<br /><i>IMPACT</i></div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-shell">
        <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid">
          <h2>Curiosity is where <em>every good</em> solution begins.</h2>
          <div className="about-copy">
            <p>I&apos;m Nusrat Jahan Trisha, an aspiring web developer with a passion for creating modern and functional web applications. I enjoy exploring new technologies, developing practical solutions, and continuously improving my development skills.</p>
            <p>My focus is on problem-solving, writing clean code, and transforming ideas into meaningful digital experiences.</p>
            <div className="learning-block">
              <span className="mini-label">CURRENTLY LEARNING & BUILDING</span>
              <div className="learning-tags"><span>Full-Stack Development</span><span>Backend Development</span><span>Modern Web Technologies</span></div>
            </div>
          </div>
        </div>
        <div className="about-signoff"><span>THOUGHTFUL CODE. REAL-WORLD SOLUTIONS.</span><Braces size={30} strokeWidth={1.2} /></div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.tone}`}>
      <div className="preview-top">
        <span>SELECTED WORK / {project.number}</span>
        <span>LIVE PROJECT ↗</span>
      </div>

      <div className="preview-window">
        <div className="window-bar">
          <i /><i /><i />
          <span>{project.name}</span>
        </div>

        <div className="window-content">
          <div className="window-copy">
            <small>DESIGNED & DEVELOPED</small>
            <strong>{project.name}</strong>
            <span>Explore the experience</span>
            <b>DISCOVER MORE ↗</b>
          </div>

          <div className="window-art">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 80vw, 42vw"
            />
          </div>
        </div>
      </div>

      <div className="preview-caption">
        A DIGITAL EXPERIENCE BY NUSRET
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="section-shell">
        <div className="projects-heading">
          <div><SectionLabel>SELECTED PROJECTS · 2025—2026</SectionLabel><h2>Grow ideas into <em>digital</em> experiences<span>.</span></h2></div>
          <p>A collection of things I&apos;ve imagined, designed, and brought to life with code.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-row ${index % 2 ? "project-reverse" : ""}`} key={project.number}>
              <a className="project-visual-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                <ProjectPreview project={project} />
              </a>
              <div className="project-info">
                <span className="project-number">/{project.number} — {project.type}</span>
                <h3>{project.name}<span>.</span></h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">View live <MoveUpRight size={16} /></a>
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub repository <Github size={16} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="section-shell">
        <SectionLabel>MY TOOLKIT</SectionLabel>
        <div className="skills-heading"><h2>Good ideas need<br /><em>the right tools.</em></h2><p>Technologies I use to turn concepts into working digital products — and the tools I&apos;m exploring along the way.</p></div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return <div className="skill-group" key={group.title}><div className="skill-group-title"><Icon size={20} /><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}<ArrowUpRight size={14} /></span>)}</div></div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const entries = [
    { level: "01", name: "Secondary School Certificate", short: "SSC", status: "COMPLETED", details: ["Institution: To be added", "Passing year: To be added", "Result: To be added"] },
    { level: "02", name: "Higher Secondary Certificate", short: "HSC", status: "COMPLETED", details: ["Institution: To be added", "Passing year: To be added", "Result: To be added"] },
    { level: "03", name: "Computer Science & Engineering", short: "BSc · CSE", status: "CURRENTLY STUDYING", details: ["Institution: To be added", "Status: Currently studying"] },
  ];
  return (
    <section className="education-section section-pad" id="education">
      <div className="section-shell">
        <SectionLabel>THE LEARNING JOURNEY</SectionLabel>
        <div className="education-heading"><h2>Learning is a <em>work in progress.</em></h2><p>Every chapter adds a new perspective. Here&apos;s the academic path I&apos;m building on.</p></div>
        <div className="education-list">
          {entries.map((item) => <article className="education-item" key={item.level}><span className="education-level">{item.level}</span><div className="education-name"><span>{item.short}</span><h3>{item.name}</h3></div><div className="education-details">{item.details.map((detail) => <p key={detail}>{detail}</p>)}</div><span className="education-status">{item.status}</span></article>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    text: "",
    error: false,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({ loading: true, text: "", error: false });

    try {
      await emailjs.send(
        "service_1y7rffx",
        "template_9dfj8z3",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "eOHFq9wt8Z9uCwECF"
      );

      setStatus({
        loading: false,
        text: "Your message has been sent successfully!",
        error: false,
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        loading: false,
        text: "Message could not be sent. Please try again.",
        error: true,
      });
    }
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <SectionLabel>HAVE A PROJECT IN MIND?</SectionLabel>
          <h2>Let's build something <em>together.</em></h2>
          <p>
            Have an idea, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
          <a className="contact-email" href="mailto:ayatrahman21@gmail.com">
            Let's start a conversation <ArrowUpRight size={18} />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              YOUR NAME
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                maxLength={100}
              />
            </label>

            <label>
              EMAIL ADDRESS
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label>
            SUBJECT
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              required
              maxLength={160}
            />
          </label>

          <label>
            YOUR MESSAGE
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a little about it..."
              rows={4}
              required
              maxLength={5000}
            />
          </label>

          <button
            className="button button-light"
            type="submit"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send message"}
            <Send size={16} />
          </button>

          {status.text && (
            <p
              className={`form-status ${
                status.error ? "form-error" : "form-success"
              }`}
              role="status"
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="section-shell footer-top"><a className="footer-brand" href="#home">NUSrat<br /><em>Jahan Trisha.</em></a><div className="footer-right"><p>Aspiring Web Developer<br />Focused on problem-solving & meaningful digital experiences.</p><div className="footer-links"><a href="https://github.com/mrstrisha" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#home">Back to top ↑</a></div></div></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} NUSRAT JAHAN TRISHA</span><span>DESIGNED & BUILT WITH PASSION BY NUSRAT JAHAN TRISHA.</span></div></footer>;
}

export default function Home() {
  return <><Navbar /><main><Hero /><About /><Projects /><Skills /><Education /><Contact /></main><Footer /></>;
}