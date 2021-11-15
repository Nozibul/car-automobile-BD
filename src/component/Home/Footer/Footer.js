import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-2 col-sm-12">
                     <h4>Contact</h4> 
                     <hr className="text-white w-50 m-auto" />
                     <ul>
                         <li>Phone: ++88057491</li>
                         <li>Email: automobile@carbd.com</li>
                         <li>Address: southzone, BD</li>
                         
                     </ul>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-12">
                     <h4 className="ms-3">Support</h4>
                     <hr className="text-white w-50 m-auto" />
                     <ul>
                         <li>Online Consultancy</li>
                         <li>Free Consultancy</li>
                         <li>Contact Support</li>
                     </ul>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-12">
                     <h4 className="me-2">Social Service</h4>
                     <hr className="text-white w-50 m-auto" />
                     <div>
                       <i className="fab fa-facebook"></i>
                       <i className="fab fa-twitter"></i>
                       <i className="fab fa-linkedin"></i>
                       <i className="fab fa-whatsapp-square"></i>
                      </div>
                     </div>
                    
                  </div>
                 
                </div>
                <hr />
            <span className="text-white">&copy;Copyright 2021 |car-automobile-BD | All right reserved.</span>
        </div>
    );
};

export default Footer;