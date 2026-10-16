import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  ArrowDownRight, ArrowUpRight, Cloud, Code2, GitBranch, Mail, MapPin,
  FileText, Linkedin, Github, ShieldCheck, Workflow, Server, Terminal,
  GraduationCap, BadgeCheck, Menu, Sun, Moon, Monitor
} from 'lucide-react';

const skills = [
  { title: 'Azure infrastructure & security', icon: Cloud, items: ['Networking', 'Key Vault', 'Managed Identities', 'RBAC', 'Azure Policy', 'Storage', 'IaaS / PaaS', 'Azure Migrate'] },
  { title: 'Infrastructure & DevOps', icon: GitBranch, items: ['Terraform', 'ARM templates', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Git', 'Bitbucket'] },
  { title: 'Automation & development', icon: Code2, items: ['Python', 'PowerShell', 'JSON', 'Azure REST API', 'Azure Automation', 'BDD'] },
  { title: 'Integration & compute', icon: Server, items: ['Service Bus', 'Event Hubs', 'Azure Functions', 'Linux', 'Windows', 'Limited AWS exposure'] },
];

const experience = [
  {
    company: 'Kenvue', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Kenvue_logo.svg', logoAlt: 'Kenvue logo', role: 'Senior Engineer — Cloud & Infrastructure', dates: 'Sep 2024 — Present', location: 'Bengaluru, Karnataka, India', current: true,
    points: [
      'Contributed to the CloudX-to-KCloud migration, which delivered USD 1.5 million in project savings.',
      'Independently delivered cloud optimization that generated USD 136,000 in savings.',
      'Led application migrations from VMware Cloud and AWS to Azure, plus legacy-to-modern Azure transitions; used Azure Migrate for server discovery, replication and lift-and-shift deployments.',
      'Resolved networking issues during migration and application reconfiguration, adapting connectivity to differences between legacy and new network architectures.',
      'Developed reusable Terraform modules and cloud automations for whitelisted services, automating service enablement and infrastructure provisioning within restricted environments.',
      'Migrated code from Bitbucket to GitHub; coordinated architecture reviews, migration planning and progress updates with application owners and cross-functional teams.'
    ]
  },
  {
    company: 'Insight', logo: 'https://companieslogo.com/img/orig/NSIT_BIG-c5941e6f.svg', logoAlt: 'Insight Enterprises logo', role: 'Cloud Engineer II', dates: 'Sep 2021 — Aug 2024', location: 'Noida, Uttar Pradesh, India · Key project: Johnson & Johnson', current: false,
    points: [
      'Automated Azure workflows with Python and PowerShell, improving operational efficiency by 98% while reducing manual provisioning effort and errors.',
      'Built event-driven Azure Functions using Python and Azure REST API, reducing manual tasks by 40% and improving overall operational efficiency by 25%.',
      'Developed Azure Automation runbooks for IaaS and RBAC across 600+ subscriptions; engineered cost-management solutions across multiple Azure services.',
      'Implemented Jenkins CI/CD pipelines and Python BDD tests for service whitelisting; designed Azure policies and service architectures to support governance and GxP compliance.',
      'Delivered proofs of concept for Azure Data Share, Functions and Storage; maintained technical documentation and mentored team members on Azure policies and best practices.'
    ]
  }
];

const certifications = [
  ['Microsoft', 'DevOps Engineer Expert (AZ-400)', 'Jun 2022', 'https://www.credly.com/badges/401859a5-ae37-49c1-98d7-4c178d0a4c64/public_url'],
  ['Microsoft', 'Azure Developer Associate (AZ-204)', 'Mar 2021', 'https://www.credly.com/badges/defb9e64-da34-4571-b598-17a83e33c30b/public_url'],
  ['Microsoft', 'Azure AI Fundamentals (AI-900)', 'May 2021', 'https://www.credly.com/badges/20f01493-b8b3-423d-a8db-32f4aeb777c1/public_url'],
  ['Microsoft', 'Azure Data Fundamentals (DP-900)', '', 'https://www.credly.com/badges/4d204e8b-f4e7-48f7-b140-1a6175e09047/public_url'],
  ['KodeKloud', 'Kubernetes for the Absolute Beginners', 'Sep 2024', 'https://drive.google.com/file/d/1I4fsPmLCRbHQSKOZrXOsT0miBjGrvQW2/view?usp=share_link'],
];

function Reveal({ children, className = '' }) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>;
}

function ExperienceCard({ job, index }) {
  const [expanded, setExpanded] = useState(true);
  const [logoFailed, setLogoFailed] = useState(false);
  return <Reveal className="timeline-reveal"><article className={`job-card ${job.current ? 'job-card-current' : ''}`}>
    <div className="job-index">0{index + 1}</div><div className="job-main">
      <div className="job-topline"><div className="job-company-wrap">
        <a className={`company-logo ${job.company.toLowerCase()}-logo`} href={job.company === 'Kenvue' ? 'https://www.kenvue.com/' : 'https://www.insight.com/'} target="_blank" rel="noreferrer" aria-label={`Visit ${job.company} website`} title={`Visit ${job.company} website`}>
          {!logoFailed && <img src={job.logo} alt={job.logoAlt} loading="lazy" onError={() => setLogoFailed(true)} />}
          {logoFailed && <span aria-hidden="true">{job.company === 'Kenvue' ? 'K' : 'insight'}</span>}
        </a>
        <div><p className="job-role">{job.role}</p></div>
      </div><div className="job-dates">{job.current && <span className="current-tag"><span className="status-dot" /> Current</span>}<span>{job.dates}</span></div></div>
      <p className="job-location">{job.location}</p>
      <div className="achievement-heading"><span>KEY CONTRIBUTIONS</span><button type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded}>{expanded ? 'Hide details' : 'Show details'} <span>{expanded ? '−' : '+'}</span></button></div>
      {expanded && <ul className="achievement-list">{job.points.map(point => <li key={point}>{point}</li>)}</ul>}
    </div>
  </article></Reveal>;
}

export default function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePreference, setThemePreference] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'system'; }
    catch { return 'system'; }
  });

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const resolved = themePreference === 'system' ? (media.matches ? 'dark' : 'light') : themePreference;
      root.dataset.theme = resolved;
      root.style.colorScheme = resolved;
    };
    applyTheme();
    try { localStorage.setItem('portfolio-theme', themePreference); } catch {}
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', applyTheme);
      return () => media.removeEventListener('change', applyTheme);
    }
    media.addListener(applyTheme);
    return () => media.removeListener(applyTheme);
  }, [themePreference]);
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = event => {
      const id = event.currentTarget.getAttribute('href');
      const target = id && document.querySelector(id);
      if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };
    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  return <>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Arun Negi home"><span className="wordmark-mark">A</span><span>Arun Negi<span className="wordmark-dot">.</span></span></a>
      <button className="mobile-menu-toggle" type="button" onClick={() => setMobileMenuOpen(value => !value)} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} aria-controls="primary-navigation"><Menu size={20} /></button>
      <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a><a href="#credentials" onClick={() => setMobileMenuOpen(false)}>Credentials</a><a className="mobile-contact-link" href="#contact" onClick={() => setMobileMenuOpen(false)}>Let’s connect <ArrowUpRight size={15} /></a>
      </nav>
      <div className="header-actions">
        <div className="theme-switch" role="group" aria-label="Color theme">
          <button type="button" className={themePreference === 'light' ? 'theme-option is-active' : 'theme-option'} onClick={() => setThemePreference('light')} aria-label="Light theme" aria-pressed={themePreference === 'light'} title="Light"><Sun size={15} /></button>
          <button type="button" className={themePreference === 'dark' ? 'theme-option is-active' : 'theme-option'} onClick={() => setThemePreference('dark')} aria-label="Dark theme" aria-pressed={themePreference === 'dark'} title="Dark"><Moon size={15} /></button>
          <button type="button" className={themePreference === 'system' ? 'theme-option is-active' : 'theme-option'} onClick={() => setThemePreference('system')} aria-label="Use system theme" aria-pressed={themePreference === 'system'} title="System"><Monitor size={15} /></button>
        </div>
        <a className="header-cta" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> CLOUD & INFRASTRUCTURE ENGINEER</div>
          <h1>Building reliable cloud systems.<br /><span>Making infrastructure work smarter.</span></h1>
          <p className="hero-lede">I’m Arun — a Senior Engineer focused on Azure infrastructure, automation, migrations and cloud cost optimization.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <FileText size={16} /></a>
            <a className="button button-secondary" href="https://github.com/Arun-Negi" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15} /> Bengaluru, India</span><span><ShieldCheck size={15} /> Azure · Terraform · Automation</span></div>
        </div>
        <div className="hero-visual" aria-label="Cloud infrastructure illustration">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="cloud-core"><svg className="azure-logo" viewBox="0 0 64 64" role="img" aria-label="Microsoft Azure logo"><path d="M25 5h17L17 54H2L25 5Z" fill="currentColor"/><path d="M43 5 62 54H27l9-13h8L31 23 43 5Z" fill="currentColor" opacity=".78"/></svg><span>AZURE</span></div>
          <div className="float-card card-terraform"><svg className="terraform-logo" viewBox="0 0 32 32" role="img" aria-label="Terraform logo"><path fill="currentColor" d="M3 2 13 8v11L3 13V2Zm13 7 10 6v11l-10-6V9Zm0-14 10 6v11L16 6V-5Z" transform="translate(0 7)"/><path fill="currentColor" d="M16 23 26 29v-8l-10-6v8Z" opacity=".72"/></svg><span><b>Terraform</b><small>Infrastructure as code</small></span></div>
          <div className="float-card card-automation"><Workflow className="automation-logo" size={20} strokeWidth={1.8} /><span><b>Automation</b><small>Repeatable workflows</small></span></div>
          <div className="float-card card-security"><ShieldCheck size={17} /><span><b>Governance</b><small>Secure by design</small></span></div>
          <div className="visual-caption">DESIGN · AUTOMATE · OPTIMIZE</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
      </section>

      <section className="impact-band" id="about">
        <div className="section-wrap impact-grid">
          <Reveal><div className="impact-intro"><span className="eyebrow">AT A GLANCE</span><h2>Engineering outcomes,<br />not just infrastructure.</h2><p>Practical cloud engineering with a focus on efficiency, governance and measurable impact.</p></div></Reveal>
          <Reveal><div className="impact-stat"><span className="stat-value">$1.5M</span><span className="stat-label">Project savings</span><p>Contributed to the CloudX-to-KCloud migration.</p></div></Reveal>
          <Reveal><div className="impact-stat"><span className="stat-value">$136K</span><span className="stat-label">Cloud optimization</span><p>Independently delivered cost savings.</p></div></Reveal>
          <Reveal><div className="impact-stat"><span className="stat-value">600<span>+</span></span><span className="stat-label">Subscriptions</span><p>Azure Automation runbooks for IaaS and RBAC.</p></div></Reveal>
        </div>
        <p className="impact-footnote">Figures reflect contributions and achievements described in my resume.</p>
      </section>

      <section className="section-wrap content-section" id="experience">
        <Reveal><SectionHeading eyebrow="CAREER JOURNEY" title="Experience" note="Cloud engineering across enterprise environments, from automation and governance to large-scale migration." /></Reveal>
        <div className="timeline">
          {experience.map((job, index) => <ExperienceCard key={job.company} job={job} index={index} />)}
        </div>
      </section>

      <section className="projects-showcase" id="projects"><div className="section-wrap content-section projects-section">
        <Reveal><SectionHeading eyebrow="SELECTED WORK" title="Featured projects" note="Practical projects focused on repeatable Azure infrastructure, policy-driven provisioning and a simpler developer experience." /></Reveal>
        <div className="projects-grid">
          <Reveal className="project-reveal"><article className="project-card project-card-featured">
            <div className="project-card-top"><span className="project-icon"><Cloud size={22} /></span><span className="project-kicker">01 / INFRASTRUCTURE</span></div>
            <h3>Azure Terraform Infrastructure Platform</h3>
            <p>A guardrail-first Azure infrastructure platform that validates requests early and standardizes how teams provision compliant resources.</p>
            <div className="project-tags"><span>Azure</span><span>Terraform</span><span>GitHub Actions</span><span>Policy & validation</span></div>
            <div className="project-hover-details">
              <span className="project-detail-label">THE ENGINEERING IDEA</span>
              <p>Make the safe path the easy path: catch invalid configuration before Terraform reaches apply, rather than discovering avoidable errors at the end of a deployment.</p>
              <ul>
                <li><ShieldCheck size={15} /><span><b>Governance guardrails</b> — reusable modules designed to apply organizational standards, with Azure Policy as a complementary compliance layer.</span></li>
                <li><Code2 size={15} /><span><b>Shift-left validation</b> — readable JSON inputs, service-specific schemas, naming rules and resource constraints catch mistakes early.</span></li>
                <li><Workflow size={15} /><span><b>Controlled delivery</b> — automated formatting, validation and plan/review workflows help teams inspect changes before approved deployment.</span></li>
              </ul>
              <span className="project-detail-outcome">GOAL · Fewer late-stage failures, clearer feedback, consistent infrastructure</span>
            </div>
            <div className="project-links"><a href="https://github.com/Arun-Negi/azure-terraform-infrastructure-platform" target="_blank" rel="noreferrer">View source code <ArrowUpRight size={15} /></a></div>
          </article></Reveal>
          <Reveal className="project-reveal"><article className="project-card">
            <div className="project-card-top"><span className="project-icon"><Workflow size={22} /></span><span className="project-kicker">02 / SELF-SERVICE PORTAL</span></div>
            <h3>Terraform Infrastructure Portal</h3>
            <p>A self-service interface for creating clearer Azure infrastructure requests without asking every user to hand-author complex Terraform inputs.</p>
            <div className="project-tags"><span>Next.js</span><span>TypeScript</span><span>Terraform</span><span>Vercel</span></div>
            <div className="project-hover-details">
              <span className="project-detail-label">THE DEVELOPER EXPERIENCE</span>
              <p>Make infrastructure requests approachable through a guided UI while keeping changes reviewable and deployment separate from the request itself.</p>
              <ul>
                <li><Code2 size={15} /><span><b>Guided inputs</b> — dynamic forms and readable JSON help users express the resources they need.</span></li>
                <li><ShieldCheck size={15} /><span><b>Validation first</b> — surface configuration issues early and align requests with the platform's service schemas and naming standards.</span></li>
                <li><GitBranch size={15} /><span><b>Review before change</b> — GitHub-based change management and approvals support a deliberate infrastructure workflow.</span></li>
              </ul>
              <span className="project-detail-outcome">GOAL · A simpler request flow without bypassing governance</span>
            </div>
            <div className="project-links"><a href="https://terraform-infrastructure-portal-1cp.vercel.app" target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a><a href="https://github.com/Arun-Negi/azure-terraform-infrastructure-portal" target="_blank" rel="noreferrer">View source code <ArrowUpRight size={15} /></a></div>
          </article></Reveal>
        </div>
        </div>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap content-section">
        <Reveal><SectionHeading eyebrow="TOOLKIT" title="Technical skills" note="Tools and platforms used across infrastructure, automation, delivery and cloud operations." /></Reveal>
        <div className="skills-grid">{skills.map(({ title, icon: Icon, items }, index) => <Reveal key={title} className="skill-reveal"><article className="skill-card"><div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div>
      </div></section>

      <section className="section-wrap content-section credentials-section" id="credentials">
        <Reveal><SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications & education" note="Cloud, DevOps and foundational data/AI learning." /></Reveal>
        <div className="credentials-layout"><div className="cert-list">{certifications.map(([issuer, title, date, url]) => <Reveal key={title}><a className="cert-row cert-row-link" href={url} target="_blank" rel="noreferrer" aria-label={`Open ${issuer} certification: ${title}`}><span className="cert-icon"><BadgeCheck size={18} /></span><div className="cert-copy"><span className="cert-issuer">{issuer}</span><h3>{title}</h3></div>{date && <span className="cert-date">{date}</span>}<ArrowUpRight className="cert-link-arrow" size={16} /></a></Reveal>)}</div>
          <Reveal><aside className="education-card"><span className="education-icon"><GraduationCap size={22} /></span><span className="eyebrow">EDUCATION</span><h3>B.Tech (Hons.), Computer Science — Cloud Computing</h3><p>Graphic Era Hill University</p><span className="education-location">Dehradun, Uttarakhand, India</span></aside></Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><Reveal><div><span className="eyebrow">GET IN TOUCH</span><h2>Let’s build something<br /><span>reliable together.</span></h2><p>For cloud infrastructure, automation and engineering conversations, feel free to connect.</p></div></Reveal><Reveal><div className="contact-links"><a href="mailto:heyarunnegi@gmail.com"><span className="contact-link-icon contact-email"><svg viewBox="0 0 48 48" role="img" aria-label="Gmail"><path fill="#4285F4" d="M6 12.5A4.5 4.5 0 0 1 13.2 9L24 17.1 34.8 9a4.5 4.5 0 0 1 7.2 3.5v23a4.5 4.5 0 0 1-4.5 4.5H35V17.3L24 25.5 13 17.3V40h-2.5A4.5 4.5 0 0 1 6 35.5v-23Z"/><path fill="#34A853" d="M6 14.2 13 19.5V40h-2.5A4.5 4.5 0 0 1 6 35.5V14.2Z"/><path fill="#FBBC04" d="M35 19.5 42 14.2v21.3a4.5 4.5 0 0 1-4.5 4.5H35V19.5Z"/><path fill="#EA4335" d="M6 12.5A4.5 4.5 0 0 1 13.2 9L24 17.1 34.8 9a4.5 4.5 0 0 1 7.2 3.5v1.7l-18 13.6L6 14.2v-1.7Z"/></svg></span><span><small>Email</small><b>heyarunnegi@gmail.com</b></span><ArrowUpRight size={17} /></a><a href="https://linkedin.com/in/aroonnegi" target="_blank" rel="noreferrer"><span className="contact-link-icon contact-linkedin"><svg viewBox="0 0 48 48" role="img" aria-label="LinkedIn"><path fill="currentColor" d="M9.2 17.5h7.1V39H9.2V17.5Zm3.6-10.7a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2ZM20.7 17.5h6.8v2.9h.1c.9-1.7 3.2-3.5 6.6-3.5 7.1 0 8.4 4.7 8.4 10.8V39h-7.1V28.9c0-2.4 0-5.5-3.4-5.5s-3.9 2.6-3.9 5.3V39h-7.1V17.5Z"/></svg></span><span><small>LinkedIn</small><b>linkedin.com/in/aroonnegi</b></span><ArrowUpRight size={17} /></a><a href="https://github.com/Arun-Negi" target="_blank" rel="noreferrer"><span className="contact-link-icon contact-github"><svg viewBox="0 0 24 24" role="img" aria-label="GitHub"><path fill="currentColor" d="M12 .297a12 12 0 0 0-3.797 23.4c.6.111.82-.258.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.006 0c2.292-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.216.694.825.576A12.003 12.003 0 0 0 12 .297Z"/></svg></span><span><small>GitHub</small><b>github.com/Arun-Negi</b></span><ArrowUpRight size={17} /></a></div></Reveal></div></section>
    </main>
    <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark" href="#home"><span className="wordmark-mark">A</span><span>Arun Negi<span className="wordmark-dot">.</span></span></a><span>Cloud infrastructure · Automation · Continuous improvement</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
    <Analytics />
  </>;
}
