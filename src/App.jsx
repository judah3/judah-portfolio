import { useEffect, useState } from 'react';
import sitting from '../img/hero.svg';
import { siteConfig } from './config/siteConfig';
import {
  contactDetails,
  education,
  experience,
  navLinks,
  projects,
  skills
} from './config/portfolioData';

const summaryCopy = siteConfig.summary;

function ContactIcon({ type }) {
  const icons = {
    phone: (
      <path d="M6.6 2.3a1 1 0 0 1 1-.2l2.2 1a1 1 0 0 1 .5 1.3l-.8 1.8a12 12 0 0 0 4.8 4.8l1.8-.8a1 1 0 0 1 1.3.5l1 2.2a1 1 0 0 1-.2 1A3.8 3.8 0 0 1 15.5 19C8.6 19 3 13.4 3 6.5c0-1 .4-1.9 1.1-2.6l2.5-1.6Z" />
    ),
    linkedin: (
      <path d="M5.3 7.2A1.7 1.7 0 1 1 5.3 3.8a1.7 1.7 0 0 1 0 3.4ZM3.9 8.5h2.8V17H3.9V8.5ZM8.4 8.5H11v1.2h.1c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4V17h-2.8v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2V17H8.4V8.5Z" />
    ),
    github: (
      <path d="M10 2C5.6 2 2 5.6 2 10a8 8 0 0 0 5.5 7.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-.9-2.7-.9-.3-.8-.9-1-1-1-.8-.6 0-.6 0-.6.8 0 1.3.9 1.3.9.8 1.3 2 1 2.5.7.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.9-2.2 0-.2-.4-1 .1-2.1 0 0 .7-.2 2.3.8A8 8 0 0 1 10 6c.7 0 1.3.1 2 .3 1.6-1.1 2.3-.8 2.3-.8.5 1.1.2 1.9.1 2.1.6.6.9 1.3.9 2.2 0 3-1.8 3.7-3.6 3.9.3.2.6.8.6 1.6v2.3c0 .2.1.5.5.4A8 8 0 0 0 18 10c0-4.4-3.6-8-8-8Z" />
    ),
    location: (
      <path d="M10 2.5a5 5 0 0 0-5 5c0 3.7 5 10 5 10s5-6.3 5-10a5 5 0 0 0-5-5Zm0 6.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" />
    )
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="contact-icon">
      {icons[type]}
    </svg>
  );
}

export default function App() {
  const [navLifted, setNavLifted] = useState(false);
  const mailtoLink = `mailto:${siteConfig.email}`;
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  const [formStatus, setFormStatus] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formValues;

    if (!contactEndpoint) {
      const subject = `Message from ${name || 'Portfolio Guest'}`;
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `${mailtoLink}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setFormLoading(true);
    setFormStatus('');

    try {
      const payload = new FormData();
      payload.append('name', String(name));
      payload.append('email', String(email));
      payload.append('message', String(message));

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload
      });

      if (response.status === 200) {
        setFormStatus('Thanks for sending a message.');
        setFormValues({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('Something went wrong. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setNavLifted(window.scrollY > 22);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-shell">
      <nav className={`nav ${navLifted ? 'nav-scrolled' : ''}`}>
        <div className="brand">{siteConfig.brand}</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="btn ghost" href="#contact">
          Contact me
        </a>
      </nav>
      <header className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{siteConfig.role}</p>
            <h1>Hi! I'm {siteConfig.name}</h1>
            <p className="lede">{summaryCopy}</p>
            <div className="hero-actions">
              <a className="btn" href="#contact">
                Hire me
              </a>
              <a className="btn ghost" href="/2026 Jude Agagad Resume.pdf" download="2026 Jude Agagad Resume.pdf">
                Download CV
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="illustration-card">
              <img src={sitting} alt="Developer working on a laptop" className="hero-pic" />
            </div>
            <div className="down-indicator">
              <span>Scroll</span>
              <div className="bar" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="panel" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects with measurable impact</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
                <p className="project-meta">{project.meta}</p>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="project-actions">
                  {[{ cta: project.cta, href: project.href }, { cta: project.secondaryCta, href: project.secondaryHref }]
                    .filter((action) => action.cta && action.href)
                    .map((action) => (
                      <a
                        key={`${project.title}-${action.cta}`}
                        className="btn-link"
                        href={action.href}
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {action.cta}
                      </a>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Proven delivery in operations, security, and scaling</h2>
          </div>
          <div className="experience-grid">
            {experience.map((job) => (
              <article key={job.company} className="experience-card">
                <header>
                  <p className="project-meta">
                    {job.role} - {job.location}
                  </p>
                  <h3>{job.company}</h3>
                  <span className="dates">{job.dates}</span>
                </header>
                <ul>
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I rely on</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.category}>
                <p className="skills-category">{group.category}</p>
                <div className="skills-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Continuous learning</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school}>
                <p className="project-meta">
                  {item.dates} - {item.location}
                </p>
                <h3>{item.school}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Ready?</p>
            <h2>Let's build something together</h2>
          </div>
          <p>
            I'm accepting new collaborations, mentorships, and agency partnerships from {siteConfig.location}.
            Share your goals, timeline, and budget, and I'll follow up within a business day.
          </p>
          <div className="contact-grid">
            <aside className="contact-details">
              <p className="skills-category">Contact details</p>
              <ul>
                {contactDetails.map((detail) => (
                  <li key={detail.label}>
                    <ContactIcon type={detail.icon} />
                    <div>
                      <small>{detail.label}</small>
                      {detail.href ? (
                        <a href={detail.href} target="_blank" rel="noreferrer">
                          {detail.value}
                        </a>
                      ) : (
                        <span>{detail.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formValues.name}
                onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
                required
              />

              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={formValues.email}
                onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
                required
              />

              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell me about the opportunity..."
                value={formValues.message}
                onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
                required
              />

              <div className="contact-actions">
                <button type="submit" className="btn" disabled={formLoading}>
                  {formLoading ? 'Sending...' : 'Send message'}
                </button>
              </div>
              {formStatus && <p className="contact-status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>{new Date().getFullYear()} {siteConfig.copyrightName}. Crafted with care.</p>
      </footer>
    </div>
  );
}

