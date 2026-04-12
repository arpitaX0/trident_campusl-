import { useEffect, useRef } from 'react'

const labs = [
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/prog_computer_science.jpg', title: 'Advanced Software Lab', delay: 100 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_innovation_lab.jpg', title: 'IoT Innovation Center', delay: 200 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_research_scholars.jpg', title: 'Startup Incubation Hub', delay: 300 },
]

export default function Innovation() {
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
    /* Reference: dark/near-black background section */
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#0a0b1a' }} id="innovation">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-14" data-animate>
          <div>
            <p
              className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-4"
              style={{ color: '#E56D24' }}
            >
              CUTTING-EDGE INFRASTRUCTURE
            </p>
            <h2 className="section-title-light">Innovation & Incubation Labs</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            State-of-the-art facilities bridging the gap between academic learning and industry demands — where ideas become reality.
          </p>
        </div>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Hero Image */}
          <div
            data-animate
            className="rounded-3xl overflow-hidden"
            style={{ height: 420 }}
          >
            <img
              src="https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/indian_engineering_lab.png"
              alt="AI & Robotics Lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lab list */}
          <div className="flex flex-col gap-4">
            {labs.map(({ img, title, delay }) => (
              <div
                key={title}
                data-animate
                className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  transitionDelay: `${delay}ms`,
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(107,77,255,0.4)'
                  e.currentTarget.style.background = 'rgba(107,77,255,0.08)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <img src={img} alt={title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <h3 className="font-display font-bold text-base" style={{ color: 'white' }}>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
