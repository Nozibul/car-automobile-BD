import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import {  Spinner } from 'react-bootstrap';
import img from '../../images/slider1.jpg'
import useAuth from '../../component/Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({}) 

   const {user, isLoading, createLoginUser} = useAuth()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value ;
        const newData = {...loginData}
        newData[field]= value

        setLoginData(newData);
    }

    const handleSubmitLogin = e =>{
        alert('User create successfully')
        createLoginUser(loginData?.email, loginData?.password)
       e.preventDefault()
    }
  
    return (
      
       <div className="container-fluid row g-2 ">
           <div className="col-lg-6">
              <img className="login-img" src={img} alt="" />
           </div>
           <div className="col-lg-6 text-center login">
           <h3 className="fw-bolder mt-2 text-white">Login</h3> 
           {!isLoading && <div className="form">
              <form  onSubmit={handleSubmitLogin}>
                <input onBlur={handleOnChange} className="input-area" name="email" type="email" placeholder="email" /> <br />
                <input onBlur={handleOnChange} className="input-area mt-2" name="password" type="password"   placeholder="password" /> <br />
                    <input className="input-submit mt-3"  type="submit" value="login" />
                </form>
                <div className="text-white">-----------------------OR-----------------------</div>
                <button className="input-submit" >Google Sign In</button>
                <p className="text-white fw-bolder mt-2">New User?<Link className="text-dark fw-bolder" to="/register"> Please Register</Link></p>
    
              </div> }      
                  {isLoading && <Spinner animation="grow" variant="danger" />}
           </div>
       </div>
       
    );
};

export default Login;