import { useEffect, useRef } from 'react'

const leaders = [
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/discover_graduation.jpg', role: 'PRESIDENT', name: 'Rahul Verma', delay: 100 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg', role: 'VICE PRESIDENT', name: 'Priya Singh', delay: 200 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg', role: 'GENERAL SECRETARY', name: 'Ananya Roy', delay: 300 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_research_scholars.jpg', role: 'TREASURER', name: 'Vikram Das', delay: 400 },
]

export default function Leadership() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="governance">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center mb-14 text-center" data-animate>
          <h2 className="section-title">Student Leadership & Governance</h2>
          <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)' }}>
            Empowering student voices through democratic representation.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-10 md:gap-14">
          {leaders.map(({ img, role, name, delay }, i) => {
            const roleColors = [
              { color: '#2C3A8C', border: '#2C3A8C' },
              { color: '#E56D24', border: '#E56D24' },
              { color: '#349FCC', border: '#349FCC' },
              { color: '#E56D24', border: '#E56D24' },
            ]
            const theme = roleColors[i % 4]

            return (
              <div
                key={name}
                data-animate
                className="flex flex-col items-center"
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Profile Image Circle */}
                <div
                  className="w-32 h-32 rounded-full overflow-hidden mb-6 flex-shrink-0"
                  style={{
                    border: `2px solid ${theme.border}`,
                    padding: 4,
                    background: 'transparent',
                  }}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Pill Role Label */}
                <span
                  className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-3"
                  style={{ background: `${theme.color}15`, color: theme.color, border: `1px solid ${theme.color}30` }}
                >
                  {role}
                </span>
                {/* Name */}
                <h4 className="font-display font-bold text-xl" style={{ color: '#3E3A36' }}>{name}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
