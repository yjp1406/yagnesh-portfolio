import SectionHeading from '../components/SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-[#1d2945]">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SectionHeading eyebrow="Toolbox" title="Technical Skills" description="Systems, backend, and full-stack tools." />
        <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-lg ring-1 ring-white/5 backdrop-blur">
          <div className="flex items-center gap-2 border-b border-slate-700/60 pb-4">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="ml-3 rounded-full bg-slate-800/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-300">
              stack.js
            </span>
          </div>
          <pre className="mt-5 overflow-x-auto text-sm leading-7 text-slate-200">
{`const stack = {
  languages: [
    'JavaScript', 'TypeScript', 'Python', 'Go', 'C++', 'Dart',
    'Java', 'SQL', 'PHP', 'Bash'
  ],
  frameworks: [
    'Node.js', 'Express.js', 'React.js', 'Flutter',
    'FastAPI', 'Laravel', 'Django', 'Spring Boot',
  ],
  infrastructure: [
    'Docker', 'AWS', 'Redis', 'MongoDB', 'PostgreSQL',
    'MySQL', 'QdrantDB', 'LangGraph', 'LangChain'
  ],
  platforms: ['Linux', 'Web', 'Windows', 'Arduino']
};`}
          </pre>
        </div>
      </div>
    </section>
  )
}


