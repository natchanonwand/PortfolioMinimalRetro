'use client'

import { motion } from 'framer-motion';
import React, { useState , useRef } from 'react';

export default function About() {
  const [isZoomed, setIsZoomed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleZoom = () => {
    
    setIsZoomed(current => {
      if (videoRef.current) {
        if (!current) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
      return !current; 
    })
  }

  return (
    <section className='flex'>
      <div className='w-1/5 border-r-4 border-black'>
        <h1 className='mb-1 text-xl font-bold p-3'>Skills</h1>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="docker.svg" alt="Docker" className="w-8 h-8"/>Docker
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 0.2 }}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="grafana.svg" alt="React" className="w-8 h-8"/>Grafana
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 0.4}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="next.svg" alt="Next" className="w-8 h-8"/>Next 
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 0.6}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="reactjs.svg" alt="React" className="w-8 h-8"/>React
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 0.8}}
          className='gap-2 text-sm flex items-center h-7 ml-4 mb-2'
           > 
          <img src="javascript.svg" alt="JS" className="w-7 h-7"/>Javascript
        </motion.div>  
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 1}}
          className='gap-2 text-sm flex items-center h-7 ml-4 mb-2'
           > 
          <img src="typescript.svg" alt="TS" className="w-7 h-7"/>Typescript
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 1.2}}
          className='gap-2 text-sm flex items-center h-7 ml-4 mb-2'
           > 
          <img src="html.svg" alt="HTML" className="w-7 h-7"/>HTML
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 1.4}}
          className='gap-2 text-sm flex items-center h-7 ml-4 mb-2'
           > 
          <img src="css.svg" alt="CSS" className="w-7 h-7"/>CSS Tialwind
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 1.6}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="express.svg" alt="Express" className="w-8 h-8"/>Express.js
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 1.8}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="nodejs.svg" alt="Node" className="w-8 h-8"/>Node.js
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay:2 }}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="python.svg" alt="Python" className="w-8 h-8"/>Python
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 2.2}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="mysql.svg" alt="MySQL" className="w-8 h-8"/>MySQL
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 2.4}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="mariadb.png" alt="MariaDB" className="w-8 h-2"/>MariaDB
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 ,delay: 2.6}}
          className='gap-2 text-sm flex items-center h-8 ml-4 mb-2'
           > 
          <img src="mongodb.svg" alt="MongoDB" className="w-8 h-8"/>MongoDB
        </motion.div>

      </div>




      <div className='container flex flex-col p-0'>
        <div 
          className='py-8 px-12 bg-[#EDEBF8] overflow-y-scroll scrollbar' 
          style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#000000 #f0f0f0',
          height:'340px',
  
          // backgroundImage:"url('/background7.jpg')",
          // backgroundSize: '80%',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'right center'
          }}
        >
          <h2 className='mb-8 text-3xl font-bold'>Works</h2>
          <div className='flex flex-col gap-12'>
            <motion.div
                animate={{x:2  }}
                transition={{ type: 'spring', stiffness: 80 , mass: 0.5}}
                style={{ width: '600px' }}
                className='flex-1 p-4 rounded-3xl hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
                  <a href='https://github.com/natchanonwand/API-Deployment' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-3'>
                    <div className='border border-black rounded-full p-2 transform hover:scale-110 transition duration-300'>
                      <img src="/github-mark.svg" alt="Git" className="w-10 h-10" />
                    </div>
                    <span>Backend stack: Express.js Node.js Javascript</span>
                  </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, z: -20 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ ease: 'easeOut', duration: 0.6 }} 
                style={{ width: '600px' }}
                className='flex-1 p-4 rounded-3xl hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
                  <a href='https://github.com/natchanonwand/React_Deployment' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-3'>
                    <div className='border border-black rounded-full p-2 transform hover:scale-110 transition duration-300'>
                      <img src="/github-mark.svg" alt="Git" className="w-10 h-10" />
                    </div>
                    <span>Frontend stack: React.js Javascript HTML CSS with MUI</span>
                  </a>
              </motion.div>

              <div>
                <h1 className='text-xl font-bold'>Description</h1>
                <p>
                This project focuses on the production line monitoring of the "New counting process by automatic machines." The requirements include 
                a database for the counting machine and a web application containing a dashboard for monitoring goods and a history section for inspection 
                and exporting to a CSV file.First, I have started by creating the MySQL database, which refers to the real one currently used by the company. 
                It contains all the fields that are necessary for storing all the data. After that I was working on backend API so that other service can access to 
                the database 
                </p> <img src="" alt="" />  
              </div>

              <motion.div
                initial={{ opacity: 0, z: -20 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ ease: 'easeOut', duration: 0.6 }} 
                style={{ width: '600px' }}
                className='flex-1 p-4 rounded-3xl hover:shadow-lg hover:rounded-3xl transition-shadow duration-300 hover:shadow-neumorphism'>
                  <a href='https://github.com/natchanonwand/PortfolioMinimalRetro' target='_blank' rel='noopener noreferrer' className='flex items-center space-x-3'>
                    <div className='border border-black rounded-full p-2 transform hover:scale-110 transition duration-300'>
                      <img src="/github-mark.svg" alt="Git" className="w-10 h-10" />
                    </div>
                    <span>Portfolio: Next.js React.js framer HTML Tialwind</span>
                  </a>
              </motion.div>

          </div>
        </div>

        <div className='flex w-full border-black border-t-4 ' style={{height:"300px"}}>
          <div className=' border-r-4 border-black flex flex-col items-end'> 
            <video 
              ref={videoRef}
              src="Demo.mov" 
              className={`p-1 h-full object-cover ${isZoomed ? 'zoom' : ''}`} 
              onClick={toggleZoom}  
              loop 
              muted
              style={{cursor: "pointer", transition: "transform 0.3s ease", transformOrigin: "bottom left"}} 
            ></video>
            
          </div>
          
          <div>
            
          </div>
        </div>
      </div>

      <div>

      </div>
    </section>
  )
}
