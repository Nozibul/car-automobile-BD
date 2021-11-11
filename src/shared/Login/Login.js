import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import img from '../../images/slider1.jpg'
const Login = () => {
    const [loginData, setLoginData] = useState('') 

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value ;
        const newData = {...loginData}
        newData[field]= value
        setLoginData(newData);
    }

    const handleSubmitLogin = e =>{
       e.preventDefault()
    }
  
    return (
      
       <div className="container-fluid row g-2 ">
           <div className="col-lg-6">
              <img className="login-img" src={img} alt="" />
           </div>
           <div className="col-lg-6 text-center login">
           <h3 className="fw-bolder mt-2 text-white">Login</h3> 
              <div className="form">
              <form  onSubmit={handleSubmitLogin}>
                <input onChange={handleOnChange} className="input-area" name="email" type="email" placeholder="email" /> <br />
                <input onChange={handleOnChange} className="input-area mt-2" name="password" type="password"   placeholder="password" /> <br />
                    <input className="input-submit mt-3"  type="submit" value="login" />
                </form>
                <div className="text-white">-----------------------OR-----------------------</div>
                <button className="input-submit" >Google Sign In</button>
                <p className="text-white fw-bolder mt-2">New User?<Link className="text-dark fw-bolder" to="/register"> Please Register</Link></p>
    
              </div>
           </div>
       </div>
       
    );
};

export default Login;