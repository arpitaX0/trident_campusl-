import { useEffect, useRef } from 'react'

const clubs = [
  { img: 'assets/club_theatre_1775284777707.png', icon: 'ph ph-mask-happy', name: 'Drama & Theatre', desc: 'Where expressions find their stage.', delay: 0 },
  { img: 'assets/club_music_1775284853863.png', icon: 'ph ph-music-note', name: 'The Melody Hub', desc: "We don't do noise, we play art.", delay: 80 },
  { img: 'assets/club_dance_1775284873092.png', icon: 'ph ph-guitar', name: 'Rhythm Squad', desc: 'Contemporary and folk dance forms.', delay: 160 },
  { img: 'assets/club_arts_1775284893434.png', icon: 'ph ph-paint-brush', name: 'Arts & Crafts', desc: 'Canvas, clay, and visual storytelling.', delay: 240 },
  { img: 'assets/club_robot_1775284912133.png', icon: 'ph ph-robot', name: 'Robo-Trident', desc: 'Building the future, one gear at a time.', delay: 320 },
  { img: 'assets/club_code_1775285013076.png', icon: 'ph ph-code', name: 'Code Wizards', desc: 'Algorithms, hackathons, and coffee.', delay: 400 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_innovation_lab.jpg', icon: 'ph ph-wifi-high', name: 'IoT Explorers', desc: 'Connecting things to change the world.', delay: 480 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/indian_business_presentation.png', icon: 'ph ph-device-mobile', name: 'App Genesis', desc: 'Mobile innovations for modern life.', delay: 560 },
]

export default function Clubs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="clubs">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-16" data-animate>
          <div>
            <h2 className="section-title">Athenaeum of Clubs</h2>
            <p className="text-lg" style={{ color: 'rgba(62,58,54,0.6)' }}>Find your tribe among our diverse specialized student organizations.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
            style={{ border: '1px solid rgba(62,58,54,0.2)', color: '#3E3A36' }}
          >
            View All 24 Clubs <i className="ph ph-arrow-right"></i>
          </a>
        </div>

        {/* Grid — reference style: image top, white card bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {clubs.map(({ img, icon, name, desc, delay }) => (
            <div
              key={name}
              data-animate
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                transitionDelay: `${delay}ms`,
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,58,140,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              {/* Image top */}
              <div className="overflow-hidden" style={{ height: 200 }}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* White content bottom */}
              <div className="p-5">
                {/* Circle icon badge */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(44,58,140,0.06)', color: '#2C3A8C', fontSize: '1.1rem' }}
                >
                  <i className={icon}></i>
                </div>
                <h4 className="font-display font-bold text-base mb-1" style={{ color: '#3E3A36' }}>{name}</h4>
                <p className="text-sm" style={{ color: 'rgba(62,58,54,0.55)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
