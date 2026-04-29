import Hero from "../components/Hero";
import SectorsMarquee from "../components/SectorsMarquee";
import CapabilitiesBand from "../components/CapabilitiesBand";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <SectorsMarquee />
      <Services />
      <CapabilitiesBand />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
