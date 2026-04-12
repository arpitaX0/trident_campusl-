import { useEffect, useRef } from 'react'

const events = [
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg',
    badge: 'ANNUAL EVENT',
    badgeBg: '#E56D24',
    title: 'Trifest',
    desc: 'The flagship annual cultural celebration; arts, music, and the diverse spirit of Trident.',
    link: 'RELIVE THE MEMORIES',
    linkColor: '#E56D24',
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg',
    badge: 'TECH CONCLAVE',
    badgeBg: '#2C3A8C',
    title: 'Technotrix',
    desc: 'The ultimate challenge for young minds to solve real-world problems through technology.',
    link: 'EXPLORE PROJECTS',
    linkColor: '#2C3A8C',
  },
]

export default function Events() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="events">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-14" data-animate>
          <h2 className="section-title">Legacy Events</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(({ img, badge, badgeBg, title, desc, link, linkColor }) => (
            <div
              key={title}
              data-animate
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: 420 }}
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15,15,30,0.88) 0%, rgba(15,15,30,0.1) 55%)' }}
              />

              {/* Top badge pill */}
              <div
                className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-white"
                style={{ background: badgeBg }}
              >
                {badge}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display font-bold text-3xl text-white mb-2">{title}</h3>
                <p className="text-white/70 text-sm mb-5">{desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-black tracking-[0.15em] uppercase transition-all"
                  style={{ color: linkColor }}
                >
                  {link} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
