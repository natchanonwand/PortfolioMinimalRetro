'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className='py-12'>
      <div className='container'>
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
          My nickname is Nat. I'm currently 4th year student in KMUTNB in major of Electrical and Computer Engineering. 
          I'm looking for a great oppotunity to start a first job as a Software developer 
        </p>
      </div>
    </section>
  )
}
