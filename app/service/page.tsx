import { agriculture, gold, realEstate, testimonies, trading } from "@/utils/SecData"
import Hero2 from "../components/Hero2"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import LightSection from "../components/LightSection"

export default function service() {
  return (
    <>
      <main className="">
        <Nav />
        <Hero2 />
        <LightSection secData={trading} />
        <LightSection secData={realEstate} />
        <LightSection secData={agriculture} />
        <LightSection secData={gold} />
        <Footer />
      </main>
    </>
  )
}
