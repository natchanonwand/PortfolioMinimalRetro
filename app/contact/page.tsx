'use client'

import { motion } from 'framer-motion';
export default function Contact() {
  return (
    <section className='flex h-[600] sm:h-[660px]'>
      <div className='container py-12 '>
        
        <h2 className="w-full font-bauhaus text-center text-transparent 
              text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl"
              style={{ WebkitTextStroke: '2px black' }}>
          <span style={{ WebkitTextStroke: '2px #FFAD00', color:'#FFAD00' }}>C</span>onta
          <span style={{ WebkitTextStroke: '2px #FFAD00', color:'#FFAD00' }}>c</span>t
        </h2>



        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className='border-double border-b-8 border-black mb-8 pb-4'
        >
        </motion.div>
        <div className='flex flex-col gap-4'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.75 }} 
            className='flex-1 w-full p-6 rounded-3xl shadow-lowneumorphism hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
              <a href='https://www.instagram.com/nutcnw/' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-3'>
                <div className='border border-black rounded-full p-2 transform hover:scale-110 transition duration-300'>
                  <img src="/instagram_logo.png" alt="Instagram" className="w-6 h-6" />
                </div>
                <span>Instagram/nutcnw</span>
              </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.75 }} 
            className='flex-1 w-full p-6 rounded-3xl shadow-lowneumorphism hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
              <a href='https://www.facebook.com/natchanon.wandondang.5/' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-3'>
                <div className='border border-black rounded-full p-0.5 transform hover:scale-110 transition duration-300'>
                  <img src="/facebook_logo.svg" alt="Facebook" className="w-9 h-9" />
                </div>
                <span>Facebook/Natchanon</span>
              </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.75 }} 
            className='flex-1 w-full p-6 rounded-3xl shadow-lowneumorphism hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
              <a rel='noopener noreferrer' className='flex items-center space-x-3'>
                <div className='border border-black rounded-full p-1 transform hover:scale-110 transition duration-300'>
                  <img src="/gmail_logo.svg" alt="Gmail" className="w-7 h-7" />
                </div>
                <span>natchanonwand@gmail.com</span>
              </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.75 }} 
            className='flex-1 w-full p-6 rounded-3xl shadow-lowneumorphism hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
              <a rel='noopener noreferrer' className='flex items-center space-x-3'>
                <div className='border border-black rounded-full p-2 transform hover:scale-110 transition duration-300'>
                  <img src="/phone_logo.svg" alt="Phone" className="w-6 h-6" />
                </div>
                <span>Call 095-262-1962</span>
              </a>
          </motion.div>

        </div>
        
      </div>
      <div style={{backgroundImage:""}}>

      </div>

      <div className='hidden md:block overflow-hidden border-l-4 border-black' style={{ width: "680px", height: "auto", position: 'relative' }}>
        
        <video 
          src="Contact.mp4" 
          muted 
          autoPlay 
          loop
          style={{ 
            width: '90%', 
            height: '95%',
            objectFit: 'cover',
            border: '2px solid #000',
            borderRadius: '20px',
            position: 'absolute', 
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        ></video>
      </div>


    </section>
  )
}
