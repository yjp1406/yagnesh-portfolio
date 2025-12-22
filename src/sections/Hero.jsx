import { motion } from 'framer-motion'
import LaptopDemo from '../components/LaptopDemo.jsx'

const lines = [
  { key: 'name', value: "'Yagnesh Patel'" },
  { key: 'title', value: "'Software Engineer'" },
  { key: 'focus', value: "['Backend', 'Fullstack']" },
  { key: 'currently', value: "'Building reliable, scalable systems'" },
  { key: 'hireable', value: 'true' }
]

export default function Hero() {
  return (
    <section className="section relative overflow-hidden pt-32" id="hero">
  <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-br from-pink-300/60 via-violet-300/40 to-transparent blur-3xl dark:from-pink-500/20 dark:via-violet-900/24" />
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="space-y-8 text-balance">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-pink-300 shadow-sm dark:border-pink-500/20 dark:bg-pink-500/8 dark:text-pink-200"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello
          </motion.span>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white md:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            This is Yagnesh Patel, I'm a Software Engineer.
          </motion.h1>
          <motion.p
            className="max-w-lg text-lg leading-relaxed text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Backend & systems. I build reliable services and tools.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/resume.pdf" download className="btn btn-primary h-11 px-6">Resume</a>
            <a href="#contact" className="btn btn-outline h-11 px-6">Contact</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <LaptopDemo />
        </motion.div>
      </div>
    </section>
  )
}


