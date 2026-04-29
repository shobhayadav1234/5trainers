import React from "react";
import Placement from "@/components/placement-hero-section";
import PlacementPage from "@/components/placement-top-recruiters";
import Employ from "@/components/placement-packages";
import Alumni from "@/components/alumini";
import Review from "@/components/placement-testimonials";
import Black from "@/components/placement-form";
import Logo from "@/components/placement-partners";


const Page = () => {
  return (
    <>
    
    <Placement/>
    <PlacementPage/>
    <Employ/>
    <Alumni/>
    <Review/>
    <Black/>
    <Logo/>
    </>
  );
};

export default Page;