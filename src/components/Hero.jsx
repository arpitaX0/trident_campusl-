import { useEffect, useRef } from 'react'

export default function Hero() {
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

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Students Collaborating',
      style: { top: 0, left: 0, width: '55%', height: '50%' },
      delay: '0s',
    },
    {
      src: 'https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Campus Life',
      style: { top: '4%', right: 0, width: '42%', height: '43%' },
      delay: '0.1s',
    },
    {
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Friends on Campus',
      style: { bottom: 0, left: '4%', width: '42%', height: '46%' },
      delay: '0.15s',
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Tech Lab',
      style: { bottom: '4%', right: 0, width: '54%', height: '53%' },
      delay: '0.2s',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
      style={{ background: '#EFE7DF', paddingTop: 160, paddingBottom: 100 }}
      id="activities"
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div data-animate>

          {/* Headline — "Passion" blue, "Creativity" orange, matching reference */}
          <h1
            className="font-display font-bold leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)', color: '#3E3A36' }}
          >
            Ignite Your <br />
            <span style={{ color: '#2C3A8C' }}>Passion &amp;</span>
            <br />
            <span style={{ color: '#E56D24' }}>Creativity</span>
          </h1>

          <p className="text-lg leading-[1.75] mb-10" style={{ color: 'rgba(62,58,54,0.7)', maxWidth: '90%' }}>
            Discover a vibrant ecosystem of over 20+ student-led clubs. At TAT, we don't
            just teach technology; we nurture the innovators, performers, and leaders of tomorrow.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 mb-12 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#2C3A8C', boxShadow: '0 4px 16px rgba(44,58,140,0.3)' }}
            >
              Explore Opportunities
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:border-brand-blue"
              style={{ background: 'transparent', border: '1px solid rgba(62,58,54,0.25)', color: '#3E3A36' }}
            >
              View Calendar
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: 'ph-fill ph-users-three', label: '20+ Active Clubs' },
              { icon: 'ph-fill ph-confetti', label: '15+ Annual Events' },
              { icon: 'ph-fill ph-basketball', label: '10+ Sports Facilities' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{
                  background: '#F5EEEC',
                  border: '1px solid rgba(62,58,54,0.1)',
                  borderLeft: '2px solid #2C3A8C',
                  color: '#3E3A36',
                  boxShadow: '-2px 0 10px rgba(44,58,140,0.08)',
                }}
              >
                <span style={{ color: '#2C3A8C', fontSize: '1.2rem' }}><i className={icon}></i></span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right Collage */}
        <div className="hidden lg:block relative" style={{ height: 540 }}>
          {images.map(({ src, alt, style, delay }) => (
            <div
              key={alt}
              data-animate
              className="absolute rounded-2xl overflow-hidden"
              style={{
                ...style,
                transitionDelay: delay,
                border: '6px solid rgba(62,58,54,0.12)',
                background: '#EFE7DF',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
