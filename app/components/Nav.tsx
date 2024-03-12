"use client"
import Image from 'next/image';
import logo from '../assets/logo.svg';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [menu, setMenu] = useState(false)
  const [showBg, setShowBg] = useState(false)


  const closeMenu = () => {
    setMenu(false)
  }
  const openMenu = () => {
    setMenu(true)
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${showBg && "ctnBg"} ${"ctn"} px-16 max-md:px-0`}>
      <div className="wrp">
        <Link href='/' className={logo}>
          <Image src={logo} alt="Lorelei Elisabeth John" width={100}/>
        </Link>

        <div className="menu" onClick={closeMenu} style={menu? {right: '0'} : {}}>
          <GrClose className="close"/>
          <Link href='/about'>About</Link>
          <Link href='/service'>Service</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <HiMenuAlt3 className="open" onClick={openMenu}/>
      </div>
    </div>
  );
}
