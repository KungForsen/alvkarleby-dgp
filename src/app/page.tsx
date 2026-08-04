import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FallDivider from "@/components/FallDivider";
import SponsorStrip from "@/components/SponsorStrip";
import Info from "@/components/Info";
import FAQ from "@/components/FAQ";
import Calendar from "@/components/Calendar";
import SponsorCTA from "@/components/SponsorCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FallDivider />
        <SponsorStrip />
        <Info />
        <FAQ />
        <Calendar />
        <SponsorCTA />
        <FallDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
