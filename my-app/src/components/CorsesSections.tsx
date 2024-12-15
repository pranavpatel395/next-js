"use client"
import Link from "next/link"
import Datacourses from "@/data/corses.json"
import { BackgroundGradient } from "@/components/ui/background-gradient"


interface Corses{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  isFeatured: boolean

}

const CorsesSections = () => {

  const featureCorses= Datacourses.corses.filter((corses:Corses) => corses.isFeatured )

  return (
    <div className="h-auto mx-20 bg-gray-900">
      <div className="text-center  "><h1 className=" text-green-300 font-bold pt-8 text-3xl">
      Feature Courses</h1>
      <p className="text-5xl font-bold pt-6">Learn Courses Now </p>
      </div>
      <div className=" mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
            {featureCorses.map((corses:Corses)=>(
            <div key={corses.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4  bg-white dark:bg-zinc-900">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{corses.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{corses.description}</p>
                  <Link className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800" href={`/corses/${corses.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
            ))}
        </div>
      </div>
      <div className="text-center mt-12 text-xl " >
        <Link className="bg-black rounded w-14 h-36" href={"/courses"} >
        see All
        </Link>
      </div>
    </div>
  )
}

export default CorsesSections
