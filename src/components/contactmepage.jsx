import React from 'react'
import './contactmepage.css'
const Contactmepage = () => {
  return (
    <div>
      <div className="contactfather">
        <div className="contactchild">
            <div className="headercontactme">
                contact us
            </div>
            <div className="contactmecontent">
            <div className="gmaildiv">
                    <div className="gmailtxt">
                        Full Name:
                    </div>
                    <input type="text" className='yourname'/>
                </div>
                <div className="gmaildiv">
                    <div className="gmailtxt">
                        Gmail:
                    </div>
                    <input type="text" className='yourgmail'/>
                </div>
                <div className="gmaildiv">
                    <div className="gmailtxt">
                        massage:
                    </div>
                    <input type="text" className='yourmassage'/>
                </div>
                
                
            </div>
            
            
        </div>
        <div className="iconsparrent">
        <div className="iconscontact">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-twitter"></i>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contactmepage
