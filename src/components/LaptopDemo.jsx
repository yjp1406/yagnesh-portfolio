export default function LaptopDemo() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        className="absolute -inset-x-10 -top-8 -z-10 h-40 rounded-full bg-gradient-to-r from-indigo-500/25 via-sky-400/20 to-teal-400/25"
        style={{ animation: 'glowPulse 6s ease-in-out infinite' }}
      />
      <div className="mx-auto w-full rounded-[22px] border border-slate-700/60 bg-slate-950/70 shadow-2xl ring-1 ring-white/10 backdrop-blur">
        {/* Laptop screen */}
        <div className="relative rounded-t-[22px] border-b border-slate-700/60 p-4">
          <div className="mx-auto h-5 w-24 rounded-full bg-slate-800/80" />
        </div>
        <div className="relative h-64 overflow-hidden rounded-b-[22px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(120px_120px_at_20%_20%,rgba(56,189,248,.16),transparent),radial-gradient(140px_140px_at_80%_30%,rgba(34,211,238,.12),transparent)]" />
          <div className="relative h-full w-full p-5">
            <div className="code text-[13px] leading-6 text-slate-200">
              <div className="text-sky-300">const</div>{' '}
              <span className="text-indigo-300">engineer</span>{' '}
              <span className="text-slate-400">=</span>{' '}
              <span className="text-slate-200">{'{'}</span>
              <div className="pl-6">
                <div><span className="text-slate-400">name:</span> <span className="text-teal-300">'Yagnesh Patel'</span>,</div>
                <div><span className="text-slate-400">roles:</span> <span className="text-teal-300">['Backend','Fullstack']</span>,</div>
                <div className="whitespace-nowrap overflow-hidden" style={{ width: '0', animation: 'typing 3.6s steps(40,end) 0.8s forwards' }}>
                  <span className="text-slate-400">currently:</span> <span className="text-teal-300">'building scalable systems'</span><span className="inline-block w-2 bg-teal-300 ml-1 align-middle" style={{ animation: 'caret 1s steps(1,end) infinite' }} />
                </div>
              </div>
              <span className="text-slate-200">{'}'}</span>
            </div>
          </div>
        </div>
        {/* Keyboard base */}
        <div className="mx-auto h-3 w-44 rounded-b-2xl bg-slate-900" />
      </div>
    </div>
  )
}


