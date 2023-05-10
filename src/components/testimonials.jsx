import React from 'react'
import './testimonials.css'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <div>
      <div className="fathertestice">
            <motion.div className="testiheader"
                initial={{
                    opacity:0
                }}
                whileInView={{
                    opacity:1
                }}
            >
                Testimonials ;;
            </motion.div>
            <motion.div className="testibody"
            initial={{
                x:-50,
                opacity:0
            }}
            transition={{
                type:"spring",
                stiffness:200,
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
                <div className="peopleico">
                <i class="fa-solid fa-user"></i>
                </div>
                <div className="testicontent">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ullam voluptatibus accusantium?
                </div>
                <div className="testibuttons">
                    <button className="testibutton"><i class="fa-solid fa-arrow-right" ></i></button>
                </div>
            </motion.div>
      </div >
    </div>
  )
}

export default Testimonials
