// src/presentation/components/Contact.jsx

import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">연락하기</h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            채용 문의 및 프로젝트 협업은 아래 이메일로 연락 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:createbrain2heart@gmail.com"
              className="px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              createbrain2heart@gmail.com
            </a>
            <a
              href="https://github.com/creatorjun"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-white/10 text-gray-400 text-sm font-semibold rounded-full hover:border-white/20 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-800 text-xs mt-24">© 2026 Han Junho. All rights reserved.</p>
    </section>
  )
}
