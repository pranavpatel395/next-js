import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Courses from "@/components/CorsesSections"
import Animatedscoller from '@/components/AnimatedScroller'

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
   </>
  );
}
