import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-top">
          <div className="about-content">
            <h2>
              Meet Your Guide -
              <br />
              <span>Dr. Bhooshan Shanbhag</span>
            </h2>

            <p>
              A dedicated platform where the art of parenting meets the science
              of investing. We believe that building a prosperous future
              requires a holistic approach--nurturing the next generation&apos;s
              potential while simultaneously securing the financial foundation
              that supports their dreams. Whether you are looking to decode the
              complexities of the financial markets or seeking practical
              strategies to raise resilient, confident children, our expert-led
              courses provide the clarity and tools you need. By bridging the
              gap between wealth creation and mindful parenting, we empower
              families to grow both their portfolios and their legacies with
              purpose and confidence.
            </p>
          </div>

          <div className="about-image">
            <Image
              src="/images/about-us-img.png"
              alt="Dr. Bhooshan Shanbhag"
              width={600}
              height={500}
              priority
            />
          </div>
        </div>

        <div className="about-bottom">
          <p>
            Welcome to bhooshanshanbhag.com - The Trading Classroom, your
            comprehensive guide to the A to Z of Financial Markets. Led by
            Dr. Bhooshan Shanbhag, a dually certified CMT and CFTe, we bridge
            the gap between institutional-grade technical analysis and the
            individual investor. Our curriculum is designed to simplify the
            intricate world of intermarket relationships and mutual funds,
            providing you with a clear, structured roadmap to financial mastery.
          </p>

          <p>
            At The Trading Classroom, we believe that financial literacy is the
            ultimate empowerment. Founded by Dr. Bhooshan Shanbhag, our approach
            combines decades of academic rigor with real-world market
            experience. Whether we are deconstructing the nuances of REITs or
            guiding parents through &quot;The Gardener and The Architect&quot; philosophy
            of potential, we are dedicated to fostering growth. We don&apos;t just
            teach markets; we nurture the discipline and mindset required for
            lifelong success.
          </p>
        </div>
      </div>
    </section>
  );
}

