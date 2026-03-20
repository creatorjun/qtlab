// src/presentation/components/About.jsx

import { useInView } from '../hooks/useInView'

const stats = [
  { value: '6+', label: '개발 경력 (년)' },
  { value: '10+', label: '실운영 배포 건수' },
  { value: '20+', label: '완성 프로젝트' },
  { value: '2', label: '오픈소스 퍼블리시' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">About</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight">
            단순 코더가 아닌,<br />
            <span className="text-gray-500">풀스택 시스템 아키텍처.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                비전공자로 시작해 C++, Python, Dart, Java, JavaScript를 독학으로 습득했습니다.
                학습에서 그치지 않고 실사용 환경에서 검증된 소프트웨어를 직접 만들고 운영했습니다.
              </p>
              <p>
                현재 ㈜ 유니디아에서 예금보험공사 인프라 관리 및 Windows 시스템 자동화 개발을 담당하고 있으며,
                자체 개발한 배포 도구는 누적 3만 건 이상 무결점으로 운영 중입니다.
              </p>
              <p>
                모든 프로젝트에 클린 아키텍처와 도메인 주도 설계를 일관되게 적용하며,
                오픈소스 라이브러리는 PyPI와 pub.dev에 직접 퍼블리시했습니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors">
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
