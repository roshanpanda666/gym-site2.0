import React from 'react'
import './faq.css'
import {motion} from 'framer-motion'
const Faq = () => {
  return (
    <div>
      <div className="faqfather">
        <div className="faqheader">
            <div className="faqw">
                FAQ'S
            </div>
        </div>
        <div className="faqboxes">
          <motion.div className="faqboxg1"
          initial={{

            opacity:0,
            y:100
          }}
          transition={{
            type:"spring",
            stiffness:25
          }}
          whileInView={{
            opacity:1.5,
            y:0
          }}
          >
            
              <div className="boxfaq">
                <div className="faqtxt">
                How do i boil fat ?
                </div>
                <div className="thesearchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                
              </div>
              
              
                
              <div className="boxfaq">
              <div className="faqtxt">
                How do i build more muscle ?
                </div>
                <div className="thesearchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="boxfaq">
              <div className="faqtxt">
                How do i gain weight ?
                </div>
                <div className="thesearchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
          </motion.div>
          <motion.div className="faqboxg2"
          initial={{

            opacity:0,
            y:-100
          }}
          transition={{
            type:"spring",
            stiffness:25
          }}
          whileInView={{
            opacity:1.5,
            y:0
          }}>
              <div className="boxfaq">
              <div className="faqtxt">
                How do i stay younger?
                </div>
                <div className="thesearchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="boxfaq">
              <div className="faqtxt">
                How do i increases strength ?
                </div>
                <div className="thesearchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="boxfaq">
              <div className="faqtxt">
                How do i boil fat ?
                </div>
                <div className="thesearchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default Faq
