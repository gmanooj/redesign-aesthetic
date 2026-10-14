import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import Section6 from "@/components/Section6/Section6";
import Section7 from "@/components/Section7/Section7";
import OurOffice from "@/components/OurOffice/OurOffice";
import Section8 from "@/components/Section8/Section8";
import FAQ from "@/components/FAQ/FAQ";
import Section9 from "@/components/Section9/Section9";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface text-body selection:bg-primary selection:text-on-primary">
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <OurOffice />
        <Section8 />
        <FAQ />
        <Section9 />
      </main>
      <Footer />
    </>
  );
}

