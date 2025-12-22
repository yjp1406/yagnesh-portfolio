import SectionHeading from '../components/SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="section border-t border-[#1d2945]">
      <div className="container grid gap-8">
        <SectionHeading eyebrow="Academic" title="Education" />
        <div className="grid gap-6">
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">B.Tech — Computer Science</h3>
              <span className="text-sm text-white/60">2020–2024</span>
            </div>
            <p className="mt-2 text-white/70">Ahmedabad University • GPA: 3.33</p>
          </div>
        </div>
      </div>
    </section>
  )
}


