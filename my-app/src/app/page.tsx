import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
   <div className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased">
    <HeroSection/>
   </div>
  );
}
