"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const skills = {
    title: "Mes compétences",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis impedit laboriosam ad vero ut?",
    skillist: [
      {
        icon: <FaHtml5 />,
        name: "Html 5",
      },
      {
        icon: <FaCss3 />,
        name: "Css 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaReact />,
        name: "ReactJs",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
      {
        icon: <SiTailwindcss />,
        name: "TailwindCss",
      },
    ],
  };

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[50vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto">
     
    <section  className="w-full h-full  ">
              <div className="flex flex-col gap-[30px]">
                {/* <div className="flex flex-col gap-[30px] items-center justify-center text-center xl:text-center">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div> */}

                <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 xl:gap-[30px] gap-6">
                  {skills.skillist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <div delayDuration={100}>
                          <div >
                            <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </div>
                            <div className=" flex justify-center items-center group">
                              <p className="capitalize">{skill.name}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
           
    </div>
    </motion.div>
  )
}

export default Skills