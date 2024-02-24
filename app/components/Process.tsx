import Image from "next/image";
import agreementImg from "../assets/Agreement.svg"
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Process() {
  return (
    <section className="w-full bg-[#f0efed]/40">
      <div className="max-ctn min-h-screen flex justify-between items-center flex-wrap py-14 max-md:gap-14">
        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-7xl max-sm:text-[50px]">
            Process
          </h1>
          <p className='desc mb-7'>
          With a decade-long career, I&apos;ve adeptly managed portfolios surpassing $9.17 billion, serving 600 clients. Prioritizing investment security and profit maximization, trust in my expertise to deliver exceptional results, safeguarding your investments with meticulous care.
          </p>
          <Button 
            label={"Start today!"} 
            imgURL={IoIosArrowRoundForward} 
            borderColor="coral-red" textColor="black" bgColor="bg-none"/>
        </div>

        <div className="w-full max-w-xl relative">
          <Image className="w-full" src={agreementImg} alt="Lorelei Elizabeth John" width={500}/>
        </div>
      </div>
    </section>
  )
}
