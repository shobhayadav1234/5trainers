
import Features from "@/components/features";
import Hero from "@/components/hero";
import Content from "@/components/content";
import Center from "@/components/center";
import Rows from "@/components/rows"
import Cards from "@/components/cards";
import BackImage from "@/components/backimage";
import Photo from "@/components/photo";
import { Test } from "@/components/test";
import Badge from "@/components/Badge";
import Trending from "@/components/trending";
import Contacth from "@/components/contacth";
import WhyChooseUs from "@/components/whychooseus";
import FlexibleLern from "@/components/flexiblelern";
import PlacementPartners from "@/components/placement-partners";
import FAQ from "@/components/faq";
import { FaQ } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <Hero />
      <Badge />
      <Trending />
      <WhyChooseUs />
      <Features />
      <Content />
      <Center />
      <Rows />
      <Cards />
      <BackImage />
      <Photo />
      <FlexibleLern/>
      <PlacementPartners/>
      <FAQ/>
      <Test />
      <Contacth />


    </>
  );
}