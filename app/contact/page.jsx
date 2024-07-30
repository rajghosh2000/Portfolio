"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { LiaGlobeSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "(+91) 6000 876 674",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "rajghosh2507@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    desc: "IIT Kharagpur, West Bengal, 700048"
  },
  {
    icon: <LiaGlobeSolid />,
    title: "Website",
    desc: "http://abc.com"
  }
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px]">


          {/* Contact details */}
          <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-2xl text-accent">Let's Connect Together</h3>
            <p className="text-white/60 text-sm">
            I am always enthusiastic about connecting with fellow researchers, professionals, and those with a keen interest in the field. Whether you have a project in mind, seek advice, or simply wish to engage in a conversation about the fascinating world of Computer Science and Engineering, I am here to connect.

            Feel free to reach out !
            </p>
            <div className="items-center my-3">
              <ul className="flex flex-col xl:flex-row md:flex-row gap-[70px]">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex flex-col items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#38383e] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[30px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60 text-sm text-center my-2">{item.title}</p>
                        <h3 className="text-base text-center">{item.desc}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>


          {/* Footer */}
          <div>footer</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact