import Header from './components/Header'
import Hero from './components/Hero'
import Clubs from './components/Clubs'
import Leadership from './components/Leadership'
import Sports from './components/Sports'
import Events from './components/Events'
import Innovation from './components/Innovation'
import Milestones from './components/Milestones'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Global Effects */}
      <div className="noise-overlay" />

      {/* Page Structure */}
      <Header />

      <main>
        <Hero />
        <hr className="gradient-divider" />

        <Clubs />
        <hr className="gradient-divider" />

        <Events />
        <hr className="gradient-divider" />

        <Sports />
        <hr className="gradient-divider" />

        <Innovation />
        <hr className="gradient-divider" />

        <Leadership />
        <hr className="gradient-divider" />

        <Milestones />
      </main>

      <Footer />
    </>
  )
}
