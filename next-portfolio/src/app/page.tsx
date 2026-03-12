"use client";

import { motion } from "framer-motion";

const sectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const expertise = [
  {
    title: "Business Analysis",
    text: "Translate operational requirements into clear system and process improvements.",
  },
  {
    title: "Systems & Infrastructure",
    text: "Support and optimize Microsoft 365, Active Directory, and core IT operations workflows.",
  },
  {
    title: "ERP / WMS Operations",
    text: "Improve process reliability, issue handling, and execution consistency across enterprise systems.",
  },
  {
    title: "Data Analytics",
    text: "Create KPI reporting and dashboards that turn operational data into decisions.",
  },
  {
    title: "Automation with Python",
    text: "Reduce recurring manual effort in reporting, monitoring, and support workflows.",
  },
  {
    title: "Digital Transformation",
    text: "Align systems, process changes, and stakeholder outcomes in transformation initiatives.",
  },
];

const projects = [
  {
    title: "AI Helpdesk Assistant",
    problem: "Support teams faced repetitive ticket inflow and inconsistent first-response quality.",
    solution:
      "Built a prototype assistant flow to classify request categories and suggest first-level troubleshooting.",
    tech: "Python, Flask, NLP workflow, PostgreSQL",
    impact:
      "Improved triage consistency and reduced response friction on common support scenarios.",
  },
  {
    title: "Python Automation Toolkit",
    problem: "Manual reporting and recurring operations checks consumed team capacity.",
    solution:
      "Created reusable Python scripts for report generation, health checks, and log processing.",
    tech: "Python, Pandas, Selenium, scheduling libraries",
    impact:
      "Reduced repetitive effort and improved day-to-day operational consistency.",
  },
  {
    title: "ERP Analytics Dashboard",
    problem:
      "Stakeholders needed faster visibility into operational KPIs without manual spreadsheet consolidation.",
    solution:
      "Designed a dashboard framework that translated ERP transaction data into clear performance indicators.",
    tech: "SQL, Power BI, ERP API integration",
    impact:
      "Enabled more structured reporting and faster insight cycles for operations teams.",
  },
  {
    title: "Cloud Monitoring Dashboard",
    problem: "Incident teams lacked a unified view of service health and alert context.",
    solution:
      "Developed a monitoring concept with service visibility, alert routing, and escalation context.",
    tech: "AWS CloudWatch, GCP Monitoring, Grafana, Prometheus",
    impact: "Strengthened observability and improved response coordination.",
  },
  {
    title: "IT Knowledge Base",
    problem:
      "Troubleshooting approaches varied by team member, creating repeated issue handling effort.",
    solution:
      "Structured a searchable knowledge base with categorized resolution templates and playbooks.",
    tech: "Markdown, documentation framework, version control",
    impact:
      "Improved onboarding speed and reduced repeated troubleshooting work.",
  },
];

const experience = [
  {
    role: "IT Infrastructure & Systems Engineer",
    company: "SMART INFINITECH SOLUTIONS (UAE)",
    time: "2025 - Present",
    text: "Managed cross-functional systems support, improved service stability, supported ERP/CRM operations, and introduced reporting automation to reduce recurring manual work.",
  },
  {
    role: "Warehouse Tech & Operations Team Lead",
    company: "GMG (Trilogi Logistics), Dubai",
    time: "2025",
    text: "Led warehouse technology support workflows, improved asset visibility, and reduced recurring downtime through stronger issue response and process discipline.",
  },
  {
    role: "Intern, AI & Green Technology",
    company: "Shell",
    time: "Dec 2024 - Jan 2025",
    text: "Supported data preparation, model exploration, and documentation for sustainability-oriented initiatives.",
  },
  {
    role: "Data Analytics Intern",
    company: "Vodafone Idea Foundation",
    time: "Oct 2024 - Nov 2024",
    text: "Contributed to reporting improvements, data quality cleanup, and stakeholder-ready insight summaries.",
  },
];

const stack = [
  "Windows Server, Linux, Active Directory, Microsoft 365",
  "ERP / WMS workflows, SAP process exposure",
  "Excel, SQL, Power BI, KPI dashboarding",
  "Python scripting for reporting and operations tasks",
  "AWS and Google Cloud fundamentals",
  "Process mapping, root-cause analysis, cross-team coordination",
];

export default function Home() {
  return (
    <div className="site-shell min-h-screen pb-20">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0e1218]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="brand-title text-lg font-semibold">Shahul Hameed</p>
          <div className="hidden gap-4 text-sm text-[var(--muted)] md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#expertise" className="hover:text-white">Expertise</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-14">
        <motion.section
          {...sectionReveal}
          className="grid gap-8 rounded-3xl border border-white/10 bg-black/20 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12"
          id="hero"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Technology Business Analyst | Systems, Data & Transformation
            </p>
            <h1 className="brand-title mb-6 text-4xl leading-tight md:text-5xl">
              Improving operations through smarter systems, clearer data, and practical automation.
            </h1>
            <p className="max-w-2xl text-[var(--muted)]">
              Based in the UAE, I bring a combined foundation in IT infrastructure and business operations.
              I support organizations by translating operational pain points into scalable systems and
              process improvements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-[#102127]">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold">
                Contact
              </a>
            </div>
          </div>
          <div className="card rounded-2xl p-5">
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Professional Focus</p>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>Technology Analyst</li>
              <li>Business Analyst</li>
              <li>Digital Transformation Roles</li>
            </ul>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Background</p>
            <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
              <li>BSc Computer Science</li>
              <li>MBA Systems & Operations Management</li>
              <li>IT Infrastructure + Systems Operations</li>
            </ul>
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="about" className="mt-16">
          <h2 className="brand-title text-3xl">About</h2>
          <p className="mt-4 max-w-4xl text-[var(--muted)]">
            I work at the intersection of systems, operations, and data. My experience includes IT
            infrastructure support, ERP/WMS operations, Microsoft 365 and Active Directory administration,
            SAP workflow exposure, and automation initiatives. I am focused on delivering measurable
            operational improvements through process clarity and technology execution.
          </p>
        </motion.section>

        <motion.section {...sectionReveal} id="projects" className="mt-16">
          <h2 className="brand-title text-3xl">Projects / Case Studies</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="card rounded-2xl p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-[var(--muted)]"><strong>Problem:</strong> {project.problem}</p>
                <p className="mt-2 text-sm text-[var(--muted)]"><strong>Solution:</strong> {project.solution}</p>
                <p className="mt-2 text-sm text-[var(--muted)]"><strong>Technology Used:</strong> {project.tech}</p>
                <p className="mt-2 text-sm text-[var(--muted)]"><strong>Impact:</strong> {project.impact}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="expertise" className="mt-16">
          <h2 className="brand-title text-3xl">Expertise</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <article key={item.title} className="soft-card rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="experience" className="mt-16">
          <h2 className="brand-title text-3xl">Professional Experience</h2>
          <div className="mt-6 space-y-4">
            {experience.map((item) => (
              <article key={item.role} className="card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--accent-2)]">{item.time}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-[var(--muted)]">{item.company}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="stack" className="mt-16">
          <h2 className="brand-title text-3xl">Technology Stack</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="chip rounded-full px-4 py-2 text-sm text-[var(--muted)]">
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="thought" className="mt-16">
          <h2 className="brand-title text-3xl">Thought Leadership</h2>
          <div className="card mt-5 rounded-2xl p-6">
            <p className="text-[var(--muted)]">
              I share practical insights on systems reliability, operations analytics, and transformation
              execution. Current themes include process standardization, KPI-driven decisioning, and
              automation-first workflow improvements.
            </p>
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="resume" className="mt-16">
          <h2 className="brand-title text-3xl">ATS Resume</h2>
          <div className="card mt-5 rounded-2xl p-6">
            <p className="text-[var(--muted)]">
              Download a one-page ATS-friendly resume summary for recruiter screening and application portals.
            </p>
            <a
              href="/Shahul_Hameed_ATS_Resume.txt"
              download
              className="mt-4 inline-block rounded-full bg-[var(--accent)] px-5 py-2 font-semibold text-[#102127]"
            >
              Download ATS Resume (TXT)
            </a>
          </div>
        </motion.section>

        <motion.section {...sectionReveal} id="contact" className="mt-16 mb-8">
          <h2 className="brand-title text-3xl">Contact</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="card rounded-2xl p-6">
              <p className="text-sm text-[var(--muted)]">Email</p>
              <a href="mailto:shahulofficial16@gmail.com" className="mt-1 block text-lg font-semibold">
                shahulofficial16@gmail.com
              </a>
              <p className="mt-4 text-sm text-[var(--muted)]">Phone</p>
              <a href="tel:+971589922059" className="mt-1 block text-lg font-semibold">
                +971 58 9922 059
              </a>
            </div>
            <div className="card rounded-2xl p-6">
              <p className="text-sm text-[var(--muted)]">Professional Profiles</p>
              <a href="https://linkedin.com/in/shahul16" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold">
                LinkedIn
              </a>
              <a href="https://github.com/Shahul16" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold">
                GitHub
              </a>
              <p className="mt-4 text-sm text-[var(--muted)]">Location: United Arab Emirates</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
