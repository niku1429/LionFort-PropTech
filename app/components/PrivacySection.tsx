import Image from "next/image";

export default function PrivacySection() {
  return (
    <section className="privacy-section">
      <div className="container">
        <div className="privacy-content">
          <p>
            <strong>Disclaimer - </strong>
            The main purpose of this website is to make people aware about
            different investment and trading avenues available to them, tools
            that can be used, etc. However, the success of all the strategies
            discussed herein depends on a variety of factors, internal as well
            as external to an individual. We do not claim that the strategies
            discussed herein will work in every environment. User discretion is
            solicited. We do not accept any responsibility towards a loss,
            financial or otherwise.
          </p>

          <a
            href="/images/Frame 1679.png"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-file"
          >
            <Image
              src="/images/Frame 1679.png"
              alt="Privacy Policy"
              width={220}
              height={60}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
