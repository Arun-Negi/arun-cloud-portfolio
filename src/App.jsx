import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Cloud, Code2, GitBranch, Mail, MapPin,
  FileText, Linkedin, Github, ShieldCheck, Workflow, Server, Terminal,
  GraduationCap, BadgeCheck, Menu
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
  ['Microsoft', 'DevOps Engineer Expert (AZ-400)', 'Jun 2022'],
  ['Microsoft', 'Azure Developer Associate (AZ-204)', 'Mar 2021'],
  ['Microsoft', 'Azure AI Fundamentals (AI-900)', 'May 2021'],
  ['Microsoft', 'Azure Data Fundamentals (DP-900)', 'May 2021'],
  ['KodeKloud', 'Kubernetes for the Absolute Beginners', 'Sep 2024'],
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
        <div className={`company-logo ${job.company.toLowerCase()}-logo`} aria-label={`${job.company} company logo`}>
          {!logoFailed && <img src={job.logo} alt={job.logoAlt} loading="lazy" onError={() => setLogoFailed(true)} />}
          {logoFailed && <span>{job.company === 'Kenvue' ? 'K' : 'insight'}</span>}
        </div>
        <div><h3>{job.company}</h3><p className="job-role">{job.role}</p></div>
      </div><div className="job-dates">{job.current && <span className="current-tag"><span className="status-dot" /> Current</span>}<span>{job.dates}</span></div></div>
      <p className="job-location">{job.location}</p>
      <div className="achievement-heading"><span>KEY CONTRIBUTIONS</span><button type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded}>{expanded ? 'Hide details' : 'Show details'} <span>{expanded ? '−' : '+'}</span></button></div>
      {expanded && <ul className="achievement-list">{job.points.map(point => <li key={point}>{point}</li>)}</ul>}
    </div>
  </article></Reveal>;
}

export default function App() {
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
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#credentials">Credentials</a>
      </nav>
      <a className="header-cta" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> CLOUD & INFRASTRUCTURE ENGINEER</div>
          <h1>Building reliable cloud systems.<br /><span>Making infrastructure work smarter.</span></h1>
          <p className="hero-lede">I’m Arun — a Senior Engineer focused on Azure infrastructure, automation, migrations and cloud cost optimization.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <FileText size={16} /></a>
            <a className="button button-secondary" href="https://github.com/Arun-Negi/resume" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15} /> Bengaluru, India</span><span><ShieldCheck size={15} /> Azure · Terraform · Automation</span></div>
        </div>
        <div className="hero-visual" aria-label="Cloud infrastructure illustration">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="cloud-core"><Cloud size={54} strokeWidth={1.4} /><span>AZURE</span></div>
          <div className="float-card card-terraform"><GitBranch size={17} /><span><b>Terraform</b><small>Infrastructure as code</small></span></div>
          <div className="float-card card-automation"><Workflow size={17} /><span><b>Automation</b><small>Repeatable workflows</small></span></div>
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

      <section className="skills-section" id="skills"><div className="section-wrap content-section">
        <Reveal><SectionHeading eyebrow="TOOLKIT" title="Technical skills" note="Tools and platforms used across infrastructure, automation, delivery and cloud operations." /></Reveal>
        <div className="skills-grid">{skills.map(({ title, icon: Icon, items }, index) => <Reveal key={title} className="skill-reveal"><article className="skill-card"><div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div>
      </div></section>

      <section className="section-wrap content-section credentials-section" id="credentials">
        <Reveal><SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications & education" note="Cloud, DevOps and foundational data/AI learning." /></Reveal>
        <div className="credentials-layout"><div className="cert-list">{certifications.map(([issuer, title, date]) => <Reveal key={title}><div className="cert-row"><span className="cert-icon"><BadgeCheck size={18} /></span><div className="cert-copy"><span className="cert-issuer">{issuer}</span><h3>{title}</h3></div><span className="cert-date">{date}</span></div></Reveal>)}</div>
          <Reveal><aside className="education-card"><span className="education-icon"><GraduationCap size={22} /></span><span className="eyebrow">EDUCATION</span><h3>B.Tech (Hons.), Computer Science — Cloud Computing</h3><p>Graphic Era Hill University</p><span className="education-location">Dehradun, Uttarakhand, India</span></aside></Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><Reveal><div><span className="eyebrow">GET IN TOUCH</span><h2>Let’s build something<br /><span>reliable together.</span></h2><p>For cloud infrastructure, automation and engineering conversations, feel free to connect.</p></div></Reveal><Reveal><div className="contact-links"><a href="mailto:heyarunnegi@gmail.com"><span className="contact-link-icon"><Mail size={18} /></span><span><small>Email</small><b>heyarunnegi@gmail.com</b></span><ArrowUpRight size={17} /></a><a href="https://linkedin.com/in/aroonnegi" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={18} /></span><span><small>LinkedIn</small><b>linkedin.com/in/aroonnegi</b></span><ArrowUpRight size={17} /></a><a href="https://github.com/Arun-Negi/resume" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={18} /></span><span><small>GitHub</small><b>github.com/Arun-Negi/resume</b></span><ArrowUpRight size={17} /></a></div></Reveal></div></section>
    </main>
    <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark" href="#home"><span className="wordmark-mark">A</span><span>Arun Negi<span className="wordmark-dot">.</span></span></a><span>Cloud infrastructure · Automation · Continuous improvement</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </>;
}
