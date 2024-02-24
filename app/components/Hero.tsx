import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImg from "../assets/lorelei_elizabeth_john_3.jpg"
import Button from "../components/Button"

export default function Hero() {


  return (
    <section 
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 px-3 sm:pl-16 xl:flex-row max-md:gap-5">
        <div className="relative w-full flex flex-col justify-center items-start xl:w-2/4 pt-20 max-md:pt-36">
          <h1 className="font-bagero text-[80px] max-md:text-[15vw]">
            <span className="inline-block max-md:mb-7">Lorelei</span>
            <br />
            <span className="max-md:text-coral-red xl:bg-white/70 xl:whitespace-nowrap relative z-20 pr-10 rounded-3xl max-md:pl-[5vw]">Elizabeth 
              <span className="text-coral-red max-md:text-black max-md:inline-block mt-7 max-md:pl-[-3vw]"> John</span>
            </span>
          </h1>
          <p className="w-[500px] max-xl:w-full text-slate-gray text-lg max-sm:text-base leading-7 max-md:mt-7 mb-8">
          Path to financial success through personalized coaching and expert guidance.
          </p>

          <Button 
            label={"Start today!"} 
            imgURL={IoIosArrowRoundForward} bgColor="coral-red" textColor="white"/>
        </div>

        <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-md:py-20">
          <Image src={heroImg} 
            alt="Lorelei Elizabeth John" width={400}
            className="w-full object-contain relative z-10 rounded-bl-[300px] max-sm:rounded-bl-[150px]"
          />
        </div>
      </section>
  )
}
