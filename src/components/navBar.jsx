import React, { useState } from 'react'
import './nav.css'
import {motion} from 'framer-motion'
import {Glitch} from "react-teffex";
const Navbar = () => {
  const[noshow,show]=useState("noaftermobiletransform")
  const aboutscrool=()=>{
    window.scrollTo({top:2600,left:0,behavior:'smooth'})
  }
  const showphnavi=()=>{
    
    show("aftermobiletransform")
   
  }
  const noshowmobinav =()=>{
    show("noaftermobiletransform")
  }
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

          <i class="fa-solid fa-bars" onClick={showphnavi}></i>

          <motion.div className ={noshow}
          initial={{
            y:-100,
            opacity:0
          }}
          whileInView={{
            y:1,
            opacity:1.5
          }}
          >
              <button className='lcosebutton' onClick={noshowmobinav}><i class="fa-solid fa-circle-xmark"></i></button>
          <motion.div className="homenavigatio"
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

           <motion.div className="aboutnavigatio" onClick={aboutscrool}
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
            }
            
            >
            ABOUT
           </motion.div>

           <motion.div className="servicesnavigatio"
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

           <motion.div className="contactnavigatio"
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
          </motion.div>
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

           <motion.div className="aboutnavigation" onClick={aboutscrool}
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
            }
            
            >
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
