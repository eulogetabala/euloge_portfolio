import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Photo from "@/components/ui/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Services from "./services/page";
import Resume from "./resume/page";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <section className="h-full">
     
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl ">Software Ingeener</span>
            <h1 className="h1 mb-6">
              Bonjour je suis <br />{" "}
              <span className="text-accent mb-6">Euloge Tabala</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              J&#39;excel dans la creation digitale et je suis bien assis dans
              divers languages de programmation et technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Télécharger mon CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div> 
            </div>
            {/* liens & boutton */}
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      
      <Skills/>
      <Stats/>
    </section>
  );
};

export default page;
