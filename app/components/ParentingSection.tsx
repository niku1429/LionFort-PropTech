import Image from "next/image";

const signature = "~ Dr. Bhooshan Shanbhag (PhD, CMT, CFTe)";

export default function ParentingSection() {
  return (
    <section className="parenting-section">
      <div className="container">
        <h1 className="parenting-title">
          How to Nurture Your Child&apos;s
          <br />
          Hidden Potential.
        </h1>

        <div className="parenting-row">
          <div className="parenting-content">
            <p>
              Dr. Bhooshan Shanbhag is a financial markets expert who brings his
              most valuable insights from his experience as a parent. He developed
              a unique philosophy, &quot;The Gardener and the Architect,&quot; which focuses
              on creating the right environment for a child&apos;s natural abilities to
              grow rather than forcing rigid outcomes. This approach was validated
              when his daughter topped the All India UCEED exam in 2015. By
              applying principles of discipline, observation, and long-term
              thinking, he helps parents shift from control-driven methods to
              performance-focused nurturing.
            </p>
            <h4>{signature}</h4>
          </div>

          <div className="parenting-image">
            <Image
              src="/images/img.png"
              alt="Family learning together"
              width={600}
              height={450}
              priority
            />
          </div>
        </div>

        <div className="parenting-row reverse">
          <div className="parenting-image">
            <Image
              src="/images/parenting-img.png"
              alt="Nurturing your child&apos;s hidden potential"
              width={600}
              height={450}
            />
          </div>

          <div className="parenting-content">
            <p>
              Every child is born with a unique set of talents and a natural
              curiosity that, when properly channeled, can lead to extraordinary
              growth. Nurturing Your Child&apos;s Hidden Potential is designed to help
              you move beyond traditional academic metrics and discover the intrinsic
              strengths that make your child one of a kind. By focusing on emotional
              intelligence, creative problem-solving, and a growth mindset, this
              course provides a practical roadmap for parents to create an
              environment where children feel empowered to explore their interests
              and build lasting confidence. Click on the course image to proceed.
            </p>
            <h4>{signature}</h4>
          </div>
        </div>

        <div className="parenting-row">
          <div className="parenting-content">
            <p>
              Dr. Bhooshan Shanbhag is a financial markets expert who brings his
              most valuable insights from his experience as a parent. He developed
              a unique philosophy, &quot;The Gardener and the Architect,&quot; which focuses
              on creating the right environment for a child&apos;s natural abilities to
              grow rather than forcing rigid outcomes. This approach was validated
              when his daughter topped the All India UCEED exam in 2015. By
              applying principles of discipline, observation, and long-term
              thinking, he helps parents shift from control-driven methods to
              performance-focused nurturing.
            </p>
            <h4>{signature}</h4>
          </div>

          <div className="parenting-image">
            <Image
              src="/images/parenting-img2.png"
              alt="Money matters for young minds"
              width={600}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

