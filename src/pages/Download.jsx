import { useEffect, useState } from 'react';
import './download.css';

const INSTALLER_VERSION = '1.0.0';
const INSTALLER_URL = 'https://github.com/judah3/lokal-live-translate/releases/tag/v1.0.0';
const INSTALLER_LABEL = `Windows Installer v${INSTALLER_VERSION}`;
const REPO_URL = 'https://github.com/judah3/lokal-live-translate';

const features = [
  {
    title: 'System Audio Capture',
    copy: 'Capture microphone and desktop audio streams in a single workflow designed for multilingual meetings and live content.'
  },
  {
    title: 'Real-Time Translation',
    copy: 'Generate speech-to-text and translated captions with low latency so conversations stay natural and uninterrupted.'
  },
  {
    title: 'Local AI Processing',
    copy: 'Keep speech and translation data fully local to your machine for privacy-first operation without cloud dependencies.'
  },
  {
    title: 'GPU / CPU Support',
    copy: 'Run efficiently on CPU-only systems with optional GPU acceleration for larger workloads and higher throughput.'
  }
];

const requirements = ['Windows 10/11', '8GB RAM minimum', 'Optional NVIDIA GPU', '64-bit system'];
const projectDetails = [
  'Local-first runtime with no required cloud backend for the core flow.',
  'Real-time transcript and translated output for continuous conversations.',
  'Configurable models and language directions for different workflows.',
  'GPU-first defaults (CUDA) with reliable CPU fallback mode.'
];
const useCases = [
  'Live meetings and calls: transcribe and translate ongoing conversation audio.',
  'Bilingual support sessions: monitor source speech and translated lines side-by-side.',
  'Streaming/video monitoring: capture speaker audio output and get live translated text.',
  'Internal QA/demo tooling: validate transcription/translation behavior with production-like flow.'
];
const techStack = [
  'Electron + React + TypeScript desktop UI',
  'Python engine with faster-whisper, transformers, and torch',
  'C# .NET 8 audio capture service with NAudio + WASAPI loopback',
  'WebSocket IPC between capture service, engine, and UI'
];
const architectureSteps = [
  'Electron launches the Python engine (ws://127.0.0.1:8765) and C# audio service.',
  'Audio service captures output-device audio, resamples to 16kHz mono float32, and streams to Python /audio.',
  'Python performs streaming transcription stabilization, sentence finalization, and translation.',
  'UI listens on Python /ws for partial and final events and renders aligned transcript/translation history.'
];

export default function Download() {
  const [navLifted, setNavLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavLifted(window.scrollY > 22);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="download-page" aria-labelledby="download-hero-title">
      <header className={`download-header ${navLifted ? 'download-header-scrolled' : ''}`}>
        <div className="download-header-inner">
          <a href="/" className="download-brand">
            Dev.judA
          </a>
          <nav className="download-nav" aria-label="Download page navigation">
            <a href="/">Portfolio</a>
            <a href="#download">Download</a>
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
          <a className="download-btn download-btn-secondary download-header-cta" href={INSTALLER_URL} target="_blank" rel="noreferrer">
            {INSTALLER_LABEL}
          </a>
        </div>
      </header>

      <section className="download-hero" id="download">
        <div className="download-container download-hero-grid">
          <figure className="download-card download-hero-shot">
            <img src="/media/screenshot1.png" alt="Lokal Live Translate screenshot showing live transcription stream" />
          </figure>
          <div className="download-hero-content">
            <p className="download-eyebrow">Desktop App</p>
            <h1 id="download-hero-title">Lokal Live Translate</h1>
            <p className="download-lede">
              Open-source Windows software for real-time speech-to-text and translation with fully local processing.
            </p>
            <div className="download-actions">
              <a className="download-btn download-btn-primary" href={INSTALLER_URL} target="_blank" rel="noreferrer">
                Download for Windows (v{INSTALLER_VERSION})
              </a>
              <a className="download-btn download-btn-secondary" href={REPO_URL} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="download-section" aria-labelledby="demo-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">Watch</p>
            <h2 id="demo-title">Live Demo</h2>
          </header>
          <div className="download-card download-video-card">
            <video controls preload="metadata" className="download-video" aria-label="Lokal Live Translate demo video">
              <source src="/media/demo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="download-section" id="details" aria-labelledby="details-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">Project Overview</p>
            <h2 id="details-title">What This Project Is</h2>
          </header>
          <div className="download-list-grid">
            {projectDetails.map((item) => (
              <article className="download-card download-info-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      
      <section className="download-section" id="use-cases" aria-labelledby="use-cases-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">Primary Use Cases</p>
            <h2 id="use-cases-title">Where Lokal Live Translate Helps</h2>
          </header>
          <div className="download-list-grid">
            {useCases.map((item) => (
              <article className="download-card download-info-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      <section className="download-section" aria-labelledby="features-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">Core Features</p>
            <h2 id="features-title">Features</h2>
          </header>
          <div className="download-feature-grid">
            {features.map((feature) => (
              <article className="download-card download-feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="download-section" id="tech-stack" aria-labelledby="tech-stack-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">Build Stack</p>
            <h2 id="tech-stack-title">Tech Stack</h2>
          </header>
          <div className="download-list-grid">
            {techStack.map((item) => (
              <article className="download-card download-info-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="download-section" id="architecture" aria-labelledby="architecture-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">System Flow</p>
            <h2 id="architecture-title">Architecture</h2>
          </header>
          <ol className="download-architecture-list">
            {architectureSteps.map((step) => (
              <li className="download-card download-info-card" key={step}>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="download-section" aria-labelledby="requirements-title">
        <div className="download-container">
          <header className="download-section-header">
            <p className="download-eyebrow">Environment</p>
            <h2 id="requirements-title">System Requirements</h2>
          </header>
          <div className="download-card download-requirements-card">
            <ul>
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="download-section" aria-labelledby="opensource-title">
        <div className="download-container">
          <div className="download-card download-open-source-card">
            <p className="download-eyebrow">Repository</p>
            <h2 id="opensource-title">Open Source</h2>
            <p>
              Lokal Live Translate is open source and built with Electron, Python, and .NET. Explore the codebase,
              track updates, and contribute improvements on GitHub.
            </p>
            <a className="download-btn download-btn-secondary" href={REPO_URL} target="_blank" rel="noreferrer">
              Visit GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
