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
                y:-300,
                opacity:0.5
            }}
            transition={{
                type:"spring",
                stiffness:30
            }}
            
            whileInView={{
                y:1,
                opacity:1.5
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
                        
                        opacity:0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:380,
                        rotatey:380,
                        opacity:1.5
                        
                    }}
                    > <div className="hearticon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                        VALUE 1
                        
                        <div className="valuecaption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus a sint?
                        </div>

                    </motion.div>
                    <motion.div className="valuecon"
                    initial={{
                        opacity:0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:-380,
                        rotatey:-380,
                        opacity:1.5
                        
                    }}>
                        <div className="hearticon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                        VALUE 2
                        <div className="valuecaption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus a sint?
                        </div>
                    </motion.div>
                </div>
                <div className="conv2">
                    <motion.div className="valuecon"
                    initial={{
                        opacity:0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:380,
                        rotatey:380,
                        opacity:1.5
                        
                    }}
                    >
                        <div className="hearticon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    VALUE 3
                    <div className="valuecaption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus a sint?
                        </div>
                    </motion.div>
                    <motion.div className="valuecon"
                    initial={{
                        opacity:0
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    whileInView={{
                        y:1,
                        rotateX:-380,
                        rotatey:-380,
                        opacity:1.5
                    }}
                    >
                        <div className="hearticon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                        VALUE 4
                        <div className="valuecaption">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus a sint?
                        </div>
                    </motion.div>
                </div>
                

            </div>
        </div>
      </div>
    </div>
  )
}

export default Ourvalues
