import { useEffect, useRef } from 'react'

const papers = [
  { badge: 'PUBLISHED PAPER', badgeColor: '#2C3A8C', title: 'AI in Healthcare Systems', desc: 'Exploring the implementation of neural networks in predictive diagnostics.', link: 'Read Abstract', linkColor: '#2C3A8C' },
  { badge: 'FUNDED PROJECT', badgeColor: '#E56D24', title: 'Smart Grid Optimisation', desc: 'Developing efficient energy distribution algorithms for urban microgrids.', link: 'View Project', linkColor: '#E56D24' },
  { badge: 'PATENT PENDING', badgeColor: '#2C3A8C', title: 'Renewable Material Science', desc: 'Creating biodegradable polymer composites for industrial packaging.', link: 'Learn More', linkColor: '#2C3A8C' },
]

export default function Research() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EAE0D5' }} id="research">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16" data-animate>
          <div>
            <h2 className="section-title">Research & Innovation Spotlight</h2>
            <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)' }}>Driving technological advancement through dedicated research and academic excellence.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:border-brand-blue"
            style={{ border: '1px solid rgba(62,58,54,0.2)', color: '#3E3A36', whiteSpace: 'nowrap' }}
          >
            View All Papers →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {papers.map(({ badge, badgeColor, title, desc, link, linkColor }) => (
            <div
              key={title}
              data-animate
              className="p-8 rounded-2xl"
              style={{
                background: 'white',
                border: '1px solid rgba(62,58,54,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,58,140,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Pill badge */}
              <span
                className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest mb-5"
                style={{ background: `${badgeColor}14`, color: badgeColor, border: `1px solid ${badgeColor}28` }}
              >
                {badge}
              </span>
              <h4 className="font-display font-bold text-lg mb-3" style={{ color: '#3E3A36' }}>{title}</h4>
              <p className="text-sm mb-6" style={{ color: 'rgba(62,58,54,0.6)', lineHeight: 1.7 }}>{desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
                style={{ color: linkColor, letterSpacing: '0.08em' }}
              >
                {link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
