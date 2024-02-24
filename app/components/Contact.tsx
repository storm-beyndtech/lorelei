
export default function Contact() {
  return (
    <div className="max-ctn py-14">
      <h1 className="font-panchang text-[11vw] font-medium text-[#171717] text-center">CONTACT</h1>

      <div className="w-full flex justify-between">
        <form className="w-full max-w-lg flex flex-col">
          <div className="flex-auto">
            <label htmlFor="name" className="label">Name</label>
            <input value="" placeholder="Jane Doe" id="name" className="input" required/>
          </div>

          <div className="flex-auto">
            <label htmlFor="email" className="label">Email</label>
            <input value="" placeholder="example@gmail.com" id="email" className="input" required/>
          </div>

          <div className="flex-auto">
            <label htmlFor="phone" className="label">Phone</label>
            <input value="" placeholder="+234 80 8693 1101" id="phone" className="input" required/>
          </div>

          <div className="flex-auto">
            <label htmlFor="message" className="label">Message</label>
            <textarea value="" placeholder="Enter your message" id="message" className="input" required/>
          </div>
        </form>


        <p className="desc max-w-md">
          For efficient communication, reach out to us via email - beyndtech@gmail.com. 
          Alternatively, you can connect with us on our social media platforms (@beyndtech) 
          or send us a message on WhatsApp by clicking the button at the top right.
        </p>
      </div>
    </div>
  )
}
