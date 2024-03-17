'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className='flex flex-col md:flex-col lg:flex-row-reverse'>
      <div className='w-full md:w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-[3px] mb-8 md:mb-8 lg:mb-0' style={{ boxSizing: 'border-box' }}>
        <video 
          muted 
          autoPlay 
          loop
          src="Profile.mp4"
          className='h-[100%] md:max-h-[640px] object-cover border-2 border-black'
        ></video>
      </div>
      <div className='container py-12 w-full lg:w-1/2'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='mb-12 text-5xl font-bold'
        >
          Hi!
        </motion.h1>
        <h2 className='mb-12 text-3xl font-bold'>I'm Natchanon Wandondang</h2>
        <p className='max-w-lg'>
          My nickname is Nat. I'm currently a 4th-year student at KMUTNB, majoring in Electrical and Computer Engineering. 
          I'm looking for a great opportunity to start my first job as a Software Developer.
        </p>
      </div>
    </section>
  )
}
