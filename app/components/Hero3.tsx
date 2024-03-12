import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImg from "../assets/lorelei_elisabeth_john_7.jpg"
import Button from "../components/Button"

export default function Hero3() {


  return (
    <section 
      id="home"
      className="w-full flex flex-col justify-center min-h-screen gap-10 px-3 sm:pl-16 xl:flex-row max-md:gap-5">
        <div className="relative w-full flex flex-col justify-center items-start xl:w-2/4 max-xl:pad-x pt-10 max-md:pt-28">
          <h1 className="font-bagero text-[80px] max-md:text-[12vw]">
            <span className="xl:bg-white/70 xl:whitespace-nowrap relative z-20 pr-10 rounded-3xl">About  
              <span className="text-coral-red"> Me</span>
            </span>
          </h1>
          <p className="w-[500px] max-xl:w-full text-slate-gray text-lg max-sm:text-base leading-7 max-md:mt-7 mb-8">
            Unlock your inner potential with me as your guide; true success emanates from within, not from external sources.
          </p>

          <a href="https://brokercheck.finra.org/individual/summary/5969323">
            <Button 
              label={"More details"} 
              imgURL={IoIosArrowRoundForward} bgColor="coral-red" textColor="white"/> 
          </a>
        </div>

        <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-md:py-20">
          <Image src={heroImg} 
            alt="Lorelei Elisabeth John" width={400}
            className="w-full object-contain relative z-10 rounded-bl-[300px] max-sm:rounded-bl-[150px]"
          />
        </div>
      </section>
  )
}
