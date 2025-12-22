import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="About"
            title="Turning Real-World Problems into Reliable Software"
            description="I’m a Software Engineer with a strong focus on backend development, system design, and scalable full-stack applications. I enjoy working close to real-world problems—building systems that are reliable, performant, and easy to evolve."
          />
          {/* <p className="mt-6 max-w-xl text-base leading-loose text-white/75">
            I build cloud-native APIs and resilient data pipelines. I focus on measurable impact, clear communication, and pragmatic design.
          </p> */}
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-[32px] border border-slate-700/60 bg-slate-900/70 shadow-xl ring-1 ring-white/5 backdrop-blur">
            <img
              src="/profile.jpeg"
              alt="Yagnesh Patel"
              className="h-[380px] w-full object-cover"
              loading="lazy"
            />
            {/* <div className="border-t border-slate-700/60 px-6 py-5"> */}
              {/* <p className="text-sm text-slate-400"> */}
                {/* Replace <code className="text-sky-300">public/profile.jpg</code> with your photo to personalize this section. */}
              {/* </p> */}
            {/* </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


