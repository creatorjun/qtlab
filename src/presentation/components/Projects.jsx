// src/presentation/components/Projects.jsx

import { useState, useEffect, useCallback } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../../application/data/projects'

function ProjectLightbox({ project, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
          aria-label="닫기"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="aspect-video bg-gray-900 overflow-hidden">
          <img
            src={`/images/${project.image}`}
            alt={project.name}
            className="w-full h-full object-cover"
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

        <div className="p-6 md:p-8">
          <p className="text-xs text-indigo-400 font-mono mb-2">{project.tag}</p>
          <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{project.desc}</p>

          {(project.github || project.demo) && (
            <div className="mt-6 flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {project.demo.includes('pypi') ? 'PyPI' : project.demo.includes('pub.dev') ? 'pub.dev' : 'Demo'}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <p className="absolute bottom-3 text-xs text-white/30 select-none">ESC 또는 바깥 영역 클릭으로 닫기</p>
    </div>
  )
}

function ProjectCard({ project, onCardClick }) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onCardClick(project)}
    >
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
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          <div className="p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <p className="text-xs text-indigo-400 font-mono mb-1.5">{project.tag}</p>
        <h3 className="text-sm font-bold text-white">{project.name}</h3>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState(null)

  const handleCardClick = useCallback((project) => {
    setSelected(project)
  }, [])

  const handleClose = useCallback(() => {
    setSelected(null)
  }, [])

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">프로젝트</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map(p => (
              <ProjectCard key={p.id} project={p} onCardClick={handleCardClick} />
            ))}
          </div>
        </div>
      </div>
      {selected && (
        <ProjectLightbox
          project={selected}
          onClose={handleClose}
        />
      )}
    </section>
  )
}
