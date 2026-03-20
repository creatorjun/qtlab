// src/presentation/components/Skills.jsx

import { useInView } from '../hooks/useInView'
import { skills } from '../../application/data/skills'

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">기술 스택</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map(g => (
              <div key={g.label}>
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-mono">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(item => (
                    <span key={item} className="px-3 py-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/5 rounded-full hover:border-white/10 hover:text-gray-300 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
