
import Features from "@/components/landing-popularcourses";
import Hero from "@/components/landing-strip";
import Content from "@/components/landing-techskills";
import Center from "@/components/landing-cta";
import Rows from "@/components/landing-trending-courses"
import Cards from "@/components/landing-course";
import Photo from "@/components/landing-gallery";
import { Test } from "@/components/testimonial";
import Badge from "@/components/ourpartnered-landing";
import Trending from "@/components/landing-toptrending";
import Contacth from "@/components/landing-contact";
import WhyChooseUs from "@/components/why-choose-us";
import FlexibleLern from "@/components/landing-flexible-learning";
import PlacementPartners from "@/components/landing-placement-partners";
import FAQ from "@/components/landing-faqs";
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
      <Rows />
      <Center />
      <Cards />
      <Photo />
      
      <FlexibleLern/>
      <PlacementPartners/>
      <FAQ/>
      <Test />
      <Contacth />


    </>
  );
}