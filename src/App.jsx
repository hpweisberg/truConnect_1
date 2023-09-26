import Hero from "./components/Hero"
import About from "./components/About"
import Qualifications from "./components/Qualifications"
import HowTo from "./components/HowTo"
import Faq from "./components/Faq"

import Hero2 from "./components/Hero2"
import Qualifications2 from "./components/Qualifications2"

function App() {


  return (
    <section className="flex flex-col">
      {/* <Hero /> */}
      <Hero2 />
      <About />
      {/* <Qualifications /> */}
      <Qualifications2 />
      <HowTo />
      <Faq />
    </section>
  )
}

export default App
