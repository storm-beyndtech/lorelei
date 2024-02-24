import Image from "next/image";
import processImg from "../assets/Processing.svg"
import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Mission() {
  return (
    <section className="w-full bg-[#f0efed]/40">
      <div className="max-ctn min-h-screen flex justify-between items-center flex-wrap-reverse max-md:gap-14 py-14">
        <div className="w-full max-w-lg relative">
          <Image className="w-full" src={processImg} alt="Lorelei Elizabeth John" width={500}/>
        </div>

        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-7xl max-sm:text-[50px]">
            Mission
          </h1>
          <p className='desc mb-7'>
            Our mission is to simplify software, prioritize user experience, and offer affordable, industry-standard solutions. 
            Our expert engineering team ensures seamless integration, meeting the diverse needs of our clients.
          </p>
          <Button 
            label={"Start today!"} 
            imgURL={IoIosArrowRoundForward} 
            borderColor="coral-red" textColor="black" bgColor="bg-none"/>
        </div>
      </div>
    </section>
  )
}
