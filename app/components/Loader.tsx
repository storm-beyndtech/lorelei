"use client"
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  })


  if(loading) return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black flex items-center justify-center">
      <Logo />
    </div>
  )
}
