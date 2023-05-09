import React from 'react'
import './nav.css'
import {motion} from 'framer-motion'
import {Glitch} from "react-teffex";
const Navbar = () => {
  return (
    <div>
      <div className="navfather">
        <motion.div className="leftside"
            whileHover={{
                x:2
            }}
            whileTap={{
                x:0
            }}
        >
            <Glitch alphabet buffer={6} text={"FUTURE"} />
          <span className='yellowlogo'>GYM</span>
        </motion.div>
        <div className="rightside">
          <div className="navaftermediaquery">
          <i class="fa-solid fa-bars"></i>
          </div>
           <motion.div className="homenavigation"
              transition={{
                type:"spring",
                stiffness:100
              }}
              whileHover={{
                x:5,
              }}
              whileTap={{
                x:0
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
              x:0
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
              x:0
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
                x:0
              }}>
            CONTACT
           </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
