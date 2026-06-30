import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-image">
          <Image
            src="/images/img.png"
            alt="Happy family"
            width={600}
            height={550}
            priority
          />
        </div>

        <div className="hero-content">
          <h1>
            Welcome  
            to bhooshanshanbhag.com
          </h1>

          <p>
            A dedicated platform where the art of parenting meets the science of
            investing. We believe that building a prosperous future requires a
            holistic approach--nurturing the next generation&apos;s potential while
            simultaneously securing the financial foundation that supports their
            dreams. Whether you are looking to decode the complexities of the
            financial markets or seeking practical strategies to raise resilient,
            confident children, our expert-led courses provide the clarity and
            tools you need. By bridging the gap between wealth creation and
            mindful parenting, we empower families to grow both their portfolios
            and their legacies with purpose and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

