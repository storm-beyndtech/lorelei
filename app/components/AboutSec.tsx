import Button from "./Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function AboutSec() {
  return (
    <section className="w-full bg-[#f0efed]/40">
      <div className="max-ctn min-h-screen flex justify-between items-center flex-wrap-reverse max-md:gap-14 py-14">
        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-5xl max-sm:text-[40px]">
            About Me
          </h1>
          <p className='desc mb-5'>
            With over a decade of experience managing portfolios exceeding $9.17 billion for 600 clients, I prioritize security and profit maximization. Trust in my expertise to deliver exceptional results, safeguarding your investments with meticulous care.
          </p>

          <p className='desc mb-5'>
            With a proven track record, I combine strategic insight with tailored approaches to meet your financial goals effectively. Rest assured, your investments are in capable hands, dedicated to maximizing returns while minimizing risks.
          </p>
        </div>
        
        <div className="w-full max-w-lg text-black">
          <h1 className="font-bagero text-5xl max-sm:text-[40px]">
            Experience
          </h1>
          <p className='desc mb-5'>
            Having collaborated with 600+ clients across 23 counties spanning 4 continents, I've learned that success knows no bounds, and its foundations lie within each individual, regardless of origin.
          </p>

          <p className='desc mb-5'>
            My commitment extends beyond mere satisfaction; I relentlessly pursue my clients' financial objectives until they are accomplished. This unwavering dedication has become my signature in the industry, ensuring no one is left behind in achieving their goals.
          </p>
        </div>

      </div>
    </section>
  )
}
