import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CitySection, { sections } from './components/CitySection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Navbar />
      <main className="[scroll-behavior:smooth]">
        <Hero />
        {sections.map((s) => (
          <CitySection key={s.id} {...s} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App
