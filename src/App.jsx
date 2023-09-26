import Hero from "./components/Hero"
import About from "./components/About"
import Qualifications from "./components/Qualifications"
import HowTo from "./components/HowTo"
import Faq from "./components/Faq"

function App() {


  return (
    <section className="flex flex-col">
      <Hero />
      <About />
      <Qualifications />
      <HowTo />
      <Faq />
    </section>
  )
}

export default App
