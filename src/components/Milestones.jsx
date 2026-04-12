import { useEffect, useRef } from 'react'

const milestones = [
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg', tag: 'TECHNOLOGY', title: 'National Tech Symposium', desc: 'Annual gathering of tech enthusiasts across the country.', cta: 'Register' },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg', tag: 'CULTURE', title: "Cultural Fest 'Dhwani'", desc: 'Inter-college cultural extravaganza and competitions.', cta: 'Learn More' },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/discover_graduation.jpg', tag: 'ALUMNI', title: 'Alumni Meet 2024', desc: 'Reconnecting past graduates with the campus.', cta: 'RSVP Now' },
]

export default function Milestones() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="milestones">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-14" data-animate>
          <div>
            <h2 className="section-title">Upcoming Milestones</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(62,58,54,0.65)' }}>
            Key moments that define the Trident experience — from innovation summits to cultural celebrations and alumni reunions. Don't miss a beat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map(({ img, tag, title, desc, cta }) => (
            <div
              key={title}
              data-animate
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: 400 }}
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(20,20,25,0.95) 0%, rgba(20,20,25,0.2) 60%)' }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="block font-inter font-black text-[10px] tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {tag}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{title}</h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#111' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
                >
                  {cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
