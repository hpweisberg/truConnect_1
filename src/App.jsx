import Hero from "./components/Hero"
import About from "./components/About"
import Qualifications from "./components/Qualifications"
import HowTo from "./components/HowTo"
import Faq from "./components/Faq"

import Hero2 from "./components/Hero2"
import Qualifications2 from "./components/Qualifications2"
import About2 from "./components/About2"
import HowTo2 from "./components/HowTo2"
import Faq2 from "./components/Faq2"
// import Faq3 from "./components/Faq3"




function App() {


  return (
    <section className="flex flex-col">
      {/* <Hero /> */}
      <Hero2 />
      {/* <About /> */}
      <About2 />
      {/* <Qualifications /> */}
      <Qualifications2 />
      {/* <HowTo /> */}
      <HowTo2 />
      {/* <Faq /> */}
      <Faq2 />
      {/* <Faq3 /> */}
    </section>
  )
}

export default App
