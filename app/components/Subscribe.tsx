import Button from "../components/Button";

export default function Subscribe() {
  return (
    <section className="pad-x sm:py-32 py-16 w-full flex justify-between 
    items-center gap-8 max-lg:flex-col">
      <h2 className="text-[30px] font-palanquin font-bold max-sm:text-center lg:w-[400px]">
        Sign up for <span className="text-coral-red"> updates </span>  & newsletter
      </h2>

      <div className="flex items-center justify-end p-[5px] gap-5 sm:border sm:border-gray-500 max-sm:flex-col rounded-full w-full sm:w-[450px]">
        <input type="text" placeholder="example@gmail.com" className="input" />
        <Button label="Sign up" fullWidth="max-sm:w-full"/>
      </div>
    </section>
  )
}
