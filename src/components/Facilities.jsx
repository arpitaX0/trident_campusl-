import { useEffect, useRef } from 'react'

const facilities = [
  { img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', icon: 'ph ph-books', title: 'Central Library', desc: 'A sprawling repository with over 100,000 volumes, private study pods, and digital journals.', wide: true },
  { img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: 'ph ph-coffee', title: 'Cafeteria & Dining', desc: '', wide: false },
  { img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: 'ph ph-wifi-high', title: 'Campus Quadrangles', desc: '', wide: false },
  { img: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', icon: 'ph ph-barbell', title: 'Athletics & Wellness', desc: '', wide: false },
  { img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', icon: 'ph ph-flask', title: 'Research Hub', desc: '', wide: true },
]

export default function Facilities() {
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
    /* Reference: solid purple background */
    <section
      ref={sectionRef}
      className="py-[100px]"
      style={{ background: '#EFEBE6' }}
      id="vibe"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-14" data-animate>
          <div>
            <h2 className="section-title">World-Class Campus Facilities</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(0,0,0,0.65)' }}>
            Every corner of Trident Academy is designed to inspire — from cutting-edge laboratories to serene reading halls and vibrant open-air quadrangles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {facilities.map(({ img, icon, title, desc }, i) => (
            <div
              key={title}
              data-animate
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${(i === 0 || i === 3 || i === 4) ? 'md:col-span-2' : 'md:col-span-1'}`}
              style={{ height: 300 }}
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15,10,30,0.85) 0%, transparent 55%)' }}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}
                  >
                    <i className={icon}></i>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">{title}</h3>
                </div>
                {desc && <p className="text-white/65 text-sm mt-2">{desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
