import React from 'react'
import './nav.css'
import {motion} from 'framer-motion'
import {Glitch} from "react-teffex";
const Navbar = () => {
  return (
    <div>
      <div className="navfather">
        <div className="leftside">
        <Glitch alphabet buffer={6} text={"FUTURE"} />
          <span className='yellowlogo'>GYM</span>
        </div>
        <div className="rightside">
           <motion.div className="homenavigation"
              transition={{
                type:"spring",
                stiffness:100
              }}
              whileHover={{
                x:5,
              }}
              whileTap={{
                scale:0.8,
              }}
           >
            HOME
           </motion.div>

           <motion.div className="aboutnavigation"
            transition={{
              type:"spring",
              stiffness:100
            }}
            whileHover={{
              x:5,
            }}
            whileTap={{
              scale:0.8,
            }
            }>
            ABOUT
           </motion.div>

           <motion.div className="servicesnavigation"
            transition={{
              type:"spring",
              stiffness:100
            }}
            whileHover={{
              x:5,
            }}
            whileTap={{
              scale:0.8,
            }}>
            SERVICE
           </motion.div>

           <motion.div className="contactnavigation"
              transition={{
                type:"spring",
                stiffness:100
              }}
              whileHover={{
                x:5,
              }}
              whileTap={{
                scale:0.8,
              }}>
            CONTACT
           </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
