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

// A propos
const about = {
  title: "A propos de moi",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate ut deleniti minima debitis quisquam nam totam sequi eum tenetur perspiciatis sit, nostrum illum. Ut quam laudantium provident nihil voluptatum quaerat! A numquam accusantium ullam odio, corrupti nulla praesentium nesciunt quam veritatis molestiae consequuntur expedita excepturi cumque, tempore perferendis! Obcaecati accusantium vel omnis quidem quisquam quam repellendus blanditiis consequuntur eaque?",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Euloge TABALA",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+242) 06 529 84 98",
    },
    {
      fieldName: "Expérience:",
      fieldValue: "7+ ans",
    },
    {
      fieldName: "Nationalité:",
      fieldValue: "Congolais",
    },
    {
      fieldName: "Email",
      fieldValue: "th@eulogetabala.cg",
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Langues:",
      fieldValue: "Anglais, Français",
    },
  ],
};

// Expérience

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptatibus soluta nobis distinctio quia vero sequi et?",
  items: [
    {
      société: "Web Design",
      position: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
    {
      société: "Dreamwork",
      position: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
    {
      société: "Global Agency",
      position: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
    {
      société: "@VisionNik",
      position: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
    {
      société: "Aitec",
      position: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
    {
      société: "Tech Solution",
      position: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon parcours",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptatibus soluta nobis distinctio quia vero sequi et?",
  items: [
    {
      institution: "Ecole Africaine de Développement",
      degree: "Full Stack Developer",
      duration: "Avril 2021 - Present",
    },
    {
      société: "Udemy",
      degree: "Full Stack Developer Bootcamp",
      duration: "2023",
    },
    {
      société: "Udemy",
      degree: "Full Stack Developer Bootcamp",
      duration: "2023",
    },
  ],
};

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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.société}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-6">
                  {skills.skillist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip >
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>


            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[600px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent> 
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
