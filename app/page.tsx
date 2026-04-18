
import Features from "@/components/features";
import Hero from "@/components/hero";
import Content from "@/components/content";
import Center from "@/components/center";
import Rows from "@/components/rows"
import Cards from "@/components/cards";
import BackImage from "@/components/backimage";
import Photo from "@/components/photo";
import {Test} from"@/components/test";


export default function Home() {
  return (
    <>
    <Hero/>
      <Features />
      <Content/>
      <Center/>
      <Rows/>
      <Cards/>
      <BackImage/>
      <Photo/>
      <Test/>
      
    </>
  );
}