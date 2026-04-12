import { useEffect, useRef } from 'react'

const sports = [
  { img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-baseball', label: 'Cricket Arena', color: '#2C3A8C' },
  { img: 'https://loremflickr.com/600/800/india,basketball?random=2', icon: 'ph ph-basketball', label: 'Basketball Courts', color: '#E56D24' },
  { img: 'https://loremflickr.com/600/800/india,football?random=3', icon: 'ph ph-soccer-ball', label: 'Football Turf', color: '#349FCC' },
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=800', icon: 'ph ph-barbell', label: 'Modern Gym', color: '#3E3A36' },
]

export default function Sports() {
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

  const allSports = [...sports, ...sports]

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="sports">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center mb-14 text-center" data-animate>
          <h2 className="section-title">Pulse & Play</h2>
          <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)' }}>
            World-class athletic infrastructure designed to foster sportsmanship and physical excellence.
          </p>
        </div>

        {/* Infinite Ticker — reference style: image card with icon+label below */}
        <div className="overflow-hidden" data-animate>
          <div className="sports-scroller">
            {allSports.map(({ img, icon, label, color }, i) => (
              <div
                key={`${label}-${i}`}
                className="flex-shrink-0 rounded-2xl overflow-hidden mr-6 cursor-pointer group"
                style={{ width: 240, background: '#F5EEEC', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ height: 280 }}>
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Label row */}
                <div className="flex items-center gap-3 px-4 py-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ border: `1.5px solid ${color}`, color }}
                  >
                    <i className={icon}></i>
                  </div>
                  <span className="font-display font-bold text-sm" style={{ color: '#3E3A36' }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
