'use client';

  import { useEffect, useState, MouseEvent } from 'react';
  import Image from 'next/image';

  const stats = [
    { label: 'Annotations delivered', value: '850K+' },
    { label: 'Accuracy rate', value: '99.7%' },
    { label: 'Avg. turnaround', value: '48h' },
    { label: 'Enterprise clients', value: '12+' },
  ];

  const services = [
    {
      key: 'cv',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="9" cy="9" r="2" />
          <path d="M5 19 14 10l5 5" />
        </svg>
      ),
      title: 'Computer vision',
      body: 'Labels for images and video. We do boxes, polygons, keypoints, masks, and frame-by-frame tracking.',
      tags: ['Bounding boxes', 'Polygons', 'Keypoints', 'Segmentation', 'Video tracking'],
    },
    {
      key: 'nlp',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5l-3.5 3.5A1 1 0 0 1 8 19v-3H6a2 2 0 0 1-2-2Z" />
        </svg>
      ),
      title: 'Natural language',
      body: 'Text labeling for NER, classification, sentiment, and LLM fine-tuning (RLHF, instruction data).',
      tags: ['NER', 'Classification', 'Sentiment', 'RLHF', 'Instruction tuning'],
    },
    {
      key: 'custom',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />
          <path d="M4 16a3 3 0 0 1 3-3h3" />
          <path d="M10 22v-5l2.5 1.5L15 14v8" />
        </svg>
      ),
      title: 'Custom workflows',
      body: "Need something specific? We'll work with you to define the schema, handle edge cases, and iterate.",
      tags: ['Schema design', 'Red teaming', 'Edge cases', 'Multi-modal'],
    },
  ];

  const steps = [
    {
      title: 'Scope',
      body: 'You tell us what you need labeled and how.',
    },
    {
      title: 'Test',
      body: 'We do a small batch to make sure we are aligned.',
    },
    {
      title: 'Label',
      body: 'Our team annotates the full dataset.',
    },
    {
      title: 'Review',
      body: 'QA checks everything before delivery.',
    },
    {
      title: 'Deliver',
      body: 'You get labeled data in your format.',
    },
  ];

  const models = [
    {
      status: 'Active development',
      pill: 'Internal research',
      title: 'Farm Probability Model',
      body: 'Predicts crop yields for coffee farms based on soil, weather, and farming practices.',
      bullets: [
        'Soil metrics, weather patterns, farm practices',
        'Yield probability plus simple recommendations',
      ],
    },
    {
      status: 'Beta testing',
      pill: 'Internal research',
      title: 'Healthy Person Model',
      body: 'Estimates health risk probabilities from lab results and lifestyle data.',
      bullets: [
        'Lab work, supplementation, lifestyle data',
        'Risk indicator probability scoring',
      ],
    },
    {
      status: 'Research phase',
      pill: 'Internal research',
      title: 'GakuGen Model',
      body: 'Experimental model for predicting price movements in crypto and commodity markets.',
      bullets: [
        'Market data, on-chain metrics, sentiment',
        'Directional probability distributions',
      ],
    },
  ];

  const examples = [
    {
      title: 'Image',
      label: 'Car / person / sign',
      text: 'Draw boxes around pedestrians and traffic signs.',
    },
    {
      title: 'Text',
      label: 'Intent / sentiment',
      text: 'Tag support tickets by topic and urgency.',
    },
    {
      title: 'LLM',
      label: 'Ranking',
      text: 'Rank model outputs from best to worst.',
    },
  ];

  export default function HomePage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [annotationHovered, setAnnotationHovered] = useState(false);
    const [activeServiceKey, setActiveServiceKey] = useState(services[0].key);

    useEffect(() => {
      const nav = document.getElementById('nav');
      if (!nav) return;

      const handleScroll = () => {
        if (window.scrollY > 24) {
          nav.classList.add('nav-scrolled');
        } else {
          nav.classList.remove('nav-scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.12 }
      );

      revealEls.forEach(el => observer.observe(el));

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }, []);

    const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    };

    const currentService =
      services.find(s => s.key === activeServiceKey) ?? services[0];

    return (
      <div className="page">
        {/* Navigation */}
        <header id="nav" className="nav">
          <div className="nav-inner container">
            <a href="#top" className="brand" onClick={e => scrollTo(e, '#top')}>
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-text">
                <span className="brand-name">Auxerta</span>
                <span className="brand-tagline">Enterprise data annotation</span>
              </span>
            </a>

            <nav className={`nav-links ${mobileOpen ? 'nav-links-open' : ''}`}>
              <a href="#services" onClick={e => scrollTo(e, '#services')}>
                Services
              </a>
              <a href="#process" onClick={e => scrollTo(e, '#process')}>
                Process
              </a>
              <a href="#pricing" onClick={e => scrollTo(e, '#pricing')}>
                Pricing
              </a>
              <a href="#research" onClick={e => scrollTo(e, '#research')}>
                Research
              </a>
              <a
                href="#contact"
                className="nav-cta"
                onClick={e => scrollTo(e, '#contact')}
              >
                Get started
              </a>
            </nav>

            <button
              className="nav-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen(v => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="section hero">
            <div className="hero-bg" />
            <div className="hero-glow" />
            <div className="container hero-grid" data-reveal>
              <div className="hero-left">
                <p className="hero-kicker">Now accepting enterprise clients</p>
                <h1>Data annotation for ML teams</h1>
                <p className="hero-lead">
                  We label your training data for computer vision, text, and LLMs. Senior annotators, clear guidelines, and fast turnaround.
                </p>
                <div className="hero-actions">
                  <a
                    href="#contact"
                    className="btn btn-primary btn-primary-animated"
                    onClick={e => scrollTo(e, '#contact')}
                  >
                    Start a project
                  </a>
                  <a
                    href="#process"
                    className="btn btn-outline"
                    onClick={e => scrollTo(e, '#process')}
                  >
                    See how it works
                  </a>
                </div>
              </div>
              <aside className="hero-right">
                <div className="stats" aria-label="Key stats">
                  {stats.map((s, i) => (
                    <div className={`stat float-soft float-soft-${i + 1}`} key={s.label}>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div
                  className={`hero-annotation ${annotationHovered ? 'hero-annotation-hovered' : ''}`}
                  onMouseEnter={() => setAnnotationHovered(true)}
                  onMouseLeave={() => setAnnotationHovered(false)}
                >
                  <div className="hero-annotation-header">
                    <span className="hero-annotation-title">Annotation preview</span>
                  </div>
                  <div className="hero-annotation-body">
                    <div className="hero-annotation-image">
                      <div className="hero-layers">
                      </div>
                      <div className="hero-box hero-box-primary" />
                      <div className="hero-box hero-box-secondary" />
                      <div className="hero-flow hero-flow-top" />
                      <div className="hero-flow hero-flow-bottom" />
                    </div>
                    <div className="hero-annotation-tokens">
                      <span className="token token-intent">intent: refund</span>
                      <span className="token token-sentiment">sentiment: negative</span>
                      <span className="token token-priority">priority: high</span>
                    </div>
                    <pre className="hero-json">
{`{
  "id": "sample-001",
  "labels": ["car", "person"],
  "intent": "refund",
  "sentiment": "negative",
  "priority": "high",
  "reviewed": true
}`}
                      <span className="hero-caret" />
                    </pre>
                  </div>
                </div>
              </aside>
            </div>

            <div className="container logos" data-reveal>
              <p className="logos-label">Trusted by ML teams at</p>
              <div className="logos-row float-soft-alt">
                <Image
                  src="/snorkel_logo_header-1.png"
                  alt="Snorkel AI"
                  width={190}
                  height={60}
                  className="logos-img"
                />
                <Image
                  src="/logo-full.png"
                  alt="Mercor"
                  width={220}
                  height={64}
                  className="logos-img"
                />
                <Image
                  src="/meta-logo.webp"
                  alt="Meta"
                  width={140}
                  height={48}
                  className="logos-img"
                />
              </div>
            </div>

            {/* Example tasks strip */}
            <div className="section section-examples">
              <div className="container" data-reveal>
                <div className="examples-header">
                  <p className="eyebrow">Examples</p>
                  <h2>Typical annotation tasks</h2>
                  <p className="section-copy">
                    Simple, concrete tasks that ML engineers send us every day.
                  </p>
                </div>
                <div className="examples-row">
                  {examples.map(example => (
                    <div className="example-card hover-lift" key={example.title}>
                      <div className="example-tag">{example.title}</div>
                      <div className="example-label">{example.label}</div>
                      <p className="example-text">{example.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="section">
            <div className="container" data-reveal>
              <header className="section-header">
                <div>
                  <p className="eyebrow">Services</p>
                  <h2>What we do</h2>
                </div>
                <p className="section-copy">
                  Image labeling, text annotation, and custom workflows. We work with your schema or help you build one.
                </p>
              </header>

              <div className="service-layout">
                <div className="service-tabs" aria-label="Annotation services">
                  {services.map(s => (
                    <button
                      key={s.key}
                      className={`service-tab ${
                        activeServiceKey === s.key ? 'service-tab-active' : ''
                      }`}
                      type="button"
                      onClick={() => setActiveServiceKey(s.key)}
                    >
                      <span className="service-icon">{s.icon}</span>
                      <span>{s.title}</span>
                    </button>
                  ))}
                </div>
                <article className="card service-detail hover-lift">
                  <h3>{currentService.title}</h3>
                  <p>{currentService.body}</p>
                  <div className="tag-row">
                    {currentService.tags.map(tag => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="process" className="section section-alt">
            <div className="container" data-reveal>
              <header className="section-header">
                <div>
                  <p className="eyebrow">Process</p>
                  <h2>How it works</h2>
                </div>
                <p className="section-copy">
                  You send us data and guidelines. We return labeled data with a simple, documented pipeline.
                </p>
              </header>

              <ol className="timeline">
                {steps.map((step, index) => (
                  <li key={step.title} className="timeline-item">
                    <div className="timeline-badge">{index + 1}</div>
                    <div className="timeline-body">
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="section">
            <div className="container" data-reveal>
              <header className="section-header">
                <div>
                  <p className="eyebrow">Engagement models</p>
                  <h2>How we work</h2>
                </div>
                <p className="section-copy">
                  Two options depending on what you need. Pricing depends on volume and complexity.
                </p>
              </header>

              <div className="pricing-grid">
                <article className="card hover-lift">
                  <p className="eyebrow">Managed services</p>
                  <h3>Per-annotation</h3>
                  <p className="price-line">Starting at $0.08/annotation</p>
                  <ul className="feature-list">
                    <li>End-to-end project management</li>
                    <li>Dedicated QA team</li>
                    <li>Fast standard delivery</li>
                    <li>Documented audit trail</li>
                    <li>Volume discounts available</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-ghost"
                    onClick={e => scrollTo(e, '#contact')}
                  >
                    Get a quote
                  </a>
                </article>

                <article className="card card-highlight hover-lift">
                  <p className="pill-inline">Most popular</p>
                  <p className="eyebrow">Embedded teams</p>
                  <h3>Ongoing annotation</h3>
                  <p className="price-line">Custom pricing / month</p>
                  <ul className="feature-list">
                    <li>Dedicated annotators in your workflow</li>
                    <li>Direct Slack or Teams integration</li>
                    <li>Uses your tools and governance</li>
                    <li>Priority SLA (same-day available)</li>
                    <li>Weekly check-in and planning</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-primary btn-primary-animated"
                    onClick={e => scrollTo(e, '#contact')}
                  >
                    Talk to sales
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* Research */}
          <section id="research" className="section section-alt">
            <div className="container" data-reveal>
              <header className="section-header">
                <div>
                  <p className="eyebrow">Research</p>
                  <h2>Internal models</h2>
                </div>
                <p className="section-copy">
                  We also build our own models in specific verticals. These are internal projects, not client work.
                </p>
              </header>

              <div className="cards-grid">
                {models.map(model => (
                  <article key={model.title} className="card hover-lift">
                    <div className="model-header">
                      <span className="pill-soft">{model.pill}</span>
                      <span className="model-status">{model.status}</span>
                    </div>
                    <h3>{model.title}</h3>
                    <p>{model.body}</p>
                    <ul className="model-list">
                      {model.bullets.map(b => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section">
            <div className="container" data-reveal>
              <header className="section-header">
                <div>
                  <p className="eyebrow">Contact</p>
                  <h2>Want to work together?</h2>
                </div>
                <p className="section-copy">
                  Email us with what you need labeled, how much, and when you need it. We usually reply within a day.
                </p>
              </header>

              <div className="contact hover-lift">
                <div>
                  <p className="contact-label">Email</p>
                  <a
                    href="mailto:partner@auxerta.com?subject=Project%20inquiry"
                    className="contact-email"
                  >
                    partner@auxerta.com
                  </a>
                  <p className="contact-note">
                    Include a short description of your use case, data volume, and timing.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand-block">
              <span className="footer-brand">Auxerta</span>
              <span className="footer-tagline">Enterprise data annotation.</span>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Services</h4>
                <a href="#services">Computer vision</a>
                <a href="#services">Natural language</a>
                <a href="#services">Custom workflows</a>
                <a href="#pricing">Pricing</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#research">Research</a>
                <a href="#contact">Contact</a>
                <span>Careers</span>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <span>Documentation</span>
                <span>API reference</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container footer-bottom-inner">
              <span>© {new Date().getFullYear()} Auxerta Inc. All rights reserved.</span>
              <div className="footer-links">
                <a href="/privacy">Privacy</a>
                <a href="/terms-of-service">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
