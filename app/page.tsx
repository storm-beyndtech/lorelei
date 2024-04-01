import { services, testimonies } from "@/utils/SecData"
import Hero from "./components/Hero"
import LightSection from "./components/LightSection"
import Mission from "./components/Mission"
import Nav from "./components/Nav"
import Services from "./components/Services"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
        <Nav />
        <Hero />
        <Mission />
        <Services />
        <Process />
        <LightSection secData={services}/>
        <Testimonials data={testimonies}/>
        <Footer />
    </>
  )
}
