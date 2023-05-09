import React from 'react'
import './hero.css'
import {motion} from 'framer-motion'
import {Glitch} from "react-teffex";
const Hero = () => {
  return (
    <div>
      <div className="parrent">
        <div className="leftsideH">
            <motion.div className="leftcontent"
            initial={{
                y:-40,
                opacity:0

            }}
            animate={{
                y:0,
                opacity:1.5
            }}
            transition={{
                type:"spring",
                stiffness:15
            }}
            whileInView={{
                y:40,
                opacity:1.5
            }}
            >
                <motion.div className="workoutlink"
                whileHover={{
                    x:3
                }}>
                    <Glitch alphabet buffer={6} text={"#100DaysOf"} /><span className='daysworkout'>Workout</span>
                </motion.div>
                
                <div className="heroheader">
                    <h1>JOIN THE LEGENDS OF <br></br>THE FITNESS WORLD</h1>
                </div>
                <div className="heroquote">
                Not everyone can wake up every day feeling energized and motivated to put in the hard work that it takes to stay fit.
                </div>
                <motion.div className="buttonhero"
                whileHover={{
                    x:3,
                }}
                whileTap={{
                    x:-2
                }}
                >

                    <button className='blueherobtn'>
                        GET STARTED
                    </button>
                </motion.div>
            </motion.div>
            
            
        </div>
        <div className="rightsideH">
            <div className="orangecircleparrent">
               <motion.div className="orangecircle"
               initial={{
                y:-40,
                opacity:0,
                scale:0
            }}
            animate={{
                y:0,
                opacity:1.5,
                scale:1
            }}
            transition={{
                type:"spring",
                stiffness:150
            }}
            whileInView={{
                y:0,
                opacity:1.5,
                scale:1.2
            }}
               >
            </motion.div>
            

            </div>
            <motion.div className="mainimage"
            initial={{
                y:40,
                opacity:0,
                
            }}
            animate={{
                y:-40,
                opacity:1.5,
                
            }}
            transition={{
                type:"spring",
                stiffness:50
            }}
            whileInView={{
                y:0,
                opacity:1.5
            }}>
                <img src="main_header.png" alt="" className='mainimageofhero' />
            </motion.div>
                
        </div>
      </div>
      
    </div>
  )
}

export default Hero
