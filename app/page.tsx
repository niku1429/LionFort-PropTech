import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";
import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhySection />
      <LeadForm />
      <Footer />
    </>
  );
}