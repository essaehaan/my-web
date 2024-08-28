"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services  = [
  {
      num: "01",
      title: "Web Development",
      description: "Lorem ipsum dolor, sit amet consectetur elit.",

  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor, sit amet consectetur elit.",

},
{
  num: "03",
  title: "Wordpress",
  description: "Lorem ipsum dolor, sit amet consectetur elit.",

},
{
  num: "04",
  title: "Shopify",
  description: "Lorem ipsum dolor, sit amet consectetur elit.",

},

];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className=" container mx-auto">
        <motion.div 
        initial={{ opacity:0 }}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
        }}
        className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          { services.map((service, index) => {
            return(
              <div key={index}>
                <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold">{service.num}</div>
                <Link href={service.href}>
                 <BsArrowDownRight />
                </Link>

              </div> 
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="border-b border-white/70 w-full"></div>
              </div>
            )

          })}



        </motion.div>
      </div>
    </section>
  )
}
export default Services