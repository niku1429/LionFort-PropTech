"use client";

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";

import { useTheme } from "./CTA";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link href="/" className="logo">
  <Image
    src={
      dark
        ? "/images/Unibiz.png"
        : "/images/Logo.png"
    }
    alt="Logo"
    width={210}
    height={70}
    priority
  />
</Link>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/investing">Successful Investing</Link></li>
            <li><Link href="/parenting">Parenting</Link></li>
            <li><Link href="/privacy_and_policy">Privacy Policy</Link></li>
            <li><Link href="/terms_and_conditions">Contact</Link></li>
          </ul>
        </nav>

        {/* Theme Icon */}
        <button
  className="theme-btn"
  onClick={() => setDark(!dark)}
>
  {dark ? <HiOutlineMoon /> : <HiOutlineSun />}
</button>
      </div>
    </header>
  );
}