export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0f1724]/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.36em] text-pink-400">
          {eyebrow}
        </span>
      )}
      {title && (
        <div className="flex flex-col">
          <h2 className={`text-3xl font-extrabold text-white/95 sm:text-[2.5rem] ${align === 'center' ? 'max-w-2xl' : ''}`}>
            {title}
          </h2>
          {/* subtle gradient underline to echo the theme */}
          <span className="mt-3 block h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500" />
        </div>
      )}
      {description && (
        <p className={`text-base leading-relaxed text-white/70 ${align === 'center' ? 'max-w-3xl' : 'max-w-xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}


