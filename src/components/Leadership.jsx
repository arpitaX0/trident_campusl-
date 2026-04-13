import { useEffect, useRef } from 'react'

const leaders = [
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'CHAIRMAN',
    name: 'Dr. Chandan Kumar Das',
    subtitle: 'Sports Committee',
    delay: 100,
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'FACULTY GUIDE',
    name: 'Dr. Mili Panigrahi',
    subtitle: 'Music Club (ETC)',
    delay: 200,
  },
  {
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'FACULTY GUIDE',
    name: 'Mr. Manoj Kumar Rath',
    subtitle: 'Communication Club',
    delay: 300,
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'SPORTS OFFICER',
    name: 'Mr. Pratap Kumar Rath',
    subtitle: 'Sports & Games Committee',
    delay: 400,
  },
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#F5EEEC' }} id="leadership">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-16" data-animate>
          <div>
            <p
              className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
              style={{ color: '#E56D24' }}
            >
              FACULTY & GUIDANCE
            </p>
            <h2 className="section-title">Club Mentors & Leaders</h2>
            <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)', maxWidth: 560 }}>
              Each club is guided by a Professor and a faculty coordinator, ensuring students receive expert mentorship and direction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map(({ img, role, name, subtitle, delay }) => (
            <div
              key={name}
              data-animate
              className="leader-card text-center rounded-2xl overflow-hidden bg-white cursor-pointer"
              style={{
                transitionDelay: `${delay}ms`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,58,140,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
              }}
            >
              <div className="overflow-hidden" style={{ height: 220 }}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p
                  className="font-inter text-[10px] font-black tracking-[0.2em] uppercase mb-2"
                >
                  {role}
                </p>
                <h3 className="font-display font-bold text-base mb-1">{name}</h3>
                <p className="text-xs" style={{ color: 'rgba(62,58,54,0.5)' }}>{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
