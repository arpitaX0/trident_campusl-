import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Clubs from './components/Clubs'
import Leadership from './components/Leadership'
import Sports from './components/Sports'
import Research from './components/Research'
import Events from './components/Events'
import Innovation from './components/Innovation'
import Facilities from './components/Facilities'
import Milestones from './components/Milestones'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Global Effects */}
      <div className="noise-overlay" />
      <Cursor />

      {/* Page Structure */}
      <Header />

      <main>
        <Hero />
        <hr className="gradient-divider" />

        <Clubs />
        <hr className="gradient-divider" />

        <Leadership />
        <hr className="gradient-divider" />

        <Sports />
        <hr className="gradient-divider" />

        <Research />
        <hr className="gradient-divider" />

        <Events />
        <hr className="gradient-divider" />

        <Innovation />
        <hr className="gradient-divider" />

        <Facilities />

        <Milestones />
      </main>

      <Footer />
    </>
  )
}
