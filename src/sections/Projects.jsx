const ProjectCard = ({ title, stack, desc, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="card block transition-transform hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <span className="ml-auto text-xs uppercase tracking-wide text-white/50">{stack}</span>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-xl">{desc}</p>
    <div className="mt-4 text-sm font-medium text-pink-400">GitHub →</div>
  </a>
)

import SectionHeading from '../components/SectionHeading.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-[#1d2945]">
      <div className="container grid gap-12">
        <SectionHeading eyebrow="Selected Work" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="AI Frontdesk "
            stack="(Python, LiveKit, WebRTC, Deepgram STT, OpenAI, ElevenLabs TTS)"
            desc="Built a real-time
Human-in-the-Loop AI voice agent using LiveKit that handles live audio conversations, integrates STT-LLM-TTS pipelines,
and supports seamless supervisor handoff via event-driven messaging."
            href="https://github.com/yjp1406/human-in-loop-voice-agent"
          />
          <ProjectCard
            title="ReachInbox"
            stack="(Nodejs, RAG, QdrantDB, Elasticsearch, Reactjs, OpenAI)"
            desc="Built an AI-driven email automation
platform using IMAP, Node.js, OpenAI, and Qdrant, enabling semantic email search and RAG-based reply generation."
            href="https://github.com/yjp1406/reachInbox"
          />
          <ProjectCard
            title="CLI-RAG"
            stack="(Python, RAG, QdrantDB, Docker)"
            desc="Built a Python-based CLI tool implementing Retrieval-Augmented
Generation (RAG) for document search and context-aware AI responses."
            href="https://github.com/yjp1406/CLI-RAG"
          />
          <ProjectCard
            title="DropFile"
            stack="(Golang, React, BadgerDB, Nginx)"
            desc="Developed a distributed file-sharing service allowing users to upload and
share files efficiently. Implemented concurrency and multi-threading using Golang for optimized storage and retrieval, with
load balancing via Nginx using a round-robin algorithm."
            href="https://github.com/yjp1406/DropFile"
          />
          <ProjectCard
            title="MakeMeme"
            stack="(AWS S3, Node.js, Express.js, PostgreSQL, NextJs, AWS-lambda)"
            desc="Built a smart Discord bot that
generates and shares relevant memes by integrating Python, the Discord API, and meme databases. Ensured smooth
functionality and scalability."
            href="https://github.com/yjp1406/MakeMeme"
          />
        </div>
      </div>
    </section>
  )
}


