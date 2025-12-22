import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiMail, FiPhone } from 'react-icons/fi'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yagnesh-patel-a29193235/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/yjp1406', icon: FaGithub },
  { label: 'LeetCode', href: 'https://leetcode.com/yagnesh14', icon: SiLeetcode }
]

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-slate-200 dark:border-slate-800">
      <div className="container grid gap-6">
  <h2 className="text-2xl font-semibold text-white">Let’s connect</h2>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-5">
            <div className="flex items-start gap-4 rounded-2xl card p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-700">
                <FiMail size={22} />
              </span>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Email</h3>
                <a className="text-lg font-medium text-slate-800 underline-offset-4 hover:underline dark:text-slate-100" href="mailto:yagneshjp1406@gmail.com">
                  yagneshjp1406@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl card p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-700">
                <FiPhone size={22} />
              </span>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Phone</h3>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-100">+91-7016178175</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full max-w-[10.5rem] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300"
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="text-white/75">Prefer email or LinkedIn. Open to backend, systems, and AI infra roles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


