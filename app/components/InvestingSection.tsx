import Image from "next/image";

const reviews = [
  {
    title: "“You've taken me from zero knowledge to an informed investor.”",
    text: "Starting from scratch, your guidance made everything clear and practical. I feel fortunate to have a mentor like you. Thank you for everything.",
    name: "Elton Mathias",
    date: "12.12.2004",
  },
  {
    title: "“Financial Stability Achieved.”",
    text: "After learning from Bhooshan Sir, I was able to repay my home loan, build a strong personal portfolio, and secure my retirement.",
    name: "Elton Mathias",
    date: "12.12.2004",
  },
  {
    title: "“Understanding the Value of Time”",
    text: "I first learned the value of time in school, but truly understood it through derivatives with Bhooshan Sir—helping me earn and stay confident even in falling markets.",
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
      "Stop relying on star ratings and hot tips. This course provides a structured, professional approach to mutual fund investing by breaking down complex concepts into clear, actionable steps.",
  },
  {
    title: "Secrets Behind Nifty Moves",
    image: "/images/Frame 1676.png",
    reverse: true,
    description:
      "Learn over 30 years of Nifty's historical data to identify recurring patterns and understand market movements with confidence.",
  },
  {
    title: "Secrets Candlesticks Reveal",
    image: "/images/Frame 1677.png",
    reverse: false,
    description:
      "Understand candlestick psychology, identify trend reversals and improve your trading confidence using practical techniques.",
  },
  {
    title: "Masterclass in Intermarket Analysis",
    image: "/images/Frame 1678.png",
    reverse: true,
    description:
      "Understand how stocks, bonds, commodities and currencies influence one another and build a complete market perspective.",
  },
];

export default function InvestingSection() {
  return (
    <section className="investing-section">

      <div className="container">

        {/* Hero */}

        <div className="investing-hero">

          <div className="hero-left">

            <h2>
              Meet Your Mentor –
              <br />
              <span>Dr. Bhooshan Shanbhag</span>
            </h2>

            <p>
              Dr. Bhooshan Shanbhag is a seasoned investment strategist and
              educator who combines academic research with decades of practical
              market experience. His goal is to simplify investing and help
              every learner build wealth through discipline and knowledge.
            </p>

            <p>
              The Trading Classroom transforms difficult concepts into practical
              strategies suitable for beginners as well as experienced
              investors.
            </p>

          </div>

          <div className="hero-right">

            <Image
              src="/images/about-us-img.png"
              alt="mentor"
              width={620}
              height={480}
            />

          </div>

        </div>

        {/* Reviews */}

        <h2 className="section-title">
          Reviews of our loyal Customers
        </h2>

        <div className="review-grid">

          {reviews.map((review, index) => (

            <div className="review-card" key={index}>

              <h3>{review.title}</h3>

              <p>{review.text}</p>

              <div className="review-user">

                <Image
                  src="/images/profile-img.png"
                  alt="profile"
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

        {/* Courses */}

        <h2 className="section-title">
          Our Courses
        </h2>

        {courses.map((course, index) => (

          <div
            key={index}
            className={`course-row ${course.reverse ?  "" : "reverse"}`}
          >

            <div className="course-image">

              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={360}
              />

            </div>

            <div className="course-content">

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <button>Explore Now</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}