import Image from "next/image"
import CheckList from "./CheckList"

export type secProps = {
  title: string,
  span ?: string,
  desc: string|undefined,
  moreDesc ?: string[],
  imgUrl: any,
  reverse ?: boolean,
  servicePage ?: boolean
}


export default function LightSection({ secData }: {secData: secProps}) {
  return (
    <section className={`w-full ${secData.reverse && "bg-[#f0efed]/40"}`}>
      <div className={`max-ctn px-4 py-24 ${secData.servicePage && "py-40 max-sm:20"} sm:px-6 lg:px-8 m-auto`}>
        <div className={`flex flex-wrap-reverse lg:justify-between items-center gap-y-12 ${secData.reverse && 'flex-row-reverse'}`}>
          <div className="w-full max-w-lg relative">
            <Image 
              width={400} 
              className={`w-full ${secData.servicePage ? "rounded-none": "rounded-tl-3xl rounded-tr-[150px] rounded-bl-[150px] rounded-br-3xl"}`} 
              src={secData.imgUrl}
               alt="LORELEI-ELIZABETH-JOHN" />
          </div>

          <div className=" w-full max-w-xl lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h1 className={`font-bagero  ${secData.servicePage ? "text-5xl max-sm:text-[25px]" : "text-7xl max-sm:text-[50px]"}`}>
                  {secData.title}
                </h1>

                <p className="text-gray-700 text-lg py-4 leading-relaxed">
                  {secData.desc}
                </p>
              </div>

              {secData.moreDesc &&
              <ul role="list" className="space-y-2 sm:space-y-4">
                {secData.moreDesc.map((desc, i) =>
                <li className="flex space-x-3" key={i}>
                  <CheckList />

                  <span className="text-base text-gray-800 font-medium">
                    {desc}
                  </span>
                </li>
                )}
              </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
