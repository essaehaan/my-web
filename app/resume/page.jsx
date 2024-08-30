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
  title: "My Experience",
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
  eItem:
   [
     {
       institution: "Uswa Public School & C Nagar",
       degree: "Matricullation",
       eDuration: "Jun-12 - Dec-14",

     },
     {
      institution: "VPS & C",
      degree: "Intermidiate",
      eDuration: "Jun-14 - Dec-16",

    },
    {
      institution: "Iqra University",
      degree: "BS(SE)",
      eDuration: "Jun-17 - May-22",

    },
    {
      institution: "SMIT",
      degree: "MERN Stake Developer",
      eDuration: "May-24 - Present",

    },
     
  ]

}

const skills ={
  title: "My Skills",
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {experience.item.map((item, index)=> {
                      return(
                      <li key={index}>
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                      )
                    })
                    }
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {eduction.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {eduction.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {eduction.eItem.map((eItem, index)=> {
                      return(
                      <li key={index}>
                        <span>{eItem.eDuration}</span>
                        <h3>{eItem.degree}</h3>
                        <div>
                          <span></span>
                          <p>{eItem.institution}</p>
                        </div>
                      </li>
                      )
                    })
                    }
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {skills.item.map((skillList, index)=> {
                      return(
                      <li key={index}>
                        <span>{skillList.duration}</span>
                        <h3>{skills.position}</h3>
                        <div>
                          <span></span>
                          <p>{skillList.company}</p>
                        </div>
                      </li>
                      )
                    })
                    }
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {experience.item.map((item, index)=> {
                      return(
                      <li key={index}>
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                      )
                    })
                    }
                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
     
    </motion.div>
  )
}

export default Resume
