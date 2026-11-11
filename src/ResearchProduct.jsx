
import {
  BrainCircuit,
  ScanEye,
  Network,
  Target,
  Users,
  Layers3,
} from 'lucide-react'

const researchHighlights = [
  {
    icon: ScanEye,
    title: 'Computer Vision',
    description:
      'Real-time object detection and multi-object tracking using PyTorch and OpenCV.',
  },
  {
    icon: BrainCircuit,
    title: 'Vision-Language Systems',
    description:
      'Combining visual understanding with LLMs for natural-language interaction.',
  },
  {
    icon: Network,
    title: 'Interactive AI Research',
    description:
      'Developing research prototypes that make advanced AI capabilities accessible through interactive demonstrations.',
  },
]

const productHighlights = [
  {
    icon: Target,
    title: 'Product Strategy',
    description:
      'Defining product requirements and prioritizing features around user and business needs.',
  },
  {
    icon: Users,
    title: 'Cross-Functional Leadership',
    description:
      'Coordinating distributed engineering teams and aligning stakeholders around delivery goals.',
  },
  {
    icon: Layers3,
    title: 'Product Delivery',
    description:
      'Supporting development, release planning, and delivery of two telemedicine platforms.',
  },
]

function HighlightCard({ icon: Icon, title, description }) {
  return (
    <article className="highlight-card">
      <span className="highlight-icon">
        <Icon size={23} strokeWidth={1.7} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

function ResearchProduct() {
  return (
    <>
      <section id="research" className="focus-section">
        <div className="focus-container">
          <div className="focus-heading">
            <span className="section-label">AI RESEARCH</span>
            <h2>Exploring intelligent systems through research.</h2>
            <p>
              At Penn State University, I develop computer vision
              and LLM-based systems for interactive visual understanding.
            </p>
          </div>

          <div className="highlight-grid">
            {researchHighlights.map((item) => (
              <HighlightCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="focus-section product-section">
        <div className="focus-container">
          <div className="focus-heading">
            <span className="section-label">PRODUCT & LEADERSHIP</span>
            <h2>Connecting product vision with engineering execution.</h2>
            <p>
              My product ownership experience spans requirements,
              prioritization, stakeholder alignment, and delivery
              of software products.
            </p>
          </div>

          <div className="highlight-grid">
            {productHighlights.map((item) => (
              <HighlightCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ResearchProduct
