"use client"
import { motion } from "framer-motion"
import React, {useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "PHC Global Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{named:"HTML 5"}, {named:"CSS 3"}, {named:"Javascript"}, {named:"Php"}],
    image:"/public/assets/work/phc.png",
    live: "https://phcglobal.org/",
    github: "", 
  },
  {
    num: "02",
    category: "Frontend",
    title: "FJICD Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{named:"HTML 5"}, {named:"CSS 3"}, {named:"Javascript"}, {named:"Php"}],
    image:"/public/assets/work/fjicd.png",
    live: "https://fjicd.edu.pk/",
    github: "", 
  },
  {
    num: "03",
    category: "Frontend",
    title: "Marryland Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{named:"HTML 5"}, {named:"CSS 3"}, {named:"Javascript"}, {named:"React"}],
    image:"/public/assets/work/maryland.png",
    live: "https://www.maryland.com.pk/",
    github: "", 
  },
  {
    num: "04",
    category: "Frontend",
    title: "My Own Profile",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{named:"HTML 5"}, {named:"Tailwind"}, {named:"Javascript"}, {named:"React"}],
    image:"/public/assets/work/essaehaan.png",
    live: "https://essaehaan.netlify.app/",
    github: "", 
  },
];

const Work = () => {
  const  [project, steProject] =useState (projects[0]);
  return (
    <motion.section initial={{ opacity:0  }}
    animate={{ opacity: 1 }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">{project.stack.map((item, index) => {
              return(
                <li key={index}
                className="text-xl text-accent">{item.named}
                {index !== project.stack.length -1 && ","}
                </li>
              )
            })}</ul>
            <div className="border border-white/20"></div>
            <div className="flex item-center gap-4">
        <Link href={project.live}>
        <TooltipProvider skipDelayDuration={100}>
          <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
              </TooltipTrigger>
              <TooltipContent className="bg-white rounded">
                <p>Live Project</p>
              </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </Link>

        <Link href={project.github}>
        <TooltipProvider skipDelayDuration={100}>
          <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
              </TooltipTrigger>
              <TooltipContent  className="bg-white rounded">
                <p>Github Repo</p>
              </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </Link>
       </div>
          </div>
        </div>
       <div className="w-full xl:w-[50%]">slider</div>
       
      </div>
      </div>
    </motion.section>
  )
}

export default Work
