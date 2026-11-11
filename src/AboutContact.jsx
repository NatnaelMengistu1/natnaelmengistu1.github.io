
import {
  Mail,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
  GraduationCap,
} from 'lucide-react'

function AboutContact() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="section-label">ABOUT ME</span>

            <h2>
              Engineering depth.
              <span className="about-gradient">
                {' '}Product perspective.
              </span>
            </h2>

            <p>
              I'm an AI/ML Engineer, Product Owner, and Researcher
              specializing in multimodal AI, intelligent systems,
              and scalable software architecture.
            </p>

            <p>
              My experience spans enterprise AI engineering at Honeywell,
              applied research at Penn State, software development,
              and product leadership. I enjoy connecting technical
              innovation with practical business needs.
            </p>

            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3>Education</h3>
                <p>
                  M.Artificial Intelligence — Penn State University
                </p>
                <p>
                  M.S. Information Systems — Marist College
                </p>
                <p>
                  B.S. Computer Science — Marist College
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="contact-card">
            <div className="contact-decoration" />

            <span className="contact-eyebrow">
              LET'S CONNECT
            </span>

            <h3>
              Have an interesting project or opportunity?
            </h3>

            <p>
              I'm interested in meaningful work across AI engineering,
              intelligent products, and applied research.
            </p>

            <a
              href="mailto:nattygetachew116@gmail.com"
              className="contact-primary"
            >
              <Mail size={19} />
              Get in Touch
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/natnael-mengistu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseBusiness size={19} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://github.com/NatnaelMengistu1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={19} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <span>
            © {new Date().getFullYear()} Natnael G. Mengistu
          </span>

          <span>
            AI Engineering · Product Ownership · Research
          </span>
        </div>
      </footer>
    </>
  )
}

export default AboutContact
