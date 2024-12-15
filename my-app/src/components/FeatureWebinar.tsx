"use client"
import { HoverEffect } from "./ui/card-hover-effect";
const featureWebinars = [
  {
    "title": "Mastering React in 2024",
    "description": "A live webinar covering advanced React techniques and best practices for building modern web applications.",
    "slug": "mastering-react-2024",
    "isFeatured": true
  },
  {
    "title": "AI-Powered Development: An Introduction",
    "description": "Explore the basics of integrating AI tools into your development workflow in this interactive webinar.",
    "slug": "ai-powered-development-intro",
    "isFeatured": true
  },
  {
    "title": "Building Scalable Backend Systems with Node.js",
    "description": "Learn how to design and develop highly scalable and efficient backend systems using Node.js.",
    "slug": "scalable-backend-nodejs",
    "isFeatured": true
  },
  {
    "title": "CSS for the Modern Web: Grid, Flexbox, and Beyond",
    "description": "Deep dive into CSS layout techniques with practical examples of Grid, Flexbox, and emerging CSS features.",
    "slug": "css-modern-web-layouts",
    "isFeatured": true
  },
  {
    "title": "Full-Stack Development Crash Course",
    "description": "An end-to-end guide to full-stack development with hands-on examples using MERN stack technologies.",
    "slug": "full-stack-development-crash-course",
    "isFeatured": true
  }
]


const FeatureWebinar = () => {
  return (
    <div>
      <div>
        <h1 className=" text-center text-2xl font-bold  text-green-600">Feature Webinar</h1>
        <p className="text-center font-bold text-4xl ">Enhance Your Coding Journy</p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={featureWebinars.map( webinar => (
        {
          title: webinar.title,
          description:webinar.description,
          link: `/webinars/${webinar.slug}`
       
        }
      ))} />
    </div>
    </div>
  )
}

export default FeatureWebinar
