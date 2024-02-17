import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/Aboutus";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/Partners";
import OurProjects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Stats />
      <Services />
      <WhyChooseUs />
      <OurProjects />
      <OurPartners />
      <CTA />
      <Footer />
    </>
  );
}
