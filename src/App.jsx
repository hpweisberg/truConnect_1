import { useState } from "react"

import About2 from "./components/About2"
import Hero2 from "./components/Hero2"
import HowTo2 from "./components/HowTo2"
import Qualifications2 from "./components/Qualifications2"

import Faq3 from "./components/Faq3"

import PopUp from "./components/PopUp"



function App() {
  const [open, setOpen] = useState(false)


  function scrollToSection(id, offset = 110) {
    const element = document.getElementById(id);
    console.log(offset)
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: yOffset + offset,
        behavior: 'smooth',
      });
    }
  }

  const openPopUp = () => {
    setOpen(!open)
  }

  return (
    <section className="flex flex-col">
      {/* <Hero /> */}
      <PopUp openPopUp={openPopUp} open={open} />
      <Hero2 scrollToSection={scrollToSection} openPopUp={openPopUp} />
      {/* <About /> */}
      <About2 openPopUp={openPopUp} />
      {/* <Qualifications /> */}
      <Qualifications2 openPopUp={openPopUp} />
      {/* <HowTo /> */}
      <HowTo2 openPopUp={openPopUp} />
      {/* <Faq /> */}
      {/* <Faq2 /> */}
      <Faq3 openPopUp={openPopUp} />
    </section>
  )
}

export default App
