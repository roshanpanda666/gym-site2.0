import React from 'react'
import './about.css'
import{motion} from 'framer-motion'
const About = () => {
  return (
    <div>
      <div className="aboutfather">
      <div className="headerabout">
        <div className="aboutusreal">
        about us
        </div>
        
      </div>
        <div className="header">
            <motion.img className='imgexebala' src="header_bg_1.jpg" alt=""
            initial={{
                x: 60,
                opacity:0.2
            }}
            whileInView={{
                x:1,
                opacity:1.5
            }}
            />
            <motion.div className="abouttxt"
            initial={{
                opacity:0.2
            }}
            whileInView={{
                opacity:1.5
            }}
            >
            “If everyone is moving forward together, then success takes care of itself.” <br></br>— Henry Ford

            </motion.div>
        </div>
        <div className="maincontentabout">
            <div className="content1">
                <motion.div className="img"
                initial={{
                    y: 400,
                }}
                whileInView={{
                    y:1
                }}
                >
                    <img className='aboutusimg' src="values.jpg" alt="" />
                    
                </motion.div>
                <motion.div className="words"
                    initial={{
                        opacity:0.5
                    }}
                    whileInView={{
                        opacity:1.5,
                        
                    }}
                >
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi repellendus quis? At dolorum assumenda dicta, sunt doloremque minima, autem maiores deserunt ipsa unde voluptate fugit. Nesciunt vero labore atque ab dolore incidunt deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium debitis ullam beatae quibusdam deleniti odio magni officia fuga dicta ad explicabo, optio nostrum molestiae, porro nisi dolorum id ducimus temporibus rerum.
                </motion.div>
                
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
