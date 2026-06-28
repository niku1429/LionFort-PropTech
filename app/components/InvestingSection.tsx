import Image from "next/image";

const reviews = [
  {
    title: '"You\'ve taken me from zero knowledge to an informed investor."',
    text: "Starting from scratch, your guidance made everything clear and practical. I feel fortunate to have a mentor like you. Thank you for everything.",
    name: "Elton Mathias",
    date: "12.12.2004",
  },
  {
    title: '"Financial Stability Achieved."',
    text: "After learning from Bhooshan Sir, I was able to repay my home loan, build a strong personal portfolio, and secure my retirement.",
    name: "Elton Mathias",
    date: "12.12.2004",
  },
  {
    title: '"Understanding the Value of Time"',
    text: "I first learned the value of time in school, but truly understood it through derivatives with Bhooshan Sir--helping me earn and stay confident even in falling markets.",
    name: "Vijay",
    date: "12.12.2004",
  },
];

const courses = [
  {
    title: "A to Z of Mutual Funds",
    image: "/images/Frame 1675.png",
    reverse: false,
    description:
      'Stop relying on star ratings and "hot tips." This course provides a structured, professional approach to mutual fund investing by breaking down complex concepts into clear, actionable steps. Instead of focusing only on what to invest in, you\'ll understand how and why portfolios perform, helping you build, evaluate, and manage investments with long-term confidence.',
  },
  {
    title: "Secrets Behind Nifty Moves",
    image: "/images/Frame 1676.png",
    reverse: true,
    description:
      "This course is built on 30+ years of Nifty's historical data, analyzing economic cycles, global events, and structural shifts that have shaped the market. By going beyond surface-level trends, it reveals recurring patterns and deeper market mechanics, helping you understand not just where the index is moving, but the forces driving those movements.",
  },
  {
    title: "Secrets Candlesticks Reveal",
    image: "/images/Frame 1677.png",
    reverse: false,
    description:
      "Go beyond basic candlestick patterns and learn to interpret the psychology behind price movements. This course focuses on understanding the interaction between buyers and sellers through candle structure, enabling you to identify trend continuations and reversals with greater clarity and confidence.",
  },
  {
    title: "Masterclass in Intermarket Analysis",
    image: "/images/Frame 1678.png",
    reverse: true,
    description:
      "Develop a broader market perspective by understanding how different asset classes--stocks, bonds, commodities, and currencies--are interconnected. This course explains how shifts in one market influence another, helping you identify trend confirmations and position yourself ahead of major institutional moves.",
  },
];

export default function InvestingSection() {
  return (
    <section className="investing-section">
      <div className="container">
        <div className="investing-hero">
          <div className="hero-left">
            <h2>
              Meet Your Mentor -
              <br />
              <span>Dr. Bhooshan Shanbhag</span>
            </h2>

            <p>
              Dr. Bhooshan Shanbhag is a seasoned investment strategist and educator who combines the rigors of academic research with the precision of technical analysis. He has cleared the prestigious Chartered Market Technician (CMT) and Certified Financial Technician (CFTe) designations. Dr. Shanbhag moves beyond the &quot;noise&quot; of daily market fluctuations to focus on high-probability setups and intermarket relationships.
            </p>

            <p>
              The Trading Classroom, he simplifies complex concepts like Renko charts, options strategies, and REITs into actionable insights. Whether he is guiding seasoned traders or new investors, Dr. Shanbhag&apos;s mission is to empower his students with the technical edge and psychological discipline required to build sustainable, long-term wealth in the Indian and global markets.
            </p>
          </div>

          <div className="hero-right">
            <Image
              src="/images/about-us-img.png"
              alt="Dr. Bhooshan Shanbhag"
              width={620}
              height={480}
              priority
            />
          </div>
        </div>

        <h2 className="section-title">Reviews of our loyal Customers</h2>

        <div className="review-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.title}>
              <h3>{review.title}</h3>
              <p>{review.text}</p>
              <span className="quote-mark">&quot;</span>

              <div className="review-user">
                <Image
                  src="/images/profile-img.png"
                  alt="Customer profile"
                  width={55}
                  height={55}
                />

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title courses-title">Our Courses</h2>

        {courses.map((course) => (
          <div
            key={course.title}
            className={`course-row ${course.reverse ? "reverse" : ""}`}
          >
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>Explore Now</button>
            </div>

            <div className="course-image">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={360}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

