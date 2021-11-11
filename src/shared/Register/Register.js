import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/yellow-sport-car-slider2.jpg'
const Register = () => {
    const [registerData, setRegisterData]= useState('')

    const handleOnChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData}
        newRegisterData[field]= value;
        setRegisterData(value)
    }
    const handleSubmitRegister = e =>{
        alert('successfully register')
        e.preventDefault()
    } 
    return (
        
       <div className="container-fluid row g-2 ">
       <div className="col-lg-6">
          <img className="login-img" src={img} alt="" />
       </div>
       <div className="col-lg-6 text-center login">
           <h3 className="fw-bolder mt-2 text-white">Register</h3> 
          <div className="form">
          <form  onSubmit={handleSubmitRegister}>
            <input onChange={handleOnChange} className="input-area" name="email" type="email" placeholder="email" /> <br />
            <input onChange={handleOnChange} className="input-area mt-2" name="password" type="password"   placeholder="password" /> <br />
            <input className="input-submit mt-3"  type="submit" value="Submit" />
            </form>
            <div className="text-white">-----------------------OR-----------------------</div>
            <button className="input-submit" >Google Sign In</button>
            <p className="text-white fw-bolder mt-2">Already Register.?<Link className="text-dark fw-bolder" to="/login"> Please Login</Link></p>

          </div>
       </div>
   </div>
    );
};

export default Register;