
import { BriefcaseBusiness, CalendarDays } from 'lucide-react'

const experiences = [
  {
    company: 'Penn State University',
    role: 'Graduate Research Assistant',
    period: 'Aug 2025 – Present',
    category: 'AI RESEARCH',
    description:
      'Developing real-time computer vision and LLM systems for interactive visual understanding, object tracking, and natural-language control.',
    skills: ['Computer Vision', 'PyTorch', 'OpenCV', 'LLMs'],
  },
  {
    company: 'Honeywell',
    role: 'AI/ML Engineer Intern',
    period: 'Jun 2026 – Aug 2026',
    category: 'ENTERPRISE AI',
    description:
      'Architected multimodal AI capabilities and collaborated with engineering teams and executive stakeholders on enterprise AI solutions.',
    skills: ['Multimodal AI', 'RAG', 'AI Architecture'],
  },
  {
    company: 'Global Disciples',
    role: 'IT Specialist',
    period: 'Sep 2023 – Jul 2025',
    category: 'SYSTEMS & INTEGRATION',
    description:
      'Led enterprise migrations, platform integration, technical operations, and organizational security improvements.',
    skills: ['Systems Integration', 'Security', 'Salesforce'],
  },
  {
    company: 'EnhanceIT',
    role: 'Data Scientist & AI Consultant',
    period: 'Feb 2023 – Sep 2023',
    category: 'APPLIED AI',
    description:
      'Built NLP, RAG, and computer vision applications alongside AWS-based machine learning pipelines.',
    skills: ['NLP', 'RAG', 'AWS'],
  },
  {
    company: 'AugArena',
    role: 'Senior Software Developer',
    period: 'Sep 2022 – Feb 2023',
    category: 'SOFTWARE ENGINEERING',
    description:
      'Developed financial analytics systems combining predictive modeling, real-time data pipelines, and scalable backend services.',
    skills: ['FastAPI', 'PostgreSQL', 'ML'],
  },
  {
    company: 'MonitorMe',
    role: 'Product Owner',
    period: 'Mar 2020 – Jan 2021',
    category: 'PRODUCT LEADERSHIP',
    description:
      'Led requirements, roadmap prioritization, cross-functional coordination, and delivery for two telemedicine platforms.',
    skills: ['Product Strategy', 'Roadmapping', 'Delivery'],
  },
  {
    company: 'Galaxy.AI',
    role: 'Data Engineering Intern',
    period: 'Jul 2019 – Sep 2020',
    category: 'DATA ENGINEERING',
    description:
      'Developed web scraping systems, data pipelines, and synthetic datasets supporting machine learning workflows.',
    skills: ['Python', 'Spark', 'SQL'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-label">CAREER JOURNEY</span>
          <h2>Professional Experience</h2>
          <p>
            Building at the intersection of artificial intelligence,
            engineering, research, and product leadership.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((job) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-marker">
                <BriefcaseBusiness size={19} />
              </div>

              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <span className="experience-category">
                      {job.category}
                    </span>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>

                  <div className="experience-period">
                    <CalendarDays size={15} />
                    {job.period}
                  </div>
                </div>

                <p>{job.description}</p>

                <div className="experience-skills">
                  {job.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
