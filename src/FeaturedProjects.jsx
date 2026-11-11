
import { ArrowUpRight, BrainCircuit, ScanEye, HeartPulse } from 'lucide-react'
import { projects } from './projects'

const projectIcons = {
  honeywell: BrainCircuit,
  'penn-state': ScanEye,
  monitorme: HeartPulse,
}

function FeaturedProjects() {
  return (
    <section id="work" className="projects-section">
      <div className="projects-container">

        <div className="projects-header">
          <div>
            <span className="section-label">SELECTED WORK</span>
            <h2>Featured Projects</h2>
            <p>
              A selection of my work across AI engineering,
              research, and product development.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = projectIcons[project.id]

            return (
              <article
                key={project.id}
                className={`project-card theme-${project.theme}`}
              >
                <div className="project-visual">
                  <div className="project-visual-glow" />
                  <div className="project-visual-icon">
                    <Icon size={54} strokeWidth={1.3} />
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects
