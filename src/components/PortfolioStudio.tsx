import { ArrowDownRight, ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import CommandPalette from '@/components/CommandPalette';
import KnowledgeGraph from '@/components/KnowledgeGraph';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { interestsMap } from '@/lib/data/knowledgeMaps';
import { achievements, experiences } from '@/lib/data/experience';
import { projects, wikiCrawl } from '@/lib/data/projects';
import { currentResearchTransmission, publications, researchDirections } from '@/lib/data/research';
import { skills } from '@/lib/data/skills';

const storyProjects = [
  {
    id: 'legal-tesseract',
    number: '02',
    category: 'DOCUMENT INTELLIGENCE',
    name: 'Tesseract',
    title: 'Legal documents, made easier to navigate.',
    problem: 'Legal documents are dense, and important information is hard to access across languages.',
    built: 'An application that extracts document text, summarizes legal content, and supports translation.',
    stack: ['Tesseract OCR', 'Legal-BERT', 'Gemini', 'Flask'],
    href: projects.find((project) => project.id === 'legal-tesseract')?.demo,
    github: projects.find((project) => project.id === 'legal-tesseract')?.github,
    visual: 'document',
  },
  {
    id: 'neuro-tetris',
    number: '03',
    category: 'BRAIN-COMPUTER INTERFACE',
    name: 'EEG × Tetris',
    title: 'A game controlled by neural signals.',
    problem: 'Could EEG patterns reveal whether a player was likely to win or lose?',
    built: 'A BCI gaming prototype that preprocesses EEG, classifies neural patterns, and maps predictions to Tetris interactions.',
    stack: ['OpenBCI', 'BrainFlow', 'Signal processing', 'Python', '80% outcome accuracy'],
    href: projects.find((project) => project.id === 'neuro-tetris')?.youtube,
    visual: 'eeg',
  },
  {
    id: 'pothole-detection',
    number: '04',
    category: 'COMPUTER VISION · EDGE SYSTEMS',
    name: 'Road perception',
    title: 'Spot road damage where it happens.',
    problem: 'Road inspections need a way to connect visual detections with where they occurred.',
    built: 'A YOLOv11 system processing 50,000+ images, with geospatial tagging and dashboards for road-condition monitoring.',
    stack: ['YOLOv9', 'OpenCV', 'Raspberry Pi', 'GPS'],
    href: projects.find((project) => project.id === 'pothole-detection')?.github,
    github: projects.find((project) => project.id === 'pothole-detection')?.github,
    visual: 'road',
  },
];

const capabilityGroups = [
  { id: 'languages', title: 'Languages & foundations', source: 'programming', picks: ['Python', 'SQL', 'C++', 'R', 'Bash', 'Data Structures & Algorithms'] },
  { id: 'intelligence', title: 'Machine learning & AI', source: 'ai-ml', picks: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Generative AI', 'Agentic AI', 'RAG', 'LLM Evaluation'] },
  { id: 'data', title: 'Data & engineering', source: 'data', picks: ['Pandas', 'NumPy', 'PySpark', 'Hadoop', 'ETL', 'Data Pipelines', 'BigQuery', 'Statistical Modeling'] },
  { id: 'platforms', title: 'Cloud & platforms', source: 'infrastructure', picks: ['Google Cloud Platform', 'Azure Databricks', 'Google Agentspace', 'Google AI Studio', 'Docker', 'Flask', 'FastAPI', 'REST APIs', 'CI/CD'] },
  { id: 'specialized', title: 'Research & specialized', source: 'research', picks: ['OCR', 'Image Processing', 'EEG Signal Processing', 'Brain-Computer Interfaces', 'ROS2', 'SLAM'] },
];

const researchStatus: Record<string, string> = {
  active: 'IN FOCUS',
  exploring: 'EXPLORING',
  planned: 'ON THE HORIZON',
};

function ProjectVisual({ visual }: { visual: string }) {
  if (visual === 'document') {
    return <div className="project-art project-art--document" aria-hidden="true"><div className="paper-sheet"><span /><span /><span /><i /><span /><span /><b /></div><div className="paper-note">OCR <ArrowRight size={13} /> MEANING</div></div>;
  }
  if (visual === 'eeg') {
    return <div className="project-art project-art--eeg"><iframe src="https://www.youtube-nocookie.com/embed/4zTdjzhOBEI?rel=0" title="EEG Tetris brain-computer interface project video" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>;
  }
  return <div className="project-art project-art--road" role="img" aria-label="Illustration of a road-damage detection system"><div className="road-horizon" /><div className="road-lane" /><div className="road-detection"><span>DETECTED</span></div><div className="road-coordinate">GPS · EDGE VISION</div></div>;
}

export default function PortfolioStudio() {
  const workExperience = experiences.filter((experience) => experience.type === 'work');
  const featuredAchievements = achievements.filter((achievement) => ['sih-2023', 'best-paper', 'gdsc-lead'].includes(achievement.id));

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Adityavardhan Jain, home">AJ<span>.</span></a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#research">Research</a><a href="#experience">Experience</a><a href="#about">About</a>
        </nav>
        <div className="header-actions">
          <CommandPalette />
          <details className="wikicrawl-launcher">
            <summary aria-label="Open WikiCrawl links" title="WikiCrawl: open project links">
              <Image src={wikiCrawl.favicon} width={42} height={42} unoptimized alt="" />
              <span className="sr-only">WikiCrawl</span>
            </summary>
            <div className="wikicrawl-launcher__menu">
              <span>WIKICRAWL</span>
              <a href={wikiCrawl.live} target="_blank" rel="noreferrer">Open live project <ArrowUpRight size={14} /></a>
              <a href={wikiCrawl.github} target="_blank" rel="noreferrer">View GitHub source <ArrowUpRight size={14} /></a>
            </div>
          </details>
          <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-mark" /> AI / ML <b>·</b> DATA <b>·</b> RESEARCH</p>
            <h1 id="hero-title">Adityavardhan <em>Jain</em></h1>
            <p className="hero-role">AI/ML Engineer <span>·</span> Data Analyst <span>·</span> Researcher</p>
            <p className="hero-statement">I build systems that help machines make sense of data, images, signals, and the world around them.</p>
            <div className="hero-links">
              <a className="button button--dark" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
              <a className="text-link" href="#research">Read my research <ArrowRight size={15} /></a>
              <a className="text-link" href="/Adityavardhan_Jain.pdf" target="_blank" rel="noreferrer">Preview résumé <ArrowUpRight size={14} /></a>
              <a className="text-link" href="/Adityavardhan_Jain.pdf" download>Download PDF <ArrowDownRight size={14} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/Adityavardhanjain" target="_blank" rel="noreferrer"><GithubIcon width={15} height={15} /> GitHub</a>
              <a href="https://linkedin.com/in/adityavardhan-jain/" target="_blank" rel="noreferrer"><LinkedinIcon width={15} height={15} /> LinkedIn</a>
              <span>Based in Hyderabad, India</span>
            </div>
          </div>
          <div className="hero-map"><KnowledgeGraph map={interestsMap} /></div>
          <div className="hero-index" aria-hidden="true">01 — 06<br />FIELD NOTES</div>
        </section>

        <section className="now-section section-wrap" aria-labelledby="now-title">
          <div className="now-heading"><span className="eyebrow">A WORK IN PROGRESS</span><h2 id="now-title">Currently</h2></div>
          <div className="now-grid">
            <article><span>01 / BUILDING</span><h3>Useful intelligence</h3><p>AI-powered software and data systems built to work beyond a demo.</p></article>
            <article><span>02 / RESEARCHING</span><h3>Models of the world</h3><p>Agents, simulation, reasoning, and ways to check what a system believes.</p></article>
            <article><span>03 / EXPLORING</span><h3>Mind & machine</h3><p>Brain-computer interfaces, computational neuroscience, and multimodal systems.</p></article>
            <article><span>04 / WORKING</span><h3>Analytics at scale</h3><p>Engineering analysis in Google&apos;s Customer Experience organization for Ads.</p></article>
          </div>
          <div className="build-research-think"><span>BUILD <i>software, AI systems, applications</i></span><span>RESEARCH <i>questions, methods, evidence</i></span><span>THINK <i>experiments, ideas, connections</i></span></div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-intro"><div><span className="eyebrow">SELECTED WORK / 2023—26</span><h2 id="work-title">From question<br />to <em>working thing.</em></h2></div><p>Products and experiments shaped by a simple instinct: make the hidden structure visible, then make it useful.</p></div>

          <article className="wikicrawl-feature" aria-labelledby="wikicrawl-title">
            <div className="wikicrawl-copy">
              <div className="project-kicker"><span>01</span><span>FLAGSHIP PROJECT</span><span className="status-dot">LIVE PRODUCT</span></div>
              <h3 id="wikicrawl-title">WikiCrawl</h3>
              <p className="wikicrawl-subtitle">Explore knowledge as a graph.</p>
              <p className="project-lede">Wikipedia is more than a search box. WikiCrawl follows article links and turns those relationships into a graph you can explore as the crawl unfolds.</p>
              <div className="project-links">
                <a className="button button--light" href={wikiCrawl.live} target="_blank" rel="noreferrer">Launch WikiCrawl <ArrowUpRight size={15} /></a>
                <a className="text-link" href={wikiCrawl.github} target="_blank" rel="noreferrer">View source <GithubIcon width={15} height={15} /></a>
              </div>
              <div className="project-facts">
                <div><span>THE PROBLEM</span><p>Search returns pages; it rarely shows how ideas connect.</p></div>
                <div><span>THE BUILD</span><p>A crawler and interactive graph for following connected articles.</p></div>
              </div>
              <div className="tech-line"><span>UNDER THE HOOD</span><p>{wikiCrawl.technologies.join(' · ')}</p></div>
            </div>
            <div className="wikicrawl-visual">
              <div className="wikicrawl-preview-label">
                <Image src={wikiCrawl.favicon} width={28} height={28} unoptimized alt="" />
                <span>LIVE PRODUCT PREVIEW</span>
                <a href={wikiCrawl.live} target="_blank" rel="noreferrer">Open full site <ArrowUpRight size={13} /></a>
              </div>
              <iframe
                className="wikicrawl-iframe"
                src="https://wiki-crawl.vercel.app/?seed=Artificial+intelligence&depth=2&nodes=150"
                title="Interactive WikiCrawl preview showing an explored Wikipedia knowledge graph"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </article>

          <div className="project-stories">
            {storyProjects.map((project) => (
              <article className={`project-story project-story--${project.visual}`} key={project.id}>
                <ProjectVisual visual={project.visual} />
                <div className="project-story__copy">
                  <div className="project-kicker"><span>{project.number}</span><span>{project.category}</span></div>
                  <h3>{project.name}</h3><h4>{project.title}</h4>
                  <div className="story-points"><div><span>THE PROBLEM</span><p>{project.problem}</p></div><div><span>THE BUILD</span><p>{project.built}</p></div></div>
                  <p className="story-stack">{project.stack.join(' · ')}</p>
                  {project.href && <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.id === 'neuro-tetris' ? 'Watch project video' : project.id === 'legal-tesseract' ? 'Open project' : 'View project'} <ArrowUpRight size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-intro"><div><span className="eyebrow">CAREER / FIELD LOG</span><h2 id="experience-title">A path through<br /><em>real systems.</em></h2></div><p>From neural signals and computer vision to analytics engineering, each role has brought a new kind of system into focus.</p></div>
          <div className="career-timeline">
            {workExperience.map((experience) => (
              <article className={`career-entry${experience.id === 'google' ? ' career-entry--current' : ''}`} key={experience.id}>
                <div className="career-entry__rail"><span className="career-entry__year">{experience.startDate.slice(0, 4)}</span><span className="career-entry__marker" aria-hidden="true" /></div>
                <details className="career-card" open={experience.id === 'google'}>
                  <summary>
                    <span className="career-card__identity"><span className="career-card__eyebrow">{experience.organization} · {experience.location}</span><span className="career-company">{experience.title}</span></span>
                    <span className="career-period">{experience.period}</span><span className="career-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="career-card__body">
                    <p className="career-description">{experience.description}</p>
                    {experience.impactMetrics && <div className="career-metrics">{experience.impactMetrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
                    <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  </div>
                </details>
              </article>
            ))}
          </div>
          <div className="career-education"><span>EDUCATION · MAY 2025</span><strong>Indore Institute of Science and Technology</strong><span>B.Tech. Artificial Intelligence & Machine Learning · CGPA 8.03 / 10</span></div>
          <div className="career-recognition">
            <span>SELECTED RECOGNITION</span>
            <div className="career-recognition__items">
              {featuredAchievements.filter((achievement) => achievement.id !== 'best-paper').map((achievement) => <article key={achievement.id}><span>{achievement.year}</span><strong>{achievement.id === 'sih-2023' ? 'Smart India Hackathon' : achievement.title}</strong><small>{achievement.id === 'sih-2023' ? 'Winner · Software Edition' : 'Technical community leadership'}</small></article>)}
            </div>
          </div>
        </section>

        <section className="papers-section section-wrap" id="papers" aria-labelledby="papers-title">
          <div className="section-intro section-intro--light"><div><span className="eyebrow">SELECTED PUBLICATIONS</span><h2 id="papers-title">Research made<br /><em>public.</em></h2></div><p>Peer-reviewed work in neural signals and medical-document intelligence, including an award-winning EEG study.</p></div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.id}>
                {publication.id === 'neural-signatures' && <span className="publication-award">BEST PAPER AWARD</span>}
                <div><h3>{publication.title}</h3><p>{publication.description}</p></div>
                <div className="publication-meta"><span>{publication.venue}</span><span>{publication.year}</span></div>
                {publication.id === 'eeg-doctors' && <a href="https://doi.org/10.1145/3793449.3793517" target="_blank" rel="noreferrer" aria-label="Open ACM publication DOI">DOI <ArrowUpRight size={14} /></a>}
                {publication.id === 'neural-signatures' && publication.link && <a href={publication.link} target="_blank" rel="noreferrer" aria-label="Open Best Paper Award record">Award record <ArrowUpRight size={14} /></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities-section section-wrap" id="skills" aria-labelledby="capabilities-title">
          <div className="capabilities-heading"><span className="eyebrow">PRACTICE / TOOLS IN CONTEXT</span><h2 id="capabilities-title">A working toolkit.</h2><p>Grouped by the kind of work they support, not by how many names fit on a page.</p></div>
          <div className="capability-grid">
            {capabilityGroups.map((group) => {
              const source = skills.find((category) => category.id === group.source);
              const listed = group.picks.filter((pick) => source?.skills.includes(pick) || skills.some((category) => category.skills.includes(pick)));
              return <article className="capability-group" key={group.id}><span>{group.title}</span><p>{listed.join(' · ')}</p></article>;
            })}
          </div>
        </section>

        <section className="research-section section-wrap" id="research" aria-labelledby="research-title">
          <div className="section-intro section-intro--light"><div><span className="eyebrow">RESEARCH / OPEN QUESTIONS</span><h2 id="research-title">A laboratory<br />without <em>walls.</em></h2></div><p>These are directions I investigate, not claims of settled expertise. Some are active questions; others are ideas I want to test.</p></div>
          <div className="research-layout">
            <div className="research-agenda">
              <div className="research-agenda__heading"><span>THE RESEARCH MAP</span><span>{String(researchDirections.length).padStart(2, '0')} DIRECTIONS</span></div>
              {researchDirections.map((direction, index) => (
                <details className="research-item" key={direction.id} open={direction.id === 'llm-verification'}>
                  <summary><span className="research-number">{String(index + 1).padStart(2, '0')}</span><span className="research-name">{direction.title}</span><span className="research-state">{researchStatus[direction.status]}</span><span className="research-plus" aria-hidden="true">+</span></summary>
                  <p>{direction.description}</p>
                </details>
              ))}
            </div>
            <article className="research-question">
              <span className="eyebrow">CURRENT RESEARCH QUESTION <i>·</i> CONCEPT</span>
              <h3>Can a language model help a simulated world stay coherent?</h3>
              <p className="question-main">{currentResearchTransmission.summary}</p>
              <div className="question-grid"><div><span>HYPOTHESIS</span><p>An external model may help reason over events and flag conflicts with explicit world rules.</p></div><div><span>SYSTEM CONCEPT</span><p>A deterministic simulation produces events; a language model reviews them against stated constraints.</p></div><div><span>OPEN QUESTIONS</span><p>How should verification be measured? Where does model uncertainty belong in the loop?</p></div></div>
              <span className="concept-note">A question to investigate, not a result.</span>
            </article>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <span className="eyebrow">A NOTE ON APPROACH</span>
          <div className="about-layout"><h2 id="about-title">Curiosity is only useful when you <em>build with it.</em></h2><div><p>I move between analysis, engineering, and research because useful systems rarely stay inside one discipline. I like taking a question from a paper, a dataset, or a real environment and making something people can inspect and use.</p><p>The through-line is how machines interpret the world: through data, vision, language, or signals from the brain.</p></div></div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <span className="eyebrow">OPEN CHANNEL</span><h2 id="contact-title">Building something<br /><em>interesting?</em></h2>
          <p>AI systems. Research. Experiments. Data. Unusual ideas.</p>
          <a className="contact-cta" href="mailto:jainadityavardhan@gmail.com">Start a conversation <ArrowUpRight size={18} /></a>
          <div className="contact-socials"><a href="mailto:jainadityavardhan@gmail.com"><Mail size={15} /> Email</a><a href="https://linkedin.com/in/adityavardhan-jain/" target="_blank" rel="noreferrer"><LinkedinIcon width={15} height={15} /> LinkedIn</a><a href="https://github.com/Adityavardhanjain" target="_blank" rel="noreferrer"><GithubIcon width={15} height={15} /> GitHub</a></div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#home">AJ<span>.</span></a><span>AI / ML · DATA · RESEARCH</span><span>© {new Date().getFullYear()} Adityavardhan Jain</span></footer>
    </>
  );
}