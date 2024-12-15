import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Courses from "@/components/CorsesSections"
import Animatedscoller from '@/components/AnimatedScroller'
import MovingCardsLeft from "@/components/MovingCardsLeft";
import FeatureWebinar from "@/components/FeatureWebinar";
import Introctur from "@/components/Introctur";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
   <div className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased">
    <HeroSection/>
   </div>
   <div>
      <Courses/>
   </div>
   <div>
    <Animatedscoller/>
   </div>
   <div>
      <MovingCardsLeft/>
   </div>
   <div>
    <FeatureWebinar/>
   </div>
  <div>
    <Introctur/>
  </div>
  <div>
    <Footer/>
  </div>
   </>
  );
}
