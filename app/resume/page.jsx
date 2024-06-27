"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, FaPython, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: "About Me",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate laborum vitae officiis eaque quis veritatis laboriosam dignissimos. Rerum eum aspernatur possimus ut consequuntur accusantium blanditiis quasi, officiis veritatis enim?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rajdeep Ghosh"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)-6000876674"
    },
    {
      fieldName: "Address",
      fieldValue: "Lake Town, Kolkata, West Bengal, India"
    },
    {
      fieldName: "Pincode",
      fieldValue: "700048"
    },
    {
      fieldName: "Email",
      fieldValue: "rajghosh2507@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali, Assamese, Hindi"
    },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores illo sequi, porro sed sunt fugiat itaque, asperiores inventore quo necessitatibus? Voluptatum ad praesentium maiores blanditiis culpa a eaque laudantium.",
  items: [
    {
      institute: "CSIR-Central Mechanical Engineering Research Institute (CMERI)",
      position: "Summer Research Intern",
      duration: "May 2021 - July 2021",
      guidedby: "Prof. Rajesh P Barnwal"
    },
    {
      institute: "Indian Institute of Information Technology Guwahati",
      position: "Summer Research Intern",
      duration: "May 2020 - July 2020",
      guidedby: "Prof. Manojit Ghose"
    },
    {
      institute: "Tezpur University",
      position: "Undergraduate Research Associate",
      duration: "April 2021 - July 2022",
      guidedby: "Dr. Nabajyoti Medhi"
    },
    {
      institute: "Tezpur University",
      position: "Training and Placement Student Coordinator (Dept. of CSE)",
      duration: "August 2021 - May 2022",
      guidedby: "Dr. Pijush Chandra Das"
    },
    {
      institute: "IEEE Student Branch Chapter Tezpur University",
      position: "Vice-Chairperson",
      duration: "June 2021 - Dec 2021",
      guidedby: "Dr. Rupam Goswami"
    },
    {
      institute: "University of Calcutta",
      position: "Teaching Assistant, DBMS Lab",
      duration: "Autumn 2023",
      guidedby: "Prof. Sankhayan Choudhury"
    },
    {
      institute: "University of Calcutta",
      position: "Teaching Assistant, IoT Lab",
      duration: "Autumn 2023",
      guidedby: "Prof. Sanjit Kr. Setua & Tanushyam Chattopadhyay"
    },
    {
      institute: "University of Calcutta",
      position: "Teaching Assistant, DBMS Lab",
      duration: "Spring 2024",
      guidedby: "Prof. Sankhayan Choudhury"
    },
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores illo sequi, porro sed sunt fugiat itaque, asperiores inventore quo necessitatibus? Voluptatum ad praesentium maiores blanditiis culpa a eaque laudantium.",
  items: [
    {
      institute: "University of Calcutta",
      position: "Master of Technology (M.Tech)",
      duration: "August 2022 - July 2024",
      grade: "8.66 CGPA",
      course: "Department of Computer Science and Technology"
    },
    {
      institute: "Tezpur University",
      position: "Bachelor of Technology (B.Tech)",
      duration: "July 2018 - June 2022",
      grade: "8.44 CGPA",
      course: "Department of Computer Science and Technology"
    },
    {
      institute: "Maharishi Vidya Mandir Senior Secondary School, Guwahati, Assam",
      position: "Senior High Secondary",
      duration: "2016 - 2018",
      grade: "91.83%",
      course: "Science"
    },
    {
      institute: "Maharishi Vidya Mandir Senior Secondary School, Guwahati, Assam",
      position: "High Secondary",
      duration: "2014 - 2016",
      grade: "9.6 CGPA",
      course: ""
    }
  ]
}

const skills = {
  title: "My Skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores illo sequi, porro sed sunt fugiat itaque, asperiores inventore quo necessitatibus? Voluptatum ad praesentium maiores blanditiis culpa a eaque laudantium.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <FaPhp />,
      name: "php"
    },
    {
      icon: <FaJava />,
      name: "java"
    },
    {
      icon: <FaPython />,
      name: "python"
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
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
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* content */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>

          
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;