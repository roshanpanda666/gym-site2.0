import React from 'react'
import './ourvalues.css'
import {Glitch} from "react-teffex";
import {motion} from 'framer-motion'
const Ourvalues = () => {
  return (
    <div>
      <div className="parrentvalue">
        <div className="leftsidevalue">
            <motion.img src="values.jpg" alt="" className='valueimg' 
            initial={{
                y:300
            }}
            transition={{
                stiffness:500
            }}
            
            whileInView={{
                y:1
            }}
            />
        </div>
        <div className="rightsidevalue">
            <div className="rightvalueheader">
                <div className="logoheart"><Glitch alphabet buffer={6} text={"OUR"} /><span className='orangevalue'>VALUES</span></div>
                
            </div>
            <div className="valuescaption">
            Maturity is achieved when a person postpones immediate pleasures for long-term values.
            </div>
            <div className="fourvalues">
                <div className="conv1">
                    <motion.div className="valuecon"
                    initial={{
                        y: -100,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:160,
                        rotatey:160,
                        
                    }}
                    >

                    </motion.div>
                    <motion.div className="valuecon"
                    initial={{
                        y: 100,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:-160,
                        rotatey:-160,
                        
                    }}>
                        
                    </motion.div>
                </div>
                <div className="conv2">
                    <motion.div className="valuecon"
                    initial={{
                        y: -100,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:160,
                        rotatey:160,
                        
                    }}
                    >
                    
                    </motion.div>
                    <motion.div className="valuecon"
                    initial={{
                        y: 100,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:-160,
                        rotatey:-160,
                        
                    }}
                    >
                        
                    </motion.div>
                </div>
                

            </div>
        </div>
      </div>
    </div>
  )
}

export default Ourvalues
