"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HiOutlineBars3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineXMark,
} from "react-icons/hi2";

import { useTheme } from "./CTA";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/investing", label: "Successful Investing" },
  { href: "/parenting", label: "Parenting" },
  {
    href: "/privacy_and_policy",
    label: "Privacy Policy",
    mobileLabel: "Privacy and Policy",
  },
];

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image
            src={dark ? "/images/White-Logo.png" : "/images/Black-Logo.png"}
            alt="Unibiz"
            width={210}
            height={70}
            priority
          />
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle color theme"
          >
            {dark ? <HiOutlineMoon /> : <HiOutlineSun />}
          </button>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.mobileLabel ?? link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
