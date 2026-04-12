export default function Footer() {
  const academicsLinks = [
    { href: '#', label: 'Undergraduate Studies' },
    { href: '#', label: 'Postgraduate Studies' },
    { href: '#', label: 'Doctoral Programs' },
    { href: '#', label: 'Research Centers' },
    { href: '#', label: 'Academic Calendar' },
  ]

  const campusLinks = [
    { href: '#', label: 'Student Hostels' },
    { href: '#', label: 'Clubs & Societies' },
    { href: '#', label: 'Sports & Recreation' },
    { href: '#', label: 'Health & Wellness' },
    { href: '#', label: 'Campus Safety' },
  ]

  const resourcesLinks = [
    { href: '#', label: 'Admissions Portal' },
    { href: '#', label: 'Alumni Network' },
    { href: '#', label: 'Career Placements' },
    { href: '#', label: 'NIRF Data' },
    { href: '#', label: 'Tenders & Notices' },
  ]

  return (
    <footer className="footer-dark relative overflow-hidden pt-20 pb-0" id="mainFooter">
      {/* ─── Large Watermark — Bottom Right ─── */}
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] opacity-[0.05] pointer-events-none select-none z-0">
        <img
          src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
          alt=""
          className="w-full h-full object-contain grayscale brightness-200"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* ─── Newsletter Card ─── */}
        <div className="newsletter-card">
          <div className="max-w-md">
            <h3 className="newsletter-title">
              Stay informed,<br />
              stay <span className="text-brand-orange">ahead.</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.
            </p>
          </div>
          <div className="flex-1 max-w-lg w-full">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe <i className="ph ph-arrow-right"></i>
              </button>
            </div>
            <p className="mt-3 text-[10px] font-black tracking-widest text-white/30 uppercase">
              No Spam. Only updates that matter.
            </p>
          </div>
        </div>

        {/* ─── Main Footer Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Identity Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              {/* Colorful Logo Placeholder as per image */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 p-1">
                <img
                  src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
                  alt="Trident Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black text-white tracking-wider leading-none uppercase">Trident</span>
                <span className="font-inter text-[9px] font-bold text-white/30 tracking-[0.2em] uppercase mt-1">Academy of Technology</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/40 max-w-sm">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'ph ph-map-pin', text: 'F2/A, Chandaka Industrial Estate, In front of Infocity, Bhubaneswar, Odisha, Pin: 751024, India' },
                { icon: 'ph ph-phone', text: '+91 98611 91195' },
                { icon: 'ph ph-envelope-simple', text: 'info@trident.ac.in' }
              ].map((item, i) => (
                <div key={i} className="footer-contact-row group">
                  <div className="footer-contact-square">
                    <i className={item.icon}></i>
                  </div>
                  <span className="leading-snug pt-1">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h5 className="footer-heading">Academics</h5>
            <ul className="space-y-4">
              {academicsLinks.map(l => (
                <li key={l.label}><a href={l.href} className="footer-link hover:translate-x-1 transition-transform">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="footer-heading">Campus Life</h5>
            <ul className="space-y-4">
              {campusLinks.map(l => (
                <li key={l.label}><a href={l.href} className="footer-link hover:translate-x-1 transition-transform">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="footer-heading">Resources</h5>
            <ul className="space-y-4">
              {resourcesLinks.map(l => (
                <li key={l.label}><a href={l.href} className="footer-link hover:translate-x-1 transition-transform">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <span className="font-inter text-[10px] font-black tracking-[0.2em] text-white/20 uppercase">
                © 2026 TRIDENT ACADEMY OF TECHNOLOGY. ALL RIGHTS RESERVED.
              </span>
              <div className="flex gap-6">
                {['Privacy Policy', 'Disclaimer', 'Terms of Use'].map(l => (
                  <a key={l} href="#" className="font-inter text-[10px] font-black tracking-[0.15em] text-white/20 uppercase hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex gap-4">
                {['ph ph-facebook-logo', 'ph ph-twitter-logo', 'ph ph-linkedin-logo', 'ph ph-instagram-logo'].map((icon, i) => (
                  <a key={i} href="#" className="footer-social-link"><i className={icon}></i></a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/[0.03] text-center">
            <p className="font-inter text-[9px] font-medium tracking-[0.2em] text-white/10 uppercase">
              Crafted with AI by <span className="text-white/20 font-bold">Tekkzy</span> — AI-Powered Intelligent Cloud Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
