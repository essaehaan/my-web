"use client"
import {
FaHtml5,
FaCss3,
FaJs,
FaReact,
FaFigma,
FaNodeJs,
}
from "react-icons/fa"
import { SiTailwindcss, Sinextdotjs } from "react-icons/si"
const about ={
  title: 'About me',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
  info:[

      {
        fieldName: "Name",
        fieldValue: "Essa Ehaan",
      },
      {
        fieldName: "Phone No",
        fieldValue: "(92)332-3317898",
      },
      {
        fieldName: "Email",
        fieldValue: "developeressaehaan@gmail.com",
      },
      {
        fieldName: "LinkedIn",
        fieldValue: "Essaehaan",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Pakistani",
      },
      {
        fieldName: "Language",
        fieldValue: "English, Urdu, Buroshaski",
      },

  ]

}

const experience = {
  icon: 'assets/resume/badge',
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  item:
   [
     {
       company: "DigiBull",
       position: "Intern",
       duration: "June 21 - Aug 21",

     },
     {
      company: "PHC Global",
      position: "Associate Software Engineer",
      duration: "Nov-21 - May-22 ",

    },
    {
      company: "Jumppace Pvt Ltd",
      position: "Software Engineer",
      duration: "Feb-23 - Present",

    },
  ]

}

const eduction = {
  icon: 'assets/resume/cap.svg',
  title: "My Eduction",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
  item:
   [
     {
       institution: "Uswa Public School & C Nagar",
       degree: "Matricullation",
       duration: "Jun-12 - Dec-14",

     },
     {
      institution: "VPS & C",
      degree: "Intermidiate",
      duration: "Jun-14 - Dec-16",

    },
    {
      institution: "Iqra University",
      degree: "BS(SE)",
      duration: "Jun-17 - May-22",

    },
    {
      institution: "SMIT",
      degree: "MERN Stake Developer",
      duration: "May-24 - Present",

    },
     
  ]

}

const skills ={
  title: "My skills",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  skillList:[
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },


  ],

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"


const Resume = () => {
  return (
    <motion.div  initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {
        delay: 2.4,
        duration: 0.4, 
        ease: "easeIn"
      },
    }}
    className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>

            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>

            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
     
    </motion.div>
  )
}

export default Resume
