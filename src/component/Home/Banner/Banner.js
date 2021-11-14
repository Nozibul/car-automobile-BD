import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className="banner text-center">
            
                <h1 className=" animation-title fw-bolder text-white fs-1 pt-5">CAR's <span className="bd">BD</span></h1>
                <h3 className="animation-text fw-bolder txt-cl fs-3 mt-5"> <span className="bd-title">LUXURY CAR</span> <br /> Where would you like to go?</h3>
            
        </div>
    );
};

export default Banner;