// src/presentation/components/Projects.jsx

import { useInView } from '../hooks/useInView'
import { projects } from '../../application/data/projects'

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gray-900 overflow-hidden relative">
        <img
          src={`/images/${project.image}`}
          alt={project.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-gray-700 text-xs font-mono">${project.image}</span></div>`
          }}
        />
        {project.metric && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono backdrop-blur-sm">
            {project.metric}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-indigo-400 font-mono mb-2">{project.tag}</p>
        <h3 className="text-base font-bold text-white mb-3">{project.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{project.desc}</p>
        {(project.github || project.demo) && (
          <div className="mt-5 flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {project.demo.includes('pypi') ? 'PyPI' : project.demo.includes('pub.dev') ? 'pub.dev' : 'Demo'}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">프로젝트</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
