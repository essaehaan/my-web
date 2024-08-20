import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (

  <section className="h-full">
    <div className="container max-auto h-full">
      <div className=" flex flex-col xl:flex-row items-center justify-between
      xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I'am <br /><span className=" text-accent">Essa Ehaan</span>
          </h1>
          <p className="max-w-[650px] mb-9 text-white/80">
            As a dedicated web developer, I specialize in creating dynamic and responsive websites using the latest technologies. With a strong focus on user experience and clean, efficient code, I bring visions to life by delivering innovative and scalable web solutions. My passion lies in continuous learning and adapting to new trends to ensure that every project meets the highest standards of quality and performance. 

          </p>

          <div>

            <Button variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
            >
              <span>Download</span>
              <FiDownload className="text-xl" />

            </Button>

          </div>

        </div>
          <div>Picture</div>
      </div>


    </div>

  </section>


  
  );
}
