import { ArrowRight, Download, BrainCircuit, Layers3, Code2 } from 'lucide-react'
import FeaturedProjects from './FeaturedProjects'
import Experience from './Experience'
import ResearchProduct from './ResearchProduct'
import AboutContact from './AboutContact'
import './App.css'

function App() {
  return (
    <>
      {/* Navigation */}
      <header className="site-header">
        <nav className="navbar">
          <a href="#home" className="brand">
            <span className="brand-icon">N.</span>
            <span>Natnael Mengistu</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#research">Research</a>
            <a href="#product">Product</a>
            <a href="#about">About</a>
          </div>

                    
          <a
            href="/resume.pdf"
            className="resume-button"
            download="Natnael_Mengistu_Resume.pdf"
          >
            Resume <Download size={17} />
          </a>

        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              AI/ML ENGINEER · PRODUCT OWNER · RESEARCHER
            </div>

            <h1>
              Building intelligent systems from{' '}
              <span className="gradient-text">
                product vision to production.
              </span>
            </h1>

            <p className="hero-description">
              I combine AI engineering, software architecture, and
              product ownership to transform complex challenges into
              practical, scalable intelligent systems.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button-primary">
                Explore My Work <ArrowRight size={19} />
              </a>

              <a
                href="https://github.com/NatnaelMengistu1"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Code2 size={19} /> GitHub
              </a>
            </div>
          </div>

          {/* Decorative hero artwork */}
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-glow" />
            <div className="visual-card visual-card-back">
              <Code2 size={52} />
            </div>
            <div className="visual-card visual-card-middle">
              <Layers3 size={66} />
            </div>
            <div className="visual-card visual-card-front">
              <BrainCircuit size={90} strokeWidth={1.2} />
              <span>INTELLIGENT SYSTEMS</span>
            </div>
          </div>
                </section>

        {/* Featured Projects */}
        <FeaturedProjects />
        {/* Professional Experience */}
        <Experience />
        {/* Research & Product Leadership */}
        <ResearchProduct />
        {/* About & Contact */}
        <AboutContact />
      </main>
    </>
  )
}

export default App
