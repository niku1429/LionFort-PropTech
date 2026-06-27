import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Left Section */}
        <div className="footer-about">

          <Image
            src="/images/logo.png"
            alt="Logo"
            width={170}
            height={55}
          />

          <p>
            Helping families become financially confident through
            education, investing knowledge and practical guidance.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link href="#">About Us</Link>
          <Link href="#">Successful Investing</Link>
          <Link href="#">Parenting</Link>
          <Link href="#">Privacy Policy</Link>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>Email</p>
          <span>info@unibiz.com</span>

          <p>Phone</p>
          <span>+91 9876543210</span>

          <p>Location</p>
          <span>Pune, Maharashtra</span>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Unibiz. All Rights Reserved.
      </div>
    </footer>
  );
}