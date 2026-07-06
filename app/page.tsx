import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedSuites from "@/components/home/FeaturedSuites";
import Amenities from "@/components/home/Amenities";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedSuites />
      <Amenities />
      <Industries />
      <CTA />
    </>
  );
}