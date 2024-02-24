import ServiceCard from "./ServiceCard";
import { serviceCards } from "@/utils/SecData"; 

export default function Services() {
  return (
    <section className="max-ctn bg-[#f0efed]/40 px-4 py-20 flex justify-center items-center flex-wrap gap-9">
      {serviceCards.map((service, i) =>
        <ServiceCard {...service} key={i}/>
      )}
    </section>
  )
}