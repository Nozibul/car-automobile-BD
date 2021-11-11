import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../component/Hooks/useAuth';
import img from '../../images/yellow-sport-car-slider2.jpg'
const Register = () => {

    const {createRegisterUser,isLoading} = useAuth()
    const [loginData, setLoginData,user] = useState({}) 

    const handleOnChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value ;
        const newData = {...loginData}
        newData[field]= value

        setLoginData(newData);
    }
    const handleSubmitRegister = e =>{
        // console.log(loginData)

        alert('successfully register')
        createRegisterUser(loginData?.email, loginData?.password)

        e.preventDefault()
    } 
    return (
        
       <div className="container-fluid row g-2 ">
       <div className="col-lg-6">
          <img className="login-img" src={img} alt="" />
       </div>
        <div className="col-lg-6 text-center login">
           <h3 className="fw-bolder mt-2 text-white">Register</h3> 
           {!isLoading && <div className="form">
           <form  onSubmit={handleSubmitRegister}>
            {/* <input onBlur={handleOnChange} className="input-area " name="name" type="text"   placeholder="your name" /> <br /> */}
            <input onBlur={handleOnChange} className="input-area mt-2" name="email" type="email" placeholder="email" /> <br />
            <input onBlur={handleOnChange} className="input-area mt-2" name="password" type="password"   placeholder="password" /> <br />
            <input onBlur={handleOnChange} className="input-area mt-2" name="password2" type="password"   placeholder="re-type-password" /> <br />
            <input className="input-submit mt-3"  type="submit" value="Submit" />
            </form> 
            <div className="text-white">-----------------------OR-----------------------</div>
            <button className="input-submit" >Google Sign In</button>
            <p className="text-white fw-bolder mt-2">Already Register.?<Link className="text-dark fw-bolder" to="/login"> Please Login</Link></p>

          </div> }
          {isLoading && <Spinner animation="grow" variant="danger" />}
          {user?.email &&  <Alert  variant="success">Register Successfully!</Alert>}

       </div> 
   </div>
    );
};

export default Register;