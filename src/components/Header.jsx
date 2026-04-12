import { useEffect, useRef } from 'react'

export default function Header() {
  const utilityBarRef = useRef(null)
  const mainHeaderRef = useRef(null)
  const mobileDrawerRef = useRef(null)
  const menuToggleRef = useRef(null)
  const iconOpenRef = useRef(null)
  const iconCloseRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50
      utilityBarRef.current?.classList.toggle('is-hidden', scrolled)
      mainHeaderRef.current?.classList.toggle('is-scrolled', scrolled)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = (force) => {
    const drawer = mobileDrawerRef.current
    const isOpen = typeof force === 'boolean' ? force : !drawer.classList.contains('is-open')
    drawer.classList.toggle('is-open', isOpen)
    menuToggleRef.current.setAttribute('aria-expanded', String(isOpen))
    drawer.setAttribute('aria-hidden', String(!isOpen))
    iconOpenRef.current.style.display = isOpen ? 'none' : ''
    iconCloseRef.current.style.display = isOpen ? '' : 'none'
  }

  const allLinks = [
    { label: 'About', href: 'https://about-tat.tekkzy.com/' },
    { label: 'Admissions', href: 'https://admissions-tat.tekkzy.com/' },
    { label: 'Academics', href: 'https://academics-tat.tekkzy.com/' },
    { label: 'Research', href: 'https://research-tat.tekkzy.com/' },
    { label: 'Campus Life', href: 'https://campuslife-tat.tekkzy.com/' },
    { label: 'Activities', href: 'https://activities-tat.tekkzy.com' },
    { label: 'Contact Us', href: 'https://contactus-tat.tekkzy.com' },
  ]

  return (
    <div className="fixed top-0 left-0 w-full z-[200]" id="siteHeaderWrap">
      {/* Utility Bar */}
      <div
        ref={utilityBarRef}
        className="bg-brand-blue border-b border-white/10 overflow-hidden transition-all duration-500"
        id="utilityBar"
        style={{ maxHeight: '44px' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-11 flex items-center justify-between">
          <span className="font-inter text-[11px] font-bold text-white/85 tracking-[0.15em] uppercase">
            Affiliated to BPUT &nbsp;<span className="text-white/30">|</span>&nbsp; NAAC 'A' Accredited
          </span>
          <div className="flex gap-6">
            <a href="https://alumni-tat.tekkzy.com/" className="font-inter text-[11px] font-bold text-white/90 tracking-[0.15em] uppercase flex items-center gap-1.5 hover:text-white transition-colors">
              <i className="ph ph-users-three"></i> Alumni
            </a>
          </div>
        </div>
        <style>{`.is-hidden { max-height: 0 !important; opacity: 0 !important; border-bottom: none !important; }`}</style>
      </div>

      {/* Main Header */}
      <header
        ref={mainHeaderRef}
        className="bg-white py-5 relative transition-all duration-500"
        id="mainHeader"
        style={{ transition: 'padding 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s ease' }}
      >
        <style>{`.is-scrolled { padding-top: 12px !important; padding-bottom: 12px !important; box-shadow: 0 4px 20px -4px rgba(15,23,42,0.12) !important; }`}</style>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 flex-shrink-0 no-underline">
            <img
              src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
              alt="TAT Logo"
              className="w-13 h-13 object-contain flex-shrink-0"
              style={{ width: 52, height: 52, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))' }}
            />
            <div className="flex flex-col justify-center">
              <span className="font-display text-[22px] font-black text-[#3E3A36] leading-none tracking-[0.04em] uppercase">Trident</span>
              <div className="w-full h-px my-0.5" style={{ background: 'linear-gradient(to right, #2C3A8C, transparent)' }}></div>
              <span className="font-inter text-[9px] font-bold text-brand-blue tracking-[0.22em] uppercase leading-none">Academy of Technology</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" aria-label="Primary navigation">
            <ul className="list-none flex items-center gap-6">
              {allLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="nav-item font-inter text-[13px] font-black tracking-[0.12em] uppercase text-[#3E3A36] no-underline hover:text-brand-blue transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="https://apply-now.tekkzy.com"
              className="font-inter text-xs font-black tracking-[0.12em] uppercase text-white bg-brand-red px-7 py-3 rounded no-underline whitespace-nowrap transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 14px rgba(230,57,70,0.35)' }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            ref={menuToggleRef}
            id="mobileMenuToggle"
            className="lg:hidden flex items-center justify-center bg-brand-blue/10 border-none rounded-lg p-2 text-brand-blue text-2xl cursor-pointer transition-all hover:bg-brand-blue/15 active:scale-95"
            aria-label="Toggle Menu"
            aria-expanded="false"
            onClick={() => toggleMenu()}
          >
            <i className="ph ph-list" ref={iconOpenRef}></i>
            <i className="ph ph-x" ref={iconCloseRef} style={{ display: 'none' }}></i>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          ref={mobileDrawerRef}
          id="mobileDrawer"
          aria-hidden="true"
          className="lg:hidden bg-white border-t border-brand-blue/10 overflow-hidden transition-all duration-500"
          style={{ maxHeight: 0, opacity: 0 }}
        >
          <style>{`
            #mobileDrawer.is-open { max-height: 85vh !important; opacity: 1 !important; padding: 24px 0 32px !important; }
            #mobileDrawer.is-open .mobile-nav-link { transform: translateX(0) !important; opacity: 1 !important; }
            #mobileDrawer.is-open .mobile-cta-wrap { transform: translateY(0) scale(1) !important; opacity: 1 !important; }
          `}</style>
          <div className="px-6 flex flex-col max-h-[calc(85vh-56px)] overflow-y-auto">
            {allLinks.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                className="mobile-nav-link block py-3.5 px-3 font-inter text-[15px] font-black uppercase tracking-[0.14em] text-[#3E3A36] border-b border-brand-blue/10 rounded-lg hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
                style={{
                  transform: 'translateX(-32px)',
                  opacity: 0,
                  transition: `color 0.3s, background 0.3s, transform 0.4s ease ${i * 0.04}s, opacity 0.4s ease ${i * 0.04}s`,
                }}
                onClick={() => toggleMenu(false)}
              >
                {label}
              </a>
            ))}
            <div
              className="mobile-cta-wrap pt-6"
              style={{ transform: 'translateY(32px) scale(0.95)', opacity: 0, transition: 'transform 0.5s ease 0.4s, opacity 0.5s ease 0.4s' }}
            >
              <a
                href="https://apply-now.tekkzy.com"
                className="block text-center font-inter text-[13px] font-black tracking-[0.18em] uppercase text-white bg-brand-red py-4 px-6 rounded-xl no-underline hover:bg-red-700 transition-colors"
                style={{ boxShadow: '0 10px 30px -10px rgba(230,57,70,0.5)' }}
                onClick={() => toggleMenu(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
