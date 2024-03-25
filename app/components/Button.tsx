
interface ComponentProps {
  label: string;
  imgURL ?: any;
  bgColor ?: string;
  borderColor ?: string;
  textColor ?: string;
  fullWidth?: string;
  href?: string;
}

export default function Button({href, label, imgURL:ImageURL, bgColor, borderColor, textColor, fullWidth }:ComponentProps){
  return (
    <a href={`${href}`} className={`
      flex justify-right items-center gap-6 py-4 px-4 pl-9 leading-none ${fullWidth ? `${fullWidth}` : "w-fit"}
      rounded-full border-[1.5px] text-[15px] cursor-pointer hover:bg-orange-700 hover:text-white
      bg-${bgColor} border-${borderColor} text-${textColor}`}>

      { label }

      {ImageURL && 
      <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
        <ImageURL color="#2d2d2d" size="20px"/>
      </span>
      }
    </a>
  )
}
