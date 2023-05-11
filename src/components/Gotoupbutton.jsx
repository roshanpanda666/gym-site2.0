import React from 'react'
import './topgobutton.css'
import {motion} from 'framer-motion'
const Gotoupbutton = () => {
    const gototop=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
  return (
    <div>
      <div className="buttonfather">
        <motion.button className="buttontotop" onClick={gototop}
            whileHover={{y:-10}}
            whileTap={{scale:0.8}}
            
        ><i class="fa-solid fa-arrow-up"></i></motion.button>
      </div>
    </div>
  )
}

export default Gotoupbutton
