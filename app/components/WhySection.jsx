const features = [
  {
    title: "Integrated Growth",
    description:
      "We treat financial literacy and character building as two sides of the same coin.",
  },
  {
    title: "Expert Foundations",
    description:
      "Our programs are built on professional certification standards and real-world experience.",
  },
  {
    title: "Actionable Insights",
    description:
      "From technical market analysis to emotional intelligence in children, we provide step-by-step guidance.",
  },
  {
    title: "Future-Focused",
    description:
      "Everything we do is designed to create a lasting, multi-generational impact for your family.",
  },
];

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">
          Why Our Approach Is Different
        </h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="why-btn">
          <button>Join Free Webinar</button>
        </div>
      </div>
    </section>
  );
}