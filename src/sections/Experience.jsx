const ExperienceItem = ({ role, org, period, bullets }) => (
  <div className="relative card p-6 pl-8">
    <span className="absolute left-3 top-8 h-2 w-2 rounded-full bg-pink-400 outline outline-4 outline-pink-400/20" />
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <h3 className="text-lg font-semibold text-white">{org}</h3>
      <span className="text-sm text-white/60">{period}</span>
    </div>
    <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-400 mt-1">{role}</p>
    <ul className="mt-4 space-y-2 text-white/70">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-pink-400/80" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
)

import SectionHeading from '../components/SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-[#1d2945]">
      <div className="container grid gap-10">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div className="relative grid gap-6 before:absolute before:left-4 before:top-3 before:h-full before:w-px before:bg-gradient-to-b before:from-teal-200 before:via-teal-300/60 before:to-transparent dark:before:from-teal-500/40 dark:before:via-teal-500/10">
        <ExperienceItem
            org="Sacesta Technologies"
            role="SDE"
            period="Nov 2024 – Present"
            bullets={[
              'Built and maintained server-side logic and backend services for a multi-role web platform, implementing core workflows around entity lifecycles, access control, validation, and data consistency using Node.js, Express, and MongoDB.',
              'Implemented real-time features using WebSockets (Socket.io) and backend flows for communication and QR-based check-ins, supporting 300–500 weekly active users across 10+ live events with a focus on performance and reliability.',
              'Built and maintained backend workflows for a global eSIM commerce platform supporting 2 primary roles (admin, customer) and 190+ countries, handling plan management, country listings, pricing, and order lifecycles with a focus on data correctness and scalability.',
              'Implemented secure purchase and fulfillment flows using Stripe and PayPal, processing hundreds of transactions, and automating QR-based eSIM delivery and installation instructions via email and user dashboards.',
              'Designed backend data models and APIs to support 10+ languages, multi-currency pricing, and region-specific plan configurations, with all localized content and metadata served dynamically from the backend.'
            ]}
          />
          <ExperienceItem
            org="Medkart Pharmacy"
            role="Jr. Fullstack Developer"
            period="Jul 2024 – Nov 2024"
            bullets={[
              'Added a caching layer for product search, improving search latency by 60% and reducing redundant DB hits significantly.',
              'Built a robust file-import module for stock and batch updates, reducing audit discrepancies by 20% and saving 5+ hours/week for the ops team.',
              'Developed a scalable reporting system with date-range filters and multi-store aggregation, reducing reporting time by 40% for 50+ store managers.',
              'Implemented background jobs and cron-based sync pipelines to create/update products and synchronize stores, store managers, and batch data from WMS to POS, improving cross-system data consistency by 15% and reducing manual reconciliation efforts by 10%.'
            ]}
          />
          <ExperienceItem
            org="Medkart Pharmacy"
            role="SDE Intern"
            period="Jan 2024 – Jul 2024"
            bullets={[
              'Built a dynamic JSON-driven form engine that reduced manual configuration work by 25% across app workflows.',
              'Implemented order and home-delivery history retrieval features and added geofencing for store personnel using Google Maps APIs, improving operational accuracy and reducing location-related discrepancies by 10%.',
              'Developed a secure Windows desktop application in Flutter with UUID + license-key validation, ensuring 100% controlled access to Medkart’s POS.',
              'Designed and implemented robust automated test suites using Cypress, improving test reliability and coverage.'
            ]}
          />
        </div>
      </div>
    </section>
  )
}


