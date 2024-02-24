import Image from "next/image";
import logo from '../assets/logoWrp.svg'
import flames from '../assets/flames.svg'

export default function Logo() {
  return (
    <div className="relative">
      <Image src={logo}  alt="logo" width={150} height={40}/>
      <Image src={flames}  alt="flames" className="flames"/>
    </div>
  )
}

