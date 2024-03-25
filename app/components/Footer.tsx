import Image from "next/image";
import footerLogo from "../assets/footerLogo.svg";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pt-36 pb-4 bg-gray-900">
      <div className="max-ctn flex max-sm:flex-col justify-start sm:gap-10 max-sm:gap-20">
        <div className="max-w-[350px]">
          <a href="/">
            <Image src={footerLogo} alt="logo" width={100} />
          </a>

          <p className="mt-5 font-montserrat text-white/50 leading-6">
            Path to financial success through personalized coaching and expert guidance.
          </p>

          <div className="flex justify-start items-center gap-5 mt-5">
              <a href="https://x.com/lorelei_e_john/" className="flex justify-center items-center 
                text-white w-10 h-10 rounded-full border border-white">
                <BsTwitterX width={20} height={20} />
              </a>
              <a href="https://t.me/lorelei_elizabeth" className="flex justify-center items-center 
                text-white w-10 h-10 rounded-full border border-white">
              <FaTelegramPlane width={20} height={20} /> 
              </a>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-36 max-sm:gap-20">
          <div className="flex flex-col">
            <h4 className="text-xl font-medium text-white">Pages</h4>
              <a href="/about" className="text-white-400 text-base mt-3 
              font-montserrat leading-normal hover:text-gray-500">About</a>
              <a href="/services" className="text-white-400 text-base mt-3 
              font-montserrat leading-normal hover:text-gray-500">Services</a>
              <a href="/contact" className="text-white-400 text-base mt-3 
              font-montserrat leading-normal hover:text-gray-500">Contact</a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-24 gap-2 max-sm:flex-col max-sm:items-center">
        <p className="font-montserrat text-white/10 font-light">© Copyright. All rights reserved.</p>
      </div>
    </footer>
  )
}
