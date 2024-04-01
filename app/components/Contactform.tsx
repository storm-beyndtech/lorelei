"use client";
import { useState } from "react";
import { countries } from "@/utils/countries";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((cty) => cty.code === e.target.value);

    if (country) {
      setSelectedCountry(country.name);
      setCountryCode(country.code);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    console.log(firstName, lastName, email, phoneNumber, selectedCountry)

    if (
      firstName.length < 3 ||
      !email.includes("@") ||
      email.length < 7 ||
      phoneNumber.length < 3 ||
      message.length < 3 ||
      selectedCountry === "none"
    )
      return setError("Enter all fields properly...");

    const contactDetails = {
      name: firstName + " " + lastName,
      country: selectedCountry,
      phone: `${countryCode}${phoneNumber}`,
      email,
      message,
    };

    try {
      setLoading(true);

      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactDetails),
      });

      const data = await res.json();
      
      if (res.ok) {
        setSuccess("Mail Sent Successfully");
        setLoading(false);
      } else throw new Error(data.message);
    } catch (err: any) {
      setError("Something went wrong, try again later...");
      setLoading(false);
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setMessage("");
    setSelectedCountry("none");
    setCountryCode("");
  };

  return (
    <div className="bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl text-gray-500">
          Contact <span className="text-coral-red">Me</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-14">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-[70px] h-full rounded-md border-0 bg-transparent bg-none px-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  onChange={handleCountryChange}
                >
                  {countries.map((country, i) => (
                    <option key={i} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>

        </div>
          {error && (
            <div
              className="w-full p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50"
              role="alert"
            >
              <span className="font-medium">{error}</span>
            </div>
          )}

          {success && (
            <div
              className="w-full p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50"
              role="alert"
            >
              <span className="font-medium">{success}</span>
            </div>
          )}

        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "Loading..." : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}
