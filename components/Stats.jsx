"use client"

import CountUp from "react-countup";


const stats =[

    {
        num: 1,
        text: "Year of Experience",

    },
    
    {
        num: 26,
        text: "Projects Completed",

    },
    
    {
        num: 4,
        text: "Technologies",

    },

    {
        num: 250,
        text: "Code Commits",

    },
]
const Stats = () => {
  return 
    <section>
      <div className="container mx-auto">
            <div>
            {stats.map((item, index) =>{
                return <div key={index}>
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>

                </div>
            })}

            </div>

      </div>
    </section>

}

export default Stats
