"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineSun } from "react-icons/hi2";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/images/Logo.png"
            alt="Unibiz Logo"
            width={170}
            height={55}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/investing">Successful Investing</Link></li>
            <li><Link href="/parenting">Parenting</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </nav>

        {/* Theme Icon */}
        <button className="theme-btn">
          <HiOutlineSun />
        </button>
      </div>
    </header>
  );
}