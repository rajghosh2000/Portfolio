"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from 'framer-motion';

const publications = [
  {
    num: '01',
    title: 'abc',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.',
    href: '#'
  },
  {
    num: '02',
    title: 'abc',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.',
    href: '#'
  },
  {
    num: '03',
    title: 'abc',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.',
    href: '#'
  },
  {
    num: '04',
    title: 'abc',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.',
    href: '#'
  },
  {
    num: '05',
    title: 'abc',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.',
    href: '#'
  },
]

const Publications = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-4 xl:py-0 md:mt-2 xl:mt-2"> 
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity:1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[60px]"
          >
            {publications.map((pub, index) => {
              return(
                <div 
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  
                  {/* TOP */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{pub.num}</div>
                    <Link 
                      href={pub.href}
                      className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-2xl"/>
                    </Link>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                    {pub.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-white/60 text-[12px]">
                    {pub.desc}
                  </p>

                  {/* BORDER */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    )
  }
  
  export default Publications