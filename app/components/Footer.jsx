"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "./CTA";

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/investing">Webinar</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>

          <Link href="/privacy_and_policy">Privacy Policy</Link>
          <Link href="#">Terms and Conditions</Link>
          <Link href="/privacy_and_policy">Disclaimer</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>Email :</p>

          <a href="mailto:support@alsdhoidgonb.com">
            support@alsdhoidgonb.com
          </a>
        </div>

        <div className="footer-logo">
          <Image
            src={dark ? "/images/White-Logo.png" : "/images/Black-Logo.png"}
            alt="Unibiz"
            width={260}
            height={80}
          />
        </div>

      </div>

      <div className="footer-bottom">
        Powered by <span>Unibiz</span> | All rights reserved.
      </div>

    </footer>
  );
}
