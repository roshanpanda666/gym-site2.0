import React from 'react'
import './services.css'
import {motion}from 'framer-motion'
const Services = () => {
  return (
    <div>
      <div className="serviecesfather">
        <div className="headerboxofsaervices">
            Our Services
        </div>
        <div className="servicesboxes">
            <div className="servicebox1">
                <motion.div className="servicebox"
                initial={{
                    opacity:0
                }}
                transition={{
                    type:'spring',
                    stiffness:20
                }}
                whileInView={{
                    opacity:1.5,
                    rotateX:360
                }}
                >
                    wight training
                    <div className="icodumble">
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, nemo.
                </motion.div>
                <motion.div className="servicebox"
                initial={{
                    opacity:0
                }}
                transition={{
                    type:'spring',
                    stiffness:20
                }}
                whileInView={{
                    opacity:1.5,
                    rotateX:360
                }}
                >wight training
                <div className="icodumble">
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt.
                    </motion.div>
                <motion.div className="servicebox"
                initial={{
                    opacity:0
                }}
                transition={{
                    type:'spring',
                    stiffness:20
                }}
                whileInView={{
                    opacity:1.5,
                    rotateX:360
                }}
                >wight training
                <div className="icodumble">
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, laborum.
                </motion.div>
            </div>
            <div className="servicesbox2">
                <motion.div className="servicebox"
                initial={{
                    opacity:0
                }}
                transition={{
                    type:'spring',
                    stiffness:20
                }}
                whileInView={{
                    opacity:1.5,
                    rotateX:-360
                }}>wight training
                <div className="icodumble">
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, at.
                </motion.div>
                <motion.div className="servicebox"
                initial={{
                    opacity:0
                }}
                transition={{
                    type:'spring',
                    stiffness:20
                }}
                whileInView={{
                    opacity:1.5,
                    rotateX:-360
                }}
                >wight training
                <div className="icodumble">
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, soluta?
                </motion.div>
                <motion.div className="servicebox"
                initial={{
                    opacity:0
                }}
                transition={{
                    type:'spring',
                    stiffness:20
                }}
                whileInView={{
                    opacity:1.5,
                    rotateX:-360
                }}
                >wight training
                <div className="icodumble">
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, blanditiis.
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
