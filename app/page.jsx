import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import { FiDownload } from "react-icons/fi"
import Photo from "@/components/ui/Photo";

export default function Home() {
  return (

  <section className="h-full">
    <div className="container max-auto h-full">
      <div className=" flex flex-col xl:flex-row items-center justify-between
      xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left">
          <span className="text-xl">CMS Developer</span>
          <h1 className="h1 mb-6">
            Hello I'am <br /><span className=" text-accent">Essa Ehaan</span>
          </h1>
          <p className="max-w-[650px] mb-9 text-white/80">
            As a dedicated CMS developer, I specialize in creating dynamic and responsive websites using the latest technologies. With a strong focus on user experience and clean, efficient code, I bring visions to life by delivering innovative and scalable web solutions. My passion lies in continuous learning and adapting to new trends to ensure that every project meets the highest standards of quality and performance. 

          </p>

          <div className="flex flex-col xl:flex-row items-center gap-8">

            <Button variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
            >
              <span>Download</span>
              <FiDownload className="text-xl" />

            </Button>
            <div className=" mb-8 xl:mb-0">

              <Socials 
              containerStyle="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>

          </div>

        </div>
          <Photo />
      </div>


    </div>

  </section>


  
  );
}
