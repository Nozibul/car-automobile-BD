import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className="banner text-center">
            <h1 className="fw-bolder text-white fs-1 pt-5">CAR's <span className="bd">BD</span></h1>
            <h3 className="fw-bolder txt-cl fs-1 mt-5"> <span className="bd-title">LUXURY CAR</span> <br /> Where would you like to go?</h3>
        </div>
    );
};

export default Banner;