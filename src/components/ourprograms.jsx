import React from 'react'
import './ourprograms.css'
import {motion} from 'framer-motion'
import {Glitch} from "react-teffex";
const Ourprograms = () => {
  return (
    <div>
      <div className="programparrent">
        <div className="upperheader">
            <div className="ourprogram">
            <Glitch alphabet buffer={4} text={"OUR"} />
            <span className='orangecoloredprogram'>PROGRAMS</span>
            </div>
        
            <div className="downdivp">
                <motion.div className="fourcontainer"
                 initial={{
                    x:-40,
                    opacity:0
    
                }}
                transition={{
                    type:"spring",
                    stiffness:10
                }}
                whileInView={{
                    x:1,
                    rotateY:10,
                    opacity:1.5
                }}
                >
                    <div className="cont1">

                    
                        <motion.div className="container"
                        whileHover={{ scale: 1.1}}
                        transition={{stiffness:15}}
                        >
                            <div className="communityico">
                            <i class="fa-solid fa-people-group"></i>
                            </div>
                            <div className="firstprogram">
                                PROGRAM 1
                            </div>
                            <div className="program1content">
                                strength exercises
                            </div>
                            <motion.button className='blueherobtn'
                            whileTap={{
                                color:"orange"
                            }}>
                                explore more
                            </motion.button>
                        </motion.div>
                        <motion.div className="container"
                        whileHover={{ scale: 1.1}}
                        transition={{stiffness:15}}>
                            <div className="communityico">
                            <i class="fa-solid fa-people-group"></i>
                            </div>
                            <div className="firstprogram">
                                PROGRAM 2
                            </div>
                            <div className="program1content">
                                fat lose
                            </div>
                            <motion.button className='blueherobtn'
                            whileTap={{
                                color:"orange"
                            }}>
                                explore more
                            </motion.button>
                        </motion.div>
                    </div>
                    <div className="cont2">

                    
                        <motion.div className="container"
                        whileHover={{ scale: 1.1}}
                        transition={{stiffness:15}}>
                            <div className="communityico">
                            <i class="fa-solid fa-people-group"></i>
                            </div>
                            <div className="firstprogram">
                                PROGRAM 3
                            </div>
                            <div className="program1content">
                                muscle build
                            </div>
                            <motion.button className='blueherobtn'
                            whileTap={{
                                color:"orange"
                            }}>
                                explore more
                            </motion.button>
                        </motion.div>
                        <motion.div className="container"
                        whileHover={{ scale: 1.1}}
                        transition={{stiffness:15}}>
                            <div className="communityico">
                            <i class="fa-solid fa-people-group"></i>
                            </div>
                            <div className="firstprogram">
                                PROGRAM 4
                            </div>
                            <div className="program1content">
                                sports activity
                            </div>
                            <motion.button className='blueherobtn'
                            whileTap={{
                                color:"orange"
                            }}>
                                explore more
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Ourprograms
