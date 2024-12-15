import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border"
import Link from "next/link"

const HeroSEction = () => {
  return (
    <div className="h-auto md:h-[40rem w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
      <h1 className="bg-transparent text-5xl text-center mt-52 font-bold bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-50">
        Master The Art of the Coding
      </h1>
      <p className="mt-4 font-normal text-base max-w-lg mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores sed eaque nihil nemo iste fugiat? Dolores delectus aut minus, assumenda quia animi  saepe aliquam.</p>
      <div className="mt-16"><Link href={"/courses"} >
      <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"  borderRadius="1.75rem">Explore courses</Button>
      </Link></div>
      </div>
    </div>
  )
}

export default HeroSEction
