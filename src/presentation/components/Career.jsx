// src/presentation/components/Career.jsx

import { useInView } from '../hooks/useInView'
import { careers } from '../../application/data/careers'

export default function Career() {
  const { ref, inView } = useInView()

  return (
    <section id="career" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Career</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">경력</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block ml-[11px]" />
            <div className="space-y-12">
              {careers.map((c, i) => (
                <div key={i} className="md:pl-10 relative">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-indigo-500/40 bg-indigo-500/10 hidden md:flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                  <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{c.company}</h3>
                        <p className="text-sm text-indigo-400 mt-0.5">{c.role}</p>
                      </div>
                      <span className="text-xs text-gray-500 font-mono bg-white/5 px-3 py-1.5 rounded-full w-fit">{c.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {c.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="mt-2 w-1 h-1 rounded-full bg-indigo-400/60 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
